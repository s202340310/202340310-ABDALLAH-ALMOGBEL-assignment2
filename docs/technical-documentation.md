# Technical Documentation — Assignment 2

## 1. Layout Approach (from Assignment 1)

On small screens everything is stacked in one column. At 1024px and wider the page
becomes a two-part layout with Flexbox: a sticky `.intro` sidebar (35%) and the
scrolling `main` content (65%). The Projects section uses CSS Grid (2 columns from
768px up) and the contact form uses Flexbox in a column.

Colors are CSS variables on `:root` (`--bg-color`, `--text-color`, `--accent-color`,
`--font-main`); the light theme overrides them via `body[data-theme="light"]`.

## 2. Assignment 2 Features

> TODO: fill in one subsection per feature as you build it. For each: what it does,
> which functions/elements are involved, and a short snippet.

### 2.1 Theme saved with localStorage
- **What it does:**
- **Key used:**
- **How it works:**

### 2.2 Project filter + live search
- **What it does:**
- **How it works:**
- **Empty state:**

### 2.3 Contact form validation
- **Rules checked:**
- **Messages shown:**

### 2.4 Animations and transitions
- **Where used:**
- **How:**

## 3. Error Handling and User Feedback

> TODO: list every message the user can see and when (invalid input, empty search
> result, success message, ...).

## 4. Testing

> TODO: browsers/devices you tested (e.g., Chrome, Firefox, phone width) and what you checked.

## 5. Known Limitations

- The contact form has no backend, so it only validates and shows a confirmation; it does not send email.
- TODO: add anything else you notice.
