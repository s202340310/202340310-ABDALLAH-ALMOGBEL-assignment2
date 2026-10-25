# Portfolio Website — Assignment 2 (Interactive Features)

## Project Description

This is my personal portfolio website, built with plain HTML, CSS, and JavaScript. It builds on [Assignment 1](https://github.com/s202340310/202340310-ABDALLAH_ALMOGBEL-assignment1) and makes the site more interactive.

The website has three sections: **About**, **Projects**, and **Contact**. In Assignment 2, I added a saved theme, project filters, live search, form validation with clear messages, and small animations.

## Features Added in Assignment 2

| Requirement | Feature | Status |
|---|---|---|
| Dynamic content | Project filter buttons (All Projects, Computer Vision, Data Engineering) and live search | ✅ Done |
| Data handling | Dark/light theme saved with `localStorage` | ✅ Done |
| Data handling | Contact form that checks the input and shows a confirmation message | ✅ Done |
| Animation / transitions | Smooth theme change, hover effects, fade-in when scrolling | ✅ Done |
| Error handling / user feedback | Error message under each form field, success message, and a "no projects found" message | ✅ Done |
| AI enhancement | See [`docs/ai-usage-report.md`](docs/ai-usage-report.md) | ✅ Done |

## How to Use the Features

- **Theme:** click the 🌙 / ☀️ button at the top. The website remembers your choice the next time you visit in the same browser.
- **Filter projects:** click **All Projects**, **Computer Vision**, or **Data Engineering** to show only those projects.
- **Search projects:** type a word in the search box. The projects update while you type. Filters and search work together. If nothing matches, a message tells you to change the word or select All Projects.
- **Contact form:** fill in your name, email, and message, then click **Check and Submit**. If something is missing or wrong, a message under the field explains how to fix it. If everything is correct, a confirmation appears. This is a demo form, so no email is sent.
- **Navigation:** the About, Projects, and Contact links scroll smoothly to each section.

## Setup Instructions (Run Locally)

No installation or build tools are needed.

1. Clone the repository:
   ```
   git clone https://github.com/s202340310/202340310-ABDALLAH-ALMOGBEL-assignment2.git
   ```
2. Open the project folder:
   ```
   cd 202340310-ABDALLAH-ALMOGBEL-assignment2
   ```
3. Open `index.html` in your browser. You can also use the **Live Server** extension in VS Code (right-click `index.html` → **Open with Live Server**).

The website works best in a current version of Chrome, Edge, Firefox, or Safari.

## Project Structure

```
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Technical Summary

- **HTML:** page content, navigation, project cards (each with a `data-category`), search box, and contact form.
- **CSS:** layout with Grid and Flexbox, a dark and a light theme using CSS variables, and the animations.
- **JavaScript:** theme saving, project filtering and search, form validation, smooth scrolling, and the scroll fade-in effect.

More details, test steps, and known limitations are in [`docs/technical-documentation.md`](docs/technical-documentation.md).

## Known Limitations

- The contact form has no backend, so it does not send or save any message.
- The email check is the browser's built-in check, so an address like `name@site` (no dot) is accepted.
- The theme is saved only in the browser and device you use.

## AI Use Summary

I used Claude (Sonnet 5.5) to plan the assignment, create the starting repository, explain `localStorage` and form validation, understand a JavaScript error, review my finished project, and draft documentation. I did not paste Claude's example code into my project. My feature code comes from zyBooks, web references, and my own writing. I applied two CSS fixes from the review as provided.

The full usage log, sources, and declaration are in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).