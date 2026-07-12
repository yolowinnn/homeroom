/* manifest.js — app-level metadata: stages, recommended order, learning flow */
window.HR_META = {
  app: {
    name: "Homeroom",
    tagline: "Learn what every American learns, K–12.",
  },
  // The three stages of US K-12 schooling
  stages: [
    { key: "elementary", label: "Elementary School", grades: "K–5",  ages: "Ages 5–11",  icon: "🌱", desc: "The foundations: reading, numbers, and how the world works." },
    { key: "middle",     label: "Middle School",     grades: "6–8",  ages: "Ages 11–14", icon: "🌿", desc: "Structure and skills: grammar, algebra, US history." },
    { key: "high",       label: "High School",       grades: "9–12", ages: "Ages 14–18", icon: "🌳", desc: "Depth and analysis: literature, the sciences, civics." },
  ],
  // Recommended subject order — tuned for an adult immigrating to the US
  // (cultural-fluency subjects first, then the universal academics)
  order: ["social", "ela", "lifeskills", "math", "science", "languages", "cs", "health", "arts"],
  // Default daily goal (lessons per day) for the streak / check-in
  dailyGoal: 2,
  // XP awarded per finished lesson
  xpPerLesson: 20,
};
