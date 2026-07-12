/* app.js — router, nav stack, global helpers */
(function () {
  const view = document.getElementById("view");
  const tabbar = document.getElementById("tabbar");
  const tbTitle = document.getElementById("tb-title");
  const streakNum = document.getElementById("streak-num");
  const backBtn = document.getElementById("tb-back");

  const TABS = {
    today:   { title: "Homeroom", render: () => Today.render(view) },
    learn:   { title: "Curriculum", render: () => Learn.render(view) },
    review:  { title: "Review", render: () => Review.render(view) },
    me:      { title: "Profile", render: () => Me.render(view) },
  };

  let currentTab = "today";
  let stack = []; // subview stack: {type, arg, title}

  function setActiveTab(tab) {
    [...tabbar.querySelectorAll(".tab")].forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  }
  function paint(html, title) {
    if (title) tbTitle.textContent = title;
    view.scrollTop = 0; window.scrollTo(0, 0);
    view.innerHTML = "";
    if (typeof html === "function") html(); // render fn renders into view
    view.firstElementChild && view.firstElementChild.classList.add("fade-in");
    refreshStreak(); refreshBadges();
  }

  function go(tab) {
    stack = [];
    document.body.classList.remove("subview", "lesson-view");
    currentTab = tab; setActiveTab(tab);
    const t = TABS[tab];
    paint(t.render, t.title);
  }

  function renderSubview() {
    const top = stack[stack.length - 1];
    document.body.classList.toggle("subview", stack.length > 0);
    document.body.classList.toggle("lesson-view", !!top && top.type === "lesson");
    if (!top) return go(currentTab);
    if (top.type === "subject") paint(() => Learn.renderSubject(view, top.arg), top.title);
    else if (top.type === "lesson") paint(() => Lesson.render(view, top.arg), top.title);
  }

  function openSubject(key) {
    const s = HR.subjectByKey(key);
    stack.push({ type: "subject", arg: key, title: s ? s.name : "Subject" });
    renderSubview();
  }
  function openLesson(id) {
    const ctx = HR.ctxById(id);
    stack.push({ type: "lesson", arg: id, title: ctx ? ctx.subject.name : "Lesson" });
    renderSubview();
  }
  function back() {
    stack.pop();
    if (stack.length) renderSubview();
    else { document.body.classList.remove("subview"); go(currentTab); }
  }

  function refreshStreak() { streakNum.textContent = Store.Streak.get(); }
  function refreshBadges() {
    const due = window.SRS ? SRS.dueCount() : 0;
    const badge = tabbar.querySelector('.tab[data-tab="review"] .tab-badge');
    if (badge) { badge.style.display = due > 0 ? "flex" : "none"; badge.textContent = due > 99 ? "99+" : due; }
  }

  tabbar.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab"); if (!btn) return;
    go(btn.dataset.tab);
  });
  backBtn.addEventListener("click", back);

  // ---- global helpers ----
  function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; t.style.transition = "opacity .3s"; }, 1500);
    setTimeout(() => t.remove(), 1850);
  }
  function celebrate() {
    const colors = ["#4f46e5", "#6366f1", "#22d3ee", "#34d399", "#fbbf24", "#fb7185"];
    let box = document.getElementById("confetti");
    if (!box) { box = document.createElement("div"); box.id = "confetti"; document.body.appendChild(box); }
    box.innerHTML = "";
    for (let i = 0; i < 70; i++) {
      const b = document.createElement("div"); b.className = "confetti-bit";
      b.style.left = Math.random() * 100 + "vw";
      b.style.background = colors[i % colors.length];
      b.style.animationDuration = (1.6 + Math.random() * 1.6) + "s";
      b.style.animationDelay = (Math.random() * 0.5) + "s";
      b.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
      box.appendChild(b);
    }
    setTimeout(() => { if (box) box.innerHTML = ""; }, 3600);
  }

  window.App = { go, openSubject, openLesson, back, refreshStreak, refreshBadges, currentTab: () => currentTab };
  window.el = el; window.esc = esc; window.Toast = toast; window.Celebrate = celebrate;

  // ---- boot ----
  Store.startDate();
  Store.Streak.recompute();
  go("today");
})();
