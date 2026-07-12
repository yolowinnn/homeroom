/* srs.js — lightweight spaced repetition for key terms (Leitner-style) */
(function () {
  // Card store: srs = { cardKey: { term, def, lessonId, subject, due, ivl, reps, lapses } }
  // cardKey = lessonId + "::" + term
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 60]; // days, by box level (reps)

  function store() { return Store.get("srs", {}); }
  function key(lessonId, term) { return lessonId + "::" + term; }

  // Seed all terms of a lesson into the SRS deck when the lesson is finished.
  function seedLesson(ctx) {
    const lid = ctx.lesson.id;
    Store.update("srs", {}, (m) => {
      (ctx.lesson.terms || []).forEach(t => {
        const k = key(lid, t.term);
        if (!m[k]) {
          m[k] = {
            term: t.term, def: t.def, lessonId: lid,
            subject: ctx.subject.key, subjectName: ctx.subject.name,
            due: Store.todayStr(), ivl: 0, reps: 0, lapses: 0,
          };
        }
      });
      return m;
    });
  }

  function dueCards(limit) {
    const m = store();
    const today = Store.todayStr();
    const arr = Object.keys(m).map(k => Object.assign({ _k: k }, m[k]))
      .filter(c => c.due <= today)
      .sort((a, b) => (a.due < b.due ? -1 : 1));
    return limit ? arr.slice(0, limit) : arr;
  }
  function dueCount() { return dueCards().length; }
  function totalCards() { return Object.keys(store()).length; }
  function learnedCount() {
    const m = store();
    return Object.keys(m).filter(k => m[k].reps >= 3).length;
  }

  // grade: "again" | "good"
  function grade(cardKey, g) {
    Store.update("srs", {}, (m) => {
      const c = m[cardKey];
      if (!c) return m;
      if (g === "again") {
        c.reps = Math.max(0, c.reps - 1);
        c.lapses = (c.lapses || 0) + 1;
        c.ivl = 1;
        c.due = Store.addDays(Store.todayStr(), 1);
      } else {
        c.reps = (c.reps || 0) + 1;
        const ivl = INTERVALS[Math.min(c.reps, INTERVALS.length - 1)];
        c.ivl = ivl;
        c.due = Store.addDays(Store.todayStr(), Math.max(1, ivl));
      }
      return m;
    });
  }

  window.SRS = { seedLesson, dueCards, dueCount, totalCards, learnedCount, grade };
})();
