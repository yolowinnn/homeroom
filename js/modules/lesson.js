/* lesson.js — lesson reader + inline quiz + completion */
(function () {
  function render(view, id) {
    const ctx = HR.ctxById(id);
    if (!ctx) { view.innerHTML = '<div class="empty">Lesson not found.</div>'; return; }
    const les = ctx.lesson, sub = ctx.subject, st = ctx.stage;
    const done = Store.isDone(id);

    // Two-pane layout: reading material (left) + quiz (right).
    // On wide screens these sit side-by-side (see .lesson-layout in style.css)
    // so the quiz stays in view while you read — no scrolling to reach it.
    // On mobile the panes simply stack, preserving the original single column.
    let html = '<div class="lesson-layout">';

    // ---- LEFT: reading material ----
    html += '<div class="lesson-read">';
    html += '<div class="lesson-top">' +
      '<div class="l-sub" style="color:' + sub.color + '">' + sub.icon + " " + esc(sub.name) +
        ' <span class="badge-stage stage-' + st.stage + '">' + (HR.stageMeta(st.stage) ? HR.stageMeta(st.stage).grades : st.stage) + '</span></div>' +
      '<h1>' + esc(les.title) + '</h1>' +
      '<div class="muted small">' + esc(ctx.unit.title) + ' · ' + (les.minutes || 8) + ' min read</div>' +
    '</div>';

    html += '<div class="objective"><b>Learning goal</b>' + esc(les.objective) + '</div>';

    html += '<div class="lesson-body">' + les.body + '</div>';

    // key terms
    if (les.terms && les.terms.length) {
      html += '<div class="sec-h"><h2>Key terms</h2></div><div class="terms">';
      les.terms.forEach(t => {
        html += '<div class="term"><div class="t">' + esc(t.term) + '</div><div class="d">' + esc(t.def) + '</div></div>';
      });
      html += '</div>';
    }
    html += '</div>'; // .lesson-read

    // ---- RIGHT: quiz ----
    html += '<div class="lesson-quiz">';
    html += '<div class="sec-h"><h2>Check yourself</h2></div>';
    html += '<div id="quiz"></div>';
    html += '<div id="quiz-foot"></div>';
    html += '</div>'; // .lesson-quiz

    html += '</div>'; // .lesson-layout

    view.innerHTML = html;
    buildQuiz(ctx);
  }

  function buildQuiz(ctx) {
    const les = ctx.lesson;
    const quiz = les.quiz || [];
    const wrap = document.getElementById("quiz");
    const foot = document.getElementById("quiz-foot");
    const chosen = new Array(quiz.length).fill(-1);
    let submitted = false;

    function paint() {
      let h = "";
      quiz.forEach((q, qi) => {
        h += '<div class="q"><div class="q-num">Question ' + (qi + 1) + ' of ' + quiz.length + '</div>' +
          '<div class="q-text">' + esc(q.q) + '</div>';
        q.options.forEach((opt, oi) => {
          let cls = "opt";
          if (!submitted && chosen[qi] === oi) cls += " sel";
          if (submitted) {
            cls += " locked";
            if (oi === q.answer) cls += " correct";
            else if (chosen[qi] === oi) cls += " wrong";
          }
          const mark = String.fromCharCode(65 + oi);
          h += '<div class="' + cls + '" data-q="' + qi + '" data-o="' + oi + '"><div class="mk">' + mark + '</div><div>' + esc(opt) + '</div></div>';
        });
        if (submitted) h += '<div class="explain">' + esc(q.explain) + '</div>';
        h += '</div>';
      });
      wrap.innerHTML = h;
      if (!submitted) {
        wrap.querySelectorAll(".opt").forEach(n => n.addEventListener("click", () => {
          chosen[+n.dataset.q] = +n.dataset.o; paint();
        }));
      }
      paintFoot();
    }

    function paintFoot() {
      if (!submitted) {
        const answered = chosen.filter(c => c >= 0).length;
        foot.innerHTML = '<button class="btn" id="submit-btn"' + (answered < quiz.length ? " disabled" : "") + '>' +
          (answered < quiz.length ? ("Answer all (" + answered + "/" + quiz.length + ")") : "Submit answers") + '</button>';
        const b = document.getElementById("submit-btn");
        b && b.addEventListener("click", submit);
      } else {
        const score = quiz.reduce((a, q, i) => a + (chosen[i] === q.answer ? 1 : 0), 0);
        const pct = Math.round(score / quiz.length * 100);
        const next = HR.lessonAfter(les.id);
        let h = '<div class="result"><div class="big">' + score + '/' + quiz.length + '</div>' +
          '<div class="ring">' + (pct >= 75 ? "Great recall! 🎯" : pct >= 50 ? "Solid — review the misses." : "Reread and try the terms again.") + '</div></div>';
        h += '<button class="btn" id="finish-btn">✓ Mark lesson complete</button>';
        h += '<div class="spacer"></div>';
        if (next) h += '<button class="btn ghost sm" id="next-btn" style="width:100%">Next: ' + esc(next.lesson.title) + ' →</button>';
        foot.innerHTML = h;
        document.getElementById("finish-btn").addEventListener("click", () => finish(ctx, pct, next));
        const nb = document.getElementById("next-btn");
        nb && nb.addEventListener("click", () => App.openLesson(next.lesson.id));
      }
    }

    function submit() {
      submitted = true;
      paint();
      // Reveal the score/result. scrollIntoView works whether the quiz is the
      // page's flow (mobile) or its own scrollable pane (desktop two-column).
      const f = document.getElementById("quiz-foot");
      if (f) f.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function finish(ctx, pct, next) {
      const first = Store.markLessonDone(ctx.lesson.id, pct);
      SRS.seedLesson(ctx);
      App.refreshStreak(); App.refreshBadges();
      if (first) {
        Celebrate();
        const todayN = Store.Streak.todayCount(), goal = Store.dailyGoal();
        Toast(todayN >= goal ? "🔥 Daily goal hit! Streak " + Store.Streak.get() : "✓ Lesson complete · +" + (window.HR_META ? HR_META.xpPerLesson : 20) + " XP");
      } else {
        Toast("Already completed — nice review!");
      }
      const fb = document.getElementById("finish-btn");
      if (fb) { fb.textContent = "✓ Completed"; fb.disabled = true; }
    }

    if (!quiz.length) {
      wrap.innerHTML = '<div class="muted small">No quiz for this lesson.</div>';
      foot.innerHTML = '<button class="btn" id="finish-btn">✓ Mark complete</button>';
      document.getElementById("finish-btn").addEventListener("click", () => finish(ctx, null, HR.lessonAfter(les.id)));
      return;
    }
    paint();
  }

  window.Lesson = { render };
})();
