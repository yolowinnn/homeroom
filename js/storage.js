/* storage.js — localStorage wrapper + Homeroom domain (progress, streak, XP) */
(function () {
  const NS = "homeroom:";
  const cache = {};

  function get(key, def) {
    if (key in cache) return cache[key];
    try {
      const raw = localStorage.getItem(NS + key);
      const val = raw === null ? def : JSON.parse(raw);
      cache[key] = val;
      return val;
    } catch (e) { return def; }
  }
  function set(key, val) {
    cache[key] = val;
    try { localStorage.setItem(NS + key, JSON.stringify(val)); } catch (e) {}
    return val;
  }
  function update(key, def, fn) {
    const v = get(key, def);
    const nv = fn(v);
    return set(key, nv === undefined ? v : nv);
  }
  function remove(key) { delete cache[key]; try { localStorage.removeItem(NS + key); } catch (e) {} }

  // ---- dates ----
  function todayStr(d) {
    d = d || new Date();
    const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  }
  function addDays(dateStr, n) {
    const d = new Date(dateStr + "T00:00:00"); d.setDate(d.getDate() + n); return todayStr(d);
  }

  function startDate() {
    let s = get("startDate", null);
    if (!s) { s = todayStr(); set("startDate", s); }
    return s;
  }

  // ---- completed lessons ----
  // done: { lessonId: { date, score } }
  function isDone(id) { return !!get("done", {})[id]; }
  function doneMap() { return get("done", {}); }
  function doneCount() { return Object.keys(get("done", {})).length; }
  function lessonScore(id) { const r = get("done", {})[id]; return r ? r.score : null; }

  // activity: { 'YYYY-MM-DD': count }
  function activity() { return get("activity", {}); }

  function markLessonDone(id, score) {
    const date = todayStr();
    let firstTime = false;
    update("done", {}, (m) => {
      if (!m[id]) firstTime = true;
      m[id] = { date: date, score: score == null ? null : score };
      return m;
    });
    if (firstTime) {
      update("activity", {}, (a) => { a[date] = (a[date] || 0) + 1; return a; });
      update("xp", 0, (x) => x + (window.HR_META ? HR_META.xpPerLesson : 20));
      Streak.recompute();
    }
    return firstTime;
  }

  // ---- streak (check-in): a day counts if >=1 lesson finished ----
  const Streak = {
    recompute() {
      const a = get("activity", {});
      const dates = new Set(Object.keys(a).filter(d => a[d] > 0));
      let streak = 0, cur = todayStr();
      if (!dates.has(cur)) cur = addDays(cur, -1); // grace: keep streak alive until end of today
      while (dates.has(cur)) { streak++; cur = addDays(cur, -1); }
      set("streak", streak);
      // best streak
      const best = Math.max(get("bestStreak", 0), streak);
      set("bestStreak", best);
      return streak;
    },
    get() { return get("streak", 0); },
    best() { return get("bestStreak", 0); },
    todayCount() { return (get("activity", {})[todayStr()]) || 0; },
    activeDates() { const a = get("activity", {}); return Object.keys(a).filter(d => a[d] > 0); },
  };

  function xp() { return get("xp", 0); }

  // settings
  function dailyGoal() { return get("dailyGoal", window.HR_META ? HR_META.dailyGoal : 2); }
  function setDailyGoal(n) { set("dailyGoal", Math.max(1, n | 0)); }

  function resetAll() {
    ["done", "activity", "xp", "streak", "bestStreak", "srs", "startDate", "lastSubject"].forEach(remove);
  }

  window.Store = {
    get, set, update, remove,
    todayStr, daysBetween, addDays, startDate,
    isDone, doneMap, doneCount, lessonScore, markLessonDone,
    activity, Streak, xp, dailyGoal, setDailyGoal, resetAll,
  };
})();
