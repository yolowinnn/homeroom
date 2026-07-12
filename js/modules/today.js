/* today.js — daily home: streak, goal, continue, review, subjects overview */
(function () {
  function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  }

  function render(view) {
    const ov = HR.overall();
    const goal = Store.dailyGoal();
    const todayCount = Store.Streak.todayCount();
    const goalPct = Math.min(100, Math.round(todayCount / goal * 100));
    const due = SRS.dueCount();
    const next = HR.nextLesson();

    let html = "";

    // hero — illustrated banner + gradient body
    html += '<div class="hero">' +
      '<div class="hero-illus"><img src="assets/hero_today.jpg" alt="" loading="eager" /></div>' +
      '<div class="hero-body">' +
        '<h1>' + greeting() + ' 👋</h1>' +
        '<p>' + (todayCount >= goal
          ? "Daily goal complete. Your streak is safe! 🎉"
          : "Finish " + (goal - todayCount) + " more lesson" + (goal - todayCount > 1 ? "s" : "") + " today to keep your streak.") + '</p>' +
        '<div class="hero-stats">' +
          '<div class="hstat"><div class="n">🔥 ' + Store.Streak.get() + '</div><div class="l">Day streak</div></div>' +
          '<div class="hstat"><div class="n">' + ov.done + '</div><div class="l">Lessons done</div></div>' +
          '<div class="hstat"><div class="n">' + ov.pct + '%</div><div class="l">Overall</div></div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // daily goal ring
    html += '<div class="card"><div class="card-head"><div class="card-title">Today\'s goal</div>' +
      '<span class="pill tint">' + todayCount + ' / ' + goal + '</span></div>' +
      '<div class="bar"><i style="width:' + goalPct + '%"></i></div>' +
      '<div class="small faint" style="margin-top:8px">A "check-in" day = at least one finished lesson. Small daily reps beat cramming.</div>' +
    '</div>';

    // continue
    if (next) {
      const c = next;
      html += '<div class="sec-h"><h2>Continue learning</h2></div>';
      html += '<div class="card" id="continue-card" style="cursor:pointer">' +
        '<div class="row" style="border:none;padding:0">' +
          '<div class="r-ic" style="background:' + tint(c.subject.color) + '">' + c.subject.icon + '</div>' +
          '<div class="r-main">' +
            '<div class="r-title">' + esc(c.lesson.title) + '</div>' +
            '<div class="r-sub">' + esc(c.subject.name) + ' · ' + stageLabel(c.stage.stage) + ' · ' + (c.lesson.minutes || 8) + ' min</div>' +
          '</div>' +
        '</div>' +
        '<div class="spacer"></div>' +
        '<button class="btn" id="continue-btn">▶ Start lesson</button>' +
      '</div>';
    } else {
      html += '<div class="card center"><div style="font-size:40px">🎓</div><div class="card-title" style="margin-top:8px">You finished everything!</div><div class="muted small" style="margin-top:4px">Keep your streak alive with daily reviews.</div></div>';
    }

    // review due
    if (due > 0) {
      html += '<div class="sec-h"><h2>Review</h2><span class="link" data-go="review">Open</span></div>';
      html += '<div class="card" data-go="review" style="cursor:pointer"><div class="row" style="border:none;padding:0">' +
        '<div class="r-ic" style="background:#fff7ed">🗂️</div>' +
        '<div class="r-main"><div class="r-title">' + due + ' card' + (due > 1 ? "s" : "") + ' due</div>' +
        '<div class="r-sub">Spaced repetition keeps what you learned from fading.</div></div>' +
        '<div class="r-right">→</div></div></div>';
    }

    // subjects overview
    html += '<div class="sec-h"><h2>Subjects</h2><span class="link" data-go="learn">All</span></div>';
    html += '<div class="subj-grid">';
    HR.subjects().forEach(s => {
      const p = HR.subjectProgress(s.key);
      html += subjTile(s, p);
    });
    html += '</div>';

    // first-time method note
    if (Store.doneCount() === 0) {
      html += '<div class="card" style="margin-top:18px;background:var(--tint);border-color:var(--tint-line)">' +
        '<div class="card-title">How Homeroom works</div>' +
        '<div class="small" style="margin-top:8px;line-height:1.7">' +
        '<b>1. Learn</b> a short lesson (~8 min) of real US K–12 material.<br>' +
        '<b>2. Quiz</b> yourself right away — active recall locks it in.<br>' +
        '<b>3. Review</b> key terms later with spaced repetition.<br>' +
        '<b>4. Check in</b> daily to build a streak. Consistency wins.' +
        '</div></div>';
    }

    view.innerHTML = html;

    const cont = document.getElementById("continue-btn");
    const contCard = document.getElementById("continue-card");
    if (next) {
      const open = () => App.openLesson(next.lesson.id);
      cont && cont.addEventListener("click", (e) => { e.stopPropagation(); open(); });
      contCard && contCard.addEventListener("click", open);
    }
    view.querySelectorAll("[data-go]").forEach(n => n.addEventListener("click", () => App.go(n.dataset.go)));
    view.querySelectorAll("[data-subj]").forEach(n => n.addEventListener("click", () => App.openSubject(n.dataset.subj)));
  }

  function subjTile(s, p) {
    return '<div class="subj-tile" data-subj="' + s.key + '">' +
      '<div class="st-ic" style="background:' + tint(s.color) + '">' + s.icon + '</div>' +
      '<div class="st-name">' + esc(s.name) + '</div>' +
      '<div class="st-meta">' + p.done + ' / ' + p.total + ' lessons</div>' +
      '<div class="bar thin"><i style="width:' + p.pct + '%;background:' + s.color + '"></i></div>' +
    '</div>';
  }
  function tint(hex) { return hexA(hex, 0.13); }
  function hexA(hex, a) {
    const h = hex.replace("#", "");
    const n = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }
  function stageLabel(k) { const m = HR.stageMeta(k); return m ? m.label : k; }

  window.Today = { render, _tint: tint };
})();
