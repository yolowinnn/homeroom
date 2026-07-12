/* review.js — spaced-repetition flashcards for learned key terms */
(function () {
  let queue = [];
  let idx = 0;
  let flipped = false;

  function render(view) {
    queue = SRS.dueCards(40);
    idx = 0; flipped = false;
    const total = SRS.totalCards(), learned = SRS.learnedCount();

    if (!queue.length) {
      let h = '<div class="card"><div class="card-head"><div class="card-title">Spaced repetition</div></div>' +
        '<div class="small faint">Finish lessons to add their key terms here. Cards come back on a schedule so you remember long-term.</div></div>';
      h += '<div class="stat-grid" style="margin-top:6px">' +
        '<div class="stat"><div class="n">' + total + '</div><div class="l">Cards in deck</div></div>' +
        '<div class="stat"><div class="n">' + learned + '</div><div class="l">Well-learned</div></div></div>';
      h += '<div class="empty" style="margin-top:18px"><div class="e-ic">✅</div>' +
        (total ? "All caught up — no cards due right now." : "No cards yet. Go finish a lesson!") + '</div>';
      view.innerHTML = h;
      return;
    }
    paintCard(view);
  }

  function paintCard(view) {
    const c = queue[idx];
    const progress = idx + " / " + queue.length;
    let h = '<div class="card-head" style="margin:0 4px 12px"><div class="pill tint">' + (idx + 1) + ' of ' + queue.length + ' due</div>' +
      '<div class="pill">' + esc(c.subjectName || "") + '</div></div>';
    h += '<div class="flash" id="flash"><div class="flash-inner">' +
      '<div class="flash-face flash-front"><div class="term-word">' + esc(c.term) + '</div><div class="tap-hint">tap to flip</div></div>' +
      '<div class="flash-face flash-back"><div class="def">' + esc(c.def) + '</div><div class="tap-hint">how well did you know it?</div></div>' +
      '</div></div>';
    h += '<div id="grade-row"></div>';
    view.innerHTML = h;

    const flash = document.getElementById("flash");
    flipped = false;
    flash.addEventListener("click", () => { flipped = !flipped; flash.classList.toggle("flipped", flipped); paintGrade(); });
    paintGrade();

    function paintGrade() {
      const row = document.getElementById("grade-row");
      if (!flipped) { row.innerHTML = '<button class="btn soft" id="flip-btn">Show answer</button>'; document.getElementById("flip-btn").addEventListener("click", () => { flipped = true; flash.classList.add("flipped"); paintGrade(); }); return; }
      row.innerHTML = '<div style="display:flex;gap:10px">' +
        '<button class="btn ghost" id="again" style="border-color:#fecaca;color:#dc2626">Again</button>' +
        '<button class="btn" id="good">Got it 👍</button></div>' +
        '<div class="small faint center" style="margin-top:10px">' + (queue.length - idx - 1) + ' card' + (queue.length - idx - 1 === 1 ? "" : "s") + ' left</div>';
      document.getElementById("again").addEventListener("click", () => grade("again"));
      document.getElementById("good").addEventListener("click", () => grade("good"));
    }

    function grade(g) {
      SRS.grade(c._k, g);
      App.refreshBadges();
      idx++;
      if (idx >= queue.length) {
        Celebrate();
        view.innerHTML = '<div class="empty" style="margin-top:40px"><div class="e-ic">🎉</div><div class="card-title">Review done!</div>' +
          '<div class="muted small" style="margin-top:6px">' + queue.length + ' cards reviewed. Come back tomorrow.</div>' +
          '<div class="spacer"></div><button class="btn" id="home-btn" style="max-width:200px;margin:14px auto 0">Back to Today</button></div>';
        document.getElementById("home-btn").addEventListener("click", () => App.go("today"));
        return;
      }
      paintCard(view);
    }
  }

  window.Review = { render };
})();
