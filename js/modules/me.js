/* me.js — profile: stats, streak calendar, per-subject progress, settings */
(function () {
  function render(view) {
    const ov = HR.overall();
    const xp = Store.xp();
    const streak = Store.Streak.get();
    const best = Store.Streak.best();
    const due = SRS.dueCount(), learned = SRS.learnedCount();

    let html = "";
    html += '<div class="hero"><h1>Your progress</h1><p>' + esc(HR_META.app.tagline) + '</p>' +
      '<div class="hero-stats">' +
      '<div class="hstat"><div class="n">🔥 ' + streak + '</div><div class="l">Streak</div></div>' +
      '<div class="hstat"><div class="n">' + xp + '</div><div class="l">XP</div></div>' +
      '<div class="hstat"><div class="n">' + ov.pct + '%</div><div class="l">Curriculum</div></div></div></div>';

    html += '<div class="stat-grid">' +
      '<div class="stat"><div class="n">' + ov.done + '</div><div class="l">Lessons done</div></div>' +
      '<div class="stat"><div class="n">' + ov.total + '</div><div class="l">Total lessons</div></div>' +
      '<div class="stat"><div class="n">' + learned + '</div><div class="l">Terms mastered</div></div>' +
      '<div class="stat"><div class="n">' + best + '</div><div class="l">Best streak</div></div>' +
    '</div>';

    // last-30-day check-in calendar
    html += '<div class="sec-h"><h2>Check-in calendar</h2></div>';
    html += '<div class="card"><div class="cal">' + calendar(30) + '</div>' +
      '<div class="small faint" style="margin-top:10px">Last 30 days. Filled = you studied that day.</div></div>';

    // per-subject
    html += '<div class="sec-h"><h2>Subjects</h2></div>';
    html += '<div class="card" style="padding:6px 16px">';
    HR.subjects().forEach(s => {
      const p = HR.subjectProgress(s.key);
      html += '<div class="row" data-subj="' + s.key + '">' +
        '<div class="r-ic" style="background:' + Today._tint(s.color) + '">' + s.icon + '</div>' +
        '<div class="r-main"><div class="r-title">' + esc(s.name) + '</div>' +
        '<div class="bar thin" style="margin-top:6px"><i style="width:' + p.pct + '%;background:' + s.color + '"></i></div></div>' +
        '<div class="r-right">' + p.done + '/' + p.total + '</div></div>';
    });
    html += '</div>';

    // per-stage
    html += '<div class="sec-h"><h2>By school stage</h2></div>';
    html += '<div class="card" style="padding:6px 16px">';
    HR.stages().forEach(st => {
      const p = HR.stageProgress(st.key);
      html += '<div class="row" style="cursor:default"><div class="r-ic">' + st.icon + '</div>' +
        '<div class="r-main"><div class="r-title">' + st.label + ' <span class="muted small">' + st.grades + '</span></div>' +
        '<div class="bar thin" style="margin-top:6px"><i style="width:' + p.pct + '%"></i></div></div>' +
        '<div class="r-right">' + p.pct + '%</div></div>';
    });
    html += '</div>';

    // settings
    html += '<div class="sec-h"><h2>Settings</h2></div>';
    html += '<div class="card"><div class="card-head"><div class="card-title" style="font-size:15px">Daily goal</div>' +
      '<span class="pill tint" id="goal-val">' + Store.dailyGoal() + ' / day</span></div>' +
      '<div style="display:flex;gap:8px">' +
      [1, 2, 3, 5].map(n => '<button class="btn ghost sm goal-opt" data-n="' + n + '" style="flex:1' + (Store.dailyGoal() === n ? ';background:var(--tint);border-color:var(--brand)' : '') + '">' + n + '</button>').join("") +
      '</div></div>';

    html += '<div class="card"><button class="btn ghost" id="reset-btn" style="color:var(--bad);border-color:#fecaca">Reset all progress</button></div>';

    html += '<div class="center faint small" style="margin:18px 0 4px">Homeroom · your American K–12 education<br>Progress is saved on this device.</div>';

    view.innerHTML = html;

    view.querySelectorAll("[data-subj]").forEach(n => n.addEventListener("click", () => App.openSubject(n.dataset.subj)));
    view.querySelectorAll(".goal-opt").forEach(n => n.addEventListener("click", () => {
      Store.setDailyGoal(+n.dataset.n); Toast("Daily goal set to " + n.dataset.n); render(view);
    }));
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (confirm("Reset ALL progress, streaks, and review cards? This cannot be undone.")) {
        Store.resetAll(); Toast("Progress reset"); App.go("today");
      }
    });
  }

  function calendar(days) {
    const act = Store.activity();
    let out = "";
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const key = Store.todayStr(d);
      const on = act[key] > 0;
      out += '<div class="d' + (on ? " on" : "") + '" title="' + key + (on ? (" · " + act[key] + " lessons") : "") + '"></div>';
    }
    return out;
  }

  window.Me = { render };
})();
