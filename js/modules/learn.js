/* learn.js — curriculum browser: subjects -> stages/units/lessons */
(function () {
  function tint(hex) { return Today._tint(hex); }

  function render(view) {
    const ov = HR.overall();
    let html = "";
    html += '<div class="card"><div class="card-head"><div class="card-title">The K–12 curriculum</div>' +
      '<span class="pill tint">' + ov.done + ' / ' + ov.total + '</span></div>' +
      '<div class="bar"><i style="width:' + ov.pct + '%"></i></div>' +
      '<div class="small faint" style="margin-top:8px">' + HR.subjects().length + ' subjects · 3 stages · everything an American student studies from kindergarten to senior year.</div></div>';

    // stage overview
    html += '<div class="sec-h"><h2>By stage</h2></div>';
    HR.stages().forEach(st => {
      const p = HR.stageProgress(st.key);
      html += '<div class="card" style="margin-bottom:10px"><div class="row" style="border:none;padding:0">' +
        '<div class="r-ic" style="font-size:20px">' + st.icon + '</div>' +
        '<div class="r-main"><div class="r-title">' + st.label + ' <span class="muted small">· ' + st.grades + '</span></div>' +
        '<div class="r-sub">' + st.ages + ' — ' + esc(st.desc) + '</div>' +
        '<div class="bar thin" style="margin-top:8px"><i style="width:' + p.pct + '%"></i></div></div>' +
        '<div class="r-right">' + p.pct + '%</div></div></div>';
    });

    // subjects
    html += '<div class="sec-h"><h2>By subject</h2></div>';
    html += '<div class="subj-grid">';
    HR.subjects().forEach(s => {
      const p = HR.subjectProgress(s.key);
      html += '<div class="subj-tile" data-subj="' + s.key + '">' +
        '<div class="st-ic" style="background:' + tint(s.color) + '">' + s.icon + '</div>' +
        '<div class="st-name">' + esc(s.name) + '</div>' +
        '<div class="st-meta">' + p.done + ' / ' + p.total + ' · ' + p.pct + '%</div>' +
        '<div class="bar thin"><i style="width:' + p.pct + '%;background:' + s.color + '"></i></div>' +
      '</div>';
    });
    html += '</div>';

    view.innerHTML = html;
    view.querySelectorAll("[data-subj]").forEach(n => n.addEventListener("click", () => App.openSubject(n.dataset.subj)));
  }

  function renderSubject(view, key) {
    const s = HR.subjectByKey(key);
    if (!s) { view.innerHTML = '<div class="empty">Not found.</div>'; return; }
    const p = HR.subjectProgress(key);
    const next = HR.nextInSubject(key);

    let html = "";
    html += '<div class="hero" style="background:linear-gradient(135deg,' + shade(s.color, -18) + ',' + s.color + ')">' +
      '<div style="font-size:34px">' + s.icon + '</div>' +
      '<h1 style="margin-top:6px">' + esc(s.name) + '</h1>' +
      '<p>' + esc(s.blurb) + '</p>' +
      '<div class="hero-stats"><div class="hstat"><div class="n">' + p.done + '/' + p.total + '</div><div class="l">Lessons</div></div>' +
      '<div class="hstat"><div class="n">' + p.pct + '%</div><div class="l">Complete</div></div></div>' +
    '</div>';

    if (s.why) {
      html += '<div class="card" style="background:var(--tint);border-color:var(--tint-line)"><div class="small"><b>Why this matters:</b> ' + esc(s.why) + '</div></div>';
    }
    if (next) {
      html += '<button class="btn" id="subj-continue" style="margin-bottom:6px">▶ ' + (p.done ? "Continue" : "Start") + ': ' + esc(next.lesson.title) + '</button>';
    }

    // stages -> units -> lessons
    const stageOrder = ["elementary", "middle", "high"];
    s.stages.slice().sort((a, b) => stageOrder.indexOf(a.stage) - stageOrder.indexOf(b.stage)).forEach(st => {
      const sm = HR.stageMeta(st.stage);
      html += '<div class="sec-h"><h2>' + (sm ? sm.icon + " " + sm.label : st.stage) + ' · ' + st.grades + '</h2></div>';
      st.units.forEach(u => {
        html += '<div class="unit-h">' + esc(u.title) + '</div>';
        html += '<div class="card" style="padding:6px 16px">';
        u.lessons.forEach(les => {
          const done = Store.isDone(les.id);
          html += '<div class="row' + (done ? " done" : "") + '" data-lesson="' + les.id + '">' +
            '<div class="check">' + (done ? "✓" : "") + '</div>' +
            '<div class="r-main"><div class="r-title">' + esc(les.title) + '</div>' +
            '<div class="r-sub">' + (les.minutes || 8) + ' min · ' + (les.quiz ? les.quiz.length : 0) + ' questions</div></div>' +
            '<div class="r-right">→</div></div>';
        });
        html += '</div>';
      });
    });

    view.innerHTML = html;
    const cb = document.getElementById("subj-continue");
    cb && next && cb.addEventListener("click", () => App.openLesson(next.lesson.id));
    view.querySelectorAll("[data-lesson]").forEach(n => n.addEventListener("click", () => App.openLesson(n.dataset.lesson)));
  }

  function shade(hex, pct) {
    const h = hex.replace("#", "");
    const n = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    let r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
    const f = (x) => Math.max(0, Math.min(255, Math.round(x + (x * pct / 100))));
    const t = (x) => x.toString(16).padStart(2, "0");
    return "#" + t(f(r)) + t(f(g)) + t(f(b));
  }

  window.Learn = { render, renderSubject };
})();
