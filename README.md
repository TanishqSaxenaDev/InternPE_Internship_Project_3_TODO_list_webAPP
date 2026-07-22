# 📝 Glassmorphic To-Do List

A fully responsive To-Do List web app built with **pure HTML, CSS, and JavaScript** — no frameworks, no libraries. Built as a Week 3 assignment during a Web Development Internship at **InternPE**.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-completed-brightgreen)

## 📌 About the Project

This project goes beyond a basic task manager, focusing equally on **user experience** and **efficient functionality**. It strengthened practical skills in responsive layout design, DOM manipulation, array-based data handling, search algorithms, and writing clean, maintainable JavaScript — all built from scratch without any external UI frameworks.

## ✨ Features

- 🪟 **Modern Glassmorphism UI** — a clean, premium frosted-glass aesthetic using `backdrop-filter`.
- 🔍 **Tinted Glass Effect** — a subtle background tint layered under the glass blur to keep text readable without breaking the visual style.
- 🎨 **Custom WebKit Scrollbar** — a hand-styled scrollbar (`::-webkit-scrollbar`) for a smoother, more polished feel than the browser default.
- 🚫 **Duplicate Task Prevention** — every new task is checked against existing tasks using a **linear search** over the task array before it's added.
- ✅ **Mark as Complete** — click any task to toggle a strikethrough state, marking it done.
- 🗑️ **Delete Tasks** — remove individual tasks without affecting any others.
- 💾 **Persistent Storage** — tasks, their text, and their completed state are saved to `localStorage`, so nothing is lost on refresh or when the browser is closed and reopened.
- 📱 **Fully Responsive Design** — adapts cleanly across desktop, tablet, and mobile screen sizes.

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Flexbox, `backdrop-filter`, custom scrollbar pseudo-elements, media queries for responsiveness
- **Vanilla JavaScript** — DOM manipulation, array methods (`push`, `filter`, `forEach`), `localStorage` API, no external libraries or frameworks

## ⚙️ How It Works

The app is built around a single **source of truth**: an array of task objects, where each task is stored as:

```js
{ id: 3, text: "buy milk", checked: false }
```

- **`id`** — a permanent, unique identifier assigned when the task is created and never reused, so tasks can always be found and removed accurately regardless of their position in the list.
- **`text`** — the task description entered by the user.
- **`checked`** — whether the task has been marked complete.

**Core flow:**

1. **Add a task** → checked for duplicates via linear search → pushed into the array → rendered on screen → saved to `localStorage`.
2. **Complete a task** → toggles a `checked` class for the strikethrough effect → updates the same task's state in the array → saves.
3. **Delete a task** → the exact task is located by its `id` → removed from both the array and the DOM → saves.
4. **Reload the page** → saved data is read back from `localStorage`, parsed, and the entire task list is rebuilt exactly as it was left.

A single shared render function builds the task markup in both the "add" and "load" paths, so the UI is always generated consistently no matter where a task comes from.

## 🚀 Getting Started

No build tools or dependencies required.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. Open `index.html` in your browser.

That's it — the app runs entirely client-side.

## 📂 Project Structure

```
├── index.html      # Markup
├── style.css       # Glassmorphism styling, custom scrollbar, responsive layout
├── script.js        # Task logic, DOM rendering, localStorage persistence
└── README.md
```

## 📚 What I Learned

- Structuring responsive layouts with Flexbox and fluid units (`clamp()`, `dvh`, `dvw`)
- Implementing glassmorphism using `backdrop-filter` while keeping content readable
- Writing custom scrollbar styles with WebKit pseudo-elements
- Preventing duplicate entries using linear search over an array
- Persisting application state across sessions with the `localStorage` API
- Structuring JavaScript around a single source of truth to keep the UI and stored data in sync
- Writing cleaner, more maintainable, DRY JavaScript by avoiding duplicated DOM-building logic

## 🙏 Acknowledgements

A big thank you to **InternPE** for providing practical, real-world assignments that encourage continuous learning and hands-on development throughout this internship.

## 👤 Author

**Tanishq Saxena**
Web Development Intern @ InternPE

---

#InternPE #WebDevelopment #JavaScript #HTML #CSS #ResponsiveDesign #Glassmorphism #FrontendDevelopment #DOMManipulation #Programming #LearningByBuilding #Internship
