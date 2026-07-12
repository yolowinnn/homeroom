# 🏫 Homeroom — Learn American K–12

> *Learn what every American learns, from kindergarten to 12th grade.*

A personal, English-only study app that teaches the **full US K-12 curriculum** — the academic and cultural knowledge American students pick up across Elementary, Middle, and High School. Built for an adult who wants systematic common ground with Americans (great prep for immigration / naturalization).

## What's inside

- **9 subjects** spanning all three school stages (Elementary K–5, Middle 6–8, High 9–12):
  - 🏛️ Social Studies — US history, civics, the Constitution, geography, economics
  - 📖 English Language Arts — reading, grammar, the American literary canon
  - 🧭 Life Skills & Civic Readiness — money, taxes, US systems, daily etiquette
  - 🔢 Mathematics — counting through calculus (the real US course sequence)
  - 🔬 Science — life / earth / physical → Biology, Chemistry, Physics (NGSS)
  - 🗣️ World Languages — beginner Spanish (the language US students study most)
  - 💻 Computer Science — digital literacy, safety, intro coding
  - 💪 Health & PE — nutrition, body, mental health, US sports culture
  - 🎨 The Arts — visual art, music theory, American genres (jazz, Broadway)
- **169 lessons**, each with a learning goal, a short readable lesson, key terms, and a 4-question quiz.
- **676 quiz questions** and **898 key terms**.

## How the learning flow is designed

The flow is built on four evidence-based habits:

1. **Bite-sized lessons (~8 min)** — low friction, easy to start daily.
2. **Active recall** — every lesson ends with a quiz instead of passive reading.
3. **Spaced repetition** — finished lessons feed their key terms into a Leitner-style review deck that resurfaces cards right before you'd forget them.
4. **Daily check-in + streak** — one finished lesson keeps your streak alive; the Today tab always points to your next recommended lesson so you never have to decide what to do.

Subjects are ordered for an immigrating adult: **Social Studies, ELA, and Life Skills first** (fastest cultural fluency), then the universal academics.

## Tech

Zero-build static site — plain HTML/CSS/JS. Progress is stored in `localStorage` on the device. No backend, no account needed.

```
index.html
css/style.css
data/manifest.js, data/subject_*.js   # the curriculum
js/storage.js, curriculum.js, srs.js   # engine
js/modules/*.js                        # Today / Learn / Lesson / Review / Profile
js/app.js                              # router
```

## Run locally

```bash
npx serve .        # or: python3 -m http.server 8080
```

## Deploy (Vercel)

```bash
vercel --prod
```

It's a static site, so no framework settings are needed.
