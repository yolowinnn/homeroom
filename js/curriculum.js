/* curriculum.js — index & traverse HR_DATA; progress math; recommended next */
(function () {
  const DATA = window.HR_DATA || { subjects: [] };
  const META = window.HR_META;

  function subjects() {
    const order = META.order;
    return DATA.subjects.slice().sort((a, b) => {
      const ia = order.indexOf(a.key), ib = order.indexOf(b.key);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
  }
  function subjectByKey(k) { return DATA.subjects.find(s => s.key === k); }
  function stageMeta(k) { return META.stages.find(s => s.key === k); }

  // Flat, globally-ordered lesson list with context.
  // Order: subject (by recommended order) -> stage (el, ms, hs) -> unit -> lesson.
  const STAGE_ORDER = { elementary: 0, middle: 1, high: 2 };
  let _flat = null;
  function allLessons() {
    if (_flat) return _flat;
    const out = [];
    subjects().forEach(sub => {
      sub.stages.slice().sort((a, b) => STAGE_ORDER[a.stage] - STAGE_ORDER[b.stage]).forEach(st => {
        st.units.forEach((u, ui) => {
          u.lessons.forEach((les, li) => {
            out.push({
              lesson: les,
              subject: sub,
              stage: st,
              unit: u,
              unitIndex: ui,
              lessonIndex: li,
            });
          });
        });
      });
    });
    _flat = out;
    return out;
  }
  function ctxById(id) { return allLessons().find(c => c.lesson.id === id) || null; }

  // lessons for a subject, optionally a stage
  function lessonsOf(subKey, stageKey) {
    return allLessons().filter(c => c.subject.key === subKey && (!stageKey || c.stage.stage === stageKey));
  }

  // ---- progress ----
  function pct(list) {
    if (!list.length) return 0;
    const done = list.filter(c => Store.isDone(c.lesson.id)).length;
    return Math.round((done / list.length) * 100);
  }
  function subjectProgress(subKey) {
    const list = lessonsOf(subKey);
    const done = list.filter(c => Store.isDone(c.lesson.id)).length;
    return { done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
  }
  function stageProgress(stageKey) {
    const list = allLessons().filter(c => c.stage.stage === stageKey);
    const done = list.filter(c => Store.isDone(c.lesson.id)).length;
    return { done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
  }
  function overall() {
    const list = allLessons();
    const done = list.filter(c => Store.isDone(c.lesson.id)).length;
    return { done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
  }

  // recommended next lesson (first not-done in global order)
  function nextLesson() {
    const all = allLessons();
    return all.find(c => !Store.isDone(c.lesson.id)) || null;
  }
  // next lesson within a subject
  function nextInSubject(subKey) {
    return lessonsOf(subKey).find(c => !Store.isDone(c.lesson.id)) || null;
  }
  // the lesson right after a given id (for "Next" button), same global order
  function lessonAfter(id) {
    const all = allLessons();
    const i = all.findIndex(c => c.lesson.id === id);
    return i >= 0 && i + 1 < all.length ? all[i + 1] : null;
  }

  // pull a few "due" review terms count helper lives in srs.js
  window.HR = {
    subjects, subjectByKey, stageMeta, stages: () => META.stages,
    allLessons, ctxById, lessonsOf,
    subjectProgress, stageProgress, overall, pct,
    nextLesson, nextInSubject, lessonAfter,
    totalLessons: () => allLessons().length,
  };
})();
