# AI Usage Report — Assignment 2

## Tools Used

- **Claude (Sonnet 5.5)**

I used Claude to:

- Plan the assignment step by step.
- Create the starting repository from my Assignment 1 code.
- Understand how to save the theme using `localStorage`.
- Learn how to validate the contact form and display error and success messages.
- Understand the error `Cannot read properties of null (reading 'addEventListener')`.
- Review my finished project against the assignment requirements and suggest fixes.
- Draft the README, technical documentation, and this report.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What I changed and how I checked it |
|---|---|---|---|---|---|
| C01 | Claude (Sonnet 5.5) | 2026-10-19 to 2026-10-24 | Plan the assignment, create the starting repository, explain the features and errors, and review my finished project against the requirements | Whole project | I followed the step-by-step plan and asked for a repo shell, explanations of `localStorage` and form validation, help with the error `Cannot read properties of null (reading 'addEventListener')`, and a review of my finished project. I collected code for the features (see A02 and A03) and applied the fixes from the review (see A06). I checked the finished site in Live Server: theme saved after a reload, filters and search, the empty-state message, form errors and success message, and the navigation links. |
| A01 | Claude (Sonnet 5.5) | 2026-10-19 | Generate the starting repository from Assignment 1 | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `.gitignore`, `docs/` | I used the generated shell as my starting point. I checked the HTML structure and went over my Assignment 1 work again. |
| A02 | Claude (Sonnet 5.5) | 2026-10-24 | Provide an example of saving the theme with `localStorage` | `js/script.js`, `css/styles.css` | I collected and wrote my own version. I use one `applyTheme(theme, savePreference)` function instead of separate apply, load and save functions. It also updates the button's `aria-label` and `aria-pressed`. Any saved value other than `light` falls back to dark, and all storage access is in `try/catch`, so the theme still works if storage is blocked. I tested it by switching the theme, refreshing the page, and checking the saved value in DevTools → Application → Local Storage. |
| A03 | Claude (Sonnet 5.5) | 2026-10-24 | Provide an example of contact form validation | `index.html`, `css/styles.css`, `js/script.js` | I collected my own version. My error messages are `<p>` elements shown and hidden with the `hidden` attribute. I use the browser's built-in email check (`validity.valid`) instead of my own pattern, and I only check that fields are not empty (no minimum lengths). Invalid fields are marked with `aria-invalid`, and the form message uses `is-error` and `is-success` classes and is cleared when the user types. I tested empty, invalid (`abc`), spaces-only and valid input, checked that the cursor moves to the first wrong field, and checked that the form clears after success. |
| A04 | Claude (Sonnet 5.5) | 2026-10-24 | Draft the README and technical documentation | `README.md` | I used the draft's structure for the README (description, feature table, setup, project structure, AI summary) and rewrote the description and feature table to match my site. I compared the README with the running website in Live Server. |
| A05 | Claude (Sonnet 5.5) | 2026-10-24 | Draft the AI usage report and later rewrite its log rows and final version | `docs/ai-usage-report.md` | I reviewed each draft and updated it to describe my actual use of AI and the work I completed. I checked every statement in the log against my project and my own testing. |
| A06 | Claude (Sonnet 5.5) | 2026-10-24 | Provide CSS fixes for the light-theme button contrast and the project card hover transition | `css/styles.css` | I added a `--on-accent-color` variable (dark text in the dark theme, white in the light theme) and used it for the active filter button and the submit button. I changed the scroll-reveal animation to use `translate` instead of `transform` so it no longer blocks the card hover effect, and I added the card transitions back to the reveal rule. I tested it in Live Server by switching to the light theme and checking both buttons, then hovering over a project card and switching themes. |

## Benefits and Challenges

**Benefits:**

- Claude helped me break the assignment into smaller steps.
- The explanations helped me understand how the features work.
- The examples gave me ideas for implementing the features in my own code.
- The review of my finished project found a contrast problem and a hover problem that I had not noticed.

**Challenges:**

- Some examples needed to be adjusted to match the names and structure of my files.
- I needed to understand how the HTML, CSS, and JavaScript work together.
- The error message helped me understand why JavaScript sometimes cannot find an HTML element.

## What I Learned

- `localStorage` can save a user's theme preference so it stays the same after refreshing the page.
- JavaScript can respond to button clicks and changes in form fields.
- Form validation checks whether the required information has been entered correctly.
- The browser Console helps me find and understand JavaScript errors.
- Testing different inputs helps me find problems that I might not notice by reading the code alone.
- A more specific CSS rule can override another rule's `transition` or `transform`, so effects can silently stop working.
- Text needs enough contrast against its background in both themes.

## Responsible Use and What I Changed

I used Claude to understand the assignment, review ideas, get examples of how the features could work, and review my finished project.

I used the examples as a guide and changed them to fit my features. I changed the examples to match my file structure and requirements.

I reviewed the README and technical documentation to make sure they matched my implementation. I also checked the features with a checklist in Live Server.

I am responsible for checking my code and understanding how it works. The tests in this report are tests that I ran myself.

## Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

- **Name:** Abdallah Almogbel
- **ID:** 202340310
- **Date:** 2026-10-25