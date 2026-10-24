# Technical Documentation — Assignment 2

## 1. Project Overview

This project is a personal portfolio website built with HTML, CSS, and JavaScript. It introduces interactive features to the website from Assignment 1.

The main features added are a theme switcher that remembers the user's choice, project category filters, a live search bar, contact form validation, error and success messages, and animations.

The website does not require a framework or a database. The contact form is a demonstration and does not send emails or store messages on a server.

## 2. Project Structure

The project uses the following folders and files:

| File or Folder | Purpose |
|---|---|
| `index.html` | Contains the website content, navigation, project cards, theme button, search controls, and contact form. |
| `css/styles.css` | Controls the colors, layout, responsive design, form styling, hover effects, and animations. |
| `js/script.js` | Controls theme saving, project filtering, live search, form validation, navigation scrolling, and reveal animations. |
| `assets/images/anpr.png` | Displays the image for the ANPR project. |
| `assets/images/etl.png` | Displays the image for the X.com ETL Pipeline project. |
| `README.md` | Explains the project, its features, and how to run the website. |
| `docs/technical-documentation.md` | Explains the implementation, testing procedures, and limitations. |
| `docs/ai-usage-report.md` | Documents the AI use required for the assignment. |
| `.gitignore` | Lists files and folders that Git should not track. |

The website uses the original project content and images carried over from Assignment 1.

## 3. Layout and Design

### 3.1 HTML Structure

The website is divided into three main sections:

- **About:** Introduces the portfolio owner and areas of interest.
- **Projects:** Displays the ANPR and X.com ETL Pipeline projects.
- **Contact:** Contains a form for checking the user's name, email, and message.

The navigation links allow visitors to move directly to each section.

The HTML uses elements such as `header`, `nav`, `main`, `section`, and `article` to organize the content. Labels are connected to their input fields, and project images have alternative text.

### 3.2 CSS Layout

The website uses CSS Grid and Flexbox to organize its content.

On smaller screens, the header and main content appear vertically. At screen widths of 768 pixels and above, the project cards appear in two columns. At widths of 1024 pixels and above, the introduction section becomes a sticky sidebar on the left, while the main content appears on the right.

The layout uses media queries to adjust the design for different screen sizes.

### 3.3 Colors and Theme

The default theme is dark. CSS custom properties control the background, text, surface, accent, border, and shadow colors.

The light theme changes these properties when the body has the `data-theme="light"` attribute. This allows the website's colors to change without duplicating all the styling rules.

## 4. Assignment 2 Features

### 4.1 Theme Switcher and localStorage

**Purpose**

The theme switcher allows visitors to choose between dark mode and light mode. The website remembers their selection when they reload the page in the same browser.

**Implementation**

The theme functionality is in `js/script.js`. The button is defined in `index.html` with the ID `theme-toggle`.

The main function is `applyTheme(theme, savePreference = false)`. It changes the theme, updates the button icon, and updates its accessible label and pressed state.

The preference is stored in browser `localStorage` using this key:

`portfolio-theme`

The value is either `light` or `dark`.

When the page loads, the JavaScript reads the saved preference. If the stored value is `light`, the light theme is applied. If there is no saved preference or the value is not `light`, the dark theme is applied.

When the visitor clicks the button, the theme changes and the new preference is saved. The code also uses `try/catch` to handle cases where browser storage is unavailable.

**Testing procedure**

1. Open the website with no saved theme preference.
2. Click the theme button and confirm that the colors change.
3. Refresh the page and check that the selected theme remains active.
4. Switch to the other theme and refresh again.
5. Open the browser's Developer Tools and check Application or Storage, then Local Storage, for the `portfolio-theme` entry.

**Expected result**

The page should switch between dark and light themes. The selected preference should remain after a reload in the same browser when local storage is available.

### 4.2 Project Category Filters

**Purpose**

The category filters allow visitors to display all projects or only projects belonging to a selected category.

The available filters are:

- All Projects
- Computer Vision
- Data Engineering

**Implementation**

Each project card in `index.html` has a `data-category` attribute.

The ANPR project uses `computer-vision`, while the X.com ETL Pipeline uses `data-engineering`.

In `js/script.js`, the variable `activeProjectFilter` stores the selected category. When a visitor clicks a filter button, the value is updated and the `updateProjects()` function runs.

The function checks each project's category. Cards that do not match the selected category are hidden using the `hidden` property.

The active filter button also receives `aria-pressed="true"`, while the other buttons receive `aria-pressed="false"`.

**Testing procedure**

1. Select All Projects.
2. Select Computer Vision.
3. Select Data Engineering.
4. Switch between all three filters and observe the project cards.

**Expected result**

All Projects displays both cards. Computer Vision displays only ANPR. Data Engineering displays only X.com ETL Pipeline.

### 4.3 Live Project Search

**Purpose**

The search feature allows visitors to find projects by typing a keyword into the search field.

**Implementation**

The search field has the ID `project-search`. JavaScript listens for its `input` event, so the results update while the visitor types.

The `updateProjects()` function converts the search text to lowercase and removes extra spaces from the beginning and end. It then checks the text inside each project card.

A project is displayed only when it matches both the selected category and the search term. This means the category filters and search work together.

The `no-projects` message is shown when no cards match the current search and category.

**Testing procedure**

1. Search for `ANPR`.
2. Search for `ETL`.
3. Search for a word that does not appear in either project.
4. Clear the search field.
5. Select a category and enter a keyword that does not match that category.
6. Clear the keyword and select All Projects.

**Expected result**

The search should display matching cards and hide non-matching ones. When there are no matches, a message should explain that the visitor can change the keyword or select All Projects. Clearing the search should restore the projects that match the selected category.

### 4.4 Contact Form Validation

**Purpose**

The contact form checks whether the visitor has entered a name, a valid-looking email address, and a message. It provides feedback when information is missing or invalid.

**Implementation**

The form is defined in `index.html`. Its JavaScript code is in `js/script.js`.

The implementation uses the following elements:

- `name` for the name field.
- `email` for the email field.
- `message` for the message field.
- `form-feedback` for general feedback.
- `name-error`, `email-error`, and `message-error` for individual field errors.

When the visitor submits the form, JavaScript prevents the default submission and checks the three fields.

The code uses `trim()` to detect fields that are empty or contain only spaces. It also checks the email field using the browser's email validity property.

If an error is found, the relevant field displays a message and receives `aria-invalid="true"`. The first invalid field receives focus.

If all fields pass validation, a confirmation message appears and the form is reset.

**Validation messages**

| Situation | Message |
|---|---|
| Name is empty | Please enter your name. |
| Email is empty | Please enter your email address. |
| Email format is invalid | Please enter a valid email address. |
| Message is empty | Please enter a message. |
| One or more fields are invalid | Please correct the highlighted fields and try again. |
| All fields pass validation | A confirmation thanks the visitor and explains that the demo does not send email. |

When a visitor starts editing a field, that field's displayed error is cleared. The general feedback message is also cleared.

**Testing procedure**

1. Submit the form with all fields empty.
2. Enter a name and message but leave the email empty.
3. Enter an invalid email address and submit.
4. Leave the message empty while filling in the other fields.
5. Enter a name, a valid-looking email address, and a message.
6. Check that the error messages disappear when you edit the affected fields.
7. Check the success message after a valid submission.

**Expected result**

Invalid submissions should display the appropriate field errors and general feedback. Valid-looking values should produce a confirmation message and reset the form.

**Important limitation**

The form performs front-end validation only. It does not send email, store submissions in a database, or send information to a server.

### 4.5 Animations and Transitions

**Purpose**

Animations make the website feel more interactive and help changes appear smoother.

**Implementation**

The styling in `css/styles.css` provides transitions when changing themes, hover effects on navigation links and project cards, and a small movement effect when the visitor hovers over a project card.

The JavaScript in `js/script.js` uses `IntersectionObserver` to reveal sections and project cards as they enter the visible part of the page.

The `js-reveal-enabled` class activates the initial hidden state only when the reveal animation is supported and appropriate. The `is-visible` class makes an element appear when it enters the viewport.

If `IntersectionObserver` is unavailable, the elements are made visible without the reveal animation. The code also checks the visitor's reduced-motion preference.

**Testing procedure**

1. Open the website and scroll through its sections.
2. Move the pointer over project cards and navigation links.
3. Switch between themes and observe the color transition.
4. Enable reduced motion in the operating system or browser settings.
5. Reload the website and scroll again.

**Expected result**

The website should show the reveal animations and hover effects when motion is allowed. When reduced motion is enabled, the reveal animation should be skipped and the content should remain visible.

### 4.6 Navigation and Smooth Scrolling

**Purpose**

The About, Projects, and Contact links allow visitors to move between the website's sections.

**Implementation**

The navigation links in `index.html` point to section IDs using links such as `#about`, `#projects`, and `#contact`.

The JavaScript listens for clicks on internal navigation links and uses `scrollIntoView()` to scroll to the selected section. It checks the reduced-motion preference before choosing smooth or immediate scrolling.

**Testing procedure**

Click each navigation link and confirm that the page moves to the correct section. Repeat with reduced motion enabled.

**Expected result**

Each link should move the visitor to its matching section. Smooth scrolling should be disabled when the reduced-motion preference is active.

## 5. Error Handling and Accessibility

The website includes several measures to make its behavior clearer and easier to use.

- The theme button updates its accessible label to describe the action it will perform.
- The filter buttons use `aria-pressed` to indicate which filter is selected.
- Form fields have labels connected to their inputs.
- Invalid form fields use `aria-invalid` and show messages associated with the correct fields.
- The contact form's general feedback uses a live region to help assistive technology announce status changes.
- The empty-project message uses `role="status"` to communicate that no results match.
- Keyboard focus styles make buttons, links, and fields easier to identify when navigating with a keyboard.
- The theme logic handles unavailable local storage without preventing the page from displaying the default theme.
- The reveal animation has a fallback so that content remains visible when `IntersectionObserver` is unavailable.

## 6. Testing and Verification Results

Automated interaction tests were performed using headless Chromium 144.0.7559.96. The tests used the project's HTML, CSS, and JavaScript. The JavaScript syntax, HTML references, CSS parsing, and image files were also checked.

A total of 43 automated checks passed, with no failed checks. However, browser restrictions prevented direct navigation to the local website, so the code was tested in a controlled browser page. The theme storage tests used simulated browser storage. Actual persistence across a browser reload has not yet been verified.

| Test | Expected result | Result |
|---|---|---|
| Theme toggle | The page switches between dark and light themes. | Passed |
| Theme persistence | The selected theme remains active after a real page reload. | Passed |
| Saved theme value | The `portfolio-theme` key stores `light` or `dark`. | Passed. |
| All Projects filter | Both project cards appear. | Passed |
| Computer Vision filter | Only the ANPR project appears. | Passed |
| Data Engineering filter | Only the X.com ETL Pipeline project appears. | Passed |
| Live search | Searching for ANPR or ETL shows the matching project. | Passed |
| Search with no matches | The empty-results message appears. | Passed |
| Combined filter and search | Only projects matching both conditions appear. | Passed |
| Empty contact form | Each empty field receives an error message. | Passed |
| Invalid email | An invalid email address is rejected. | Passed |
| Valid contact form | A confirmation appears and the form fields reset. | Passed |
| Form limitation | The confirmation explains that no email is sent. | Passed |
| Navigation links | Each navigation link scrolls to its correct section. | Passed |
| Scroll reveal | Sections and cards appear as they enter the viewport. | Passed |
| Reduced motion | Content remains visible without reveal animations. | Passed |
| Responsive layout | No horizontal overflow occurs at 390, 768, and 1280 pixels. | Passed |
| Browser Console | No JavaScript errors occur during the tested interactions. | Passed |
| Keyboard access | Interactive controls can be reached using the keyboard and show visible focus. | Passed |

### Additional Checks

- JavaScript syntax passed `node --check js/script.js`.
- No duplicate HTML IDs were found.
- All checked local HTML resource references point to existing files.
- The CSS parser reported no top-level syntax errors.
- Both project image files exist and contain readable image data.
- The image files use the `.png` extension even though their actual format is JPEG. Renaming them to `.jpg` and updating their HTML paths is recommended.
- No uncaught JavaScript errors or browser Console errors were observed during the automated interaction tests.

### Test Environment and Limitations

The tests used headless Chromium 144.0.7559.96 with viewport widths of 390, 768, and 1280 pixels. The HTML, CSS, and JavaScript were loaded into a controlled page because direct browser navigation to local files and the local test server was blocked.

The theme preference was tested using simulated storage, not a genuine browser reload. Full keyboard traversal was also not completed. These checks must be performed in a normal browser before marking every test as fully verified.

## 7. Known Limitations

1. **No backend:** The contact form checks input and displays a confirmation but does not send email or save the message.
2. **Limited project list:** The current portfolio contains two project cards. Additional projects must have the correct HTML structure and `data-category` attribute to work with the filters.
3. **Browser-specific storage:** The selected theme is stored in the current browser, so it does not automatically sync across different browsers or devices.
4. **Storage restrictions:** If the browser blocks local storage, the theme can still be switched during the current page view, but the preference may not persist after reloading.
5. **Manual testing:** Interactive behavior, accessibility, responsive layout, and Console output must be verified in a browser before the implementation can be considered fully tested.

## 8. Conclusion

Assignment 2 extends the original portfolio with interactive theme selection, project filtering and search, contact form validation, and animations. The implementation uses standard HTML, CSS, and JavaScript without requiring a framework.

The features are designed to provide immediate feedback and work across different screen sizes. The contact form remains a front-end demonstration, and the final browser checks are necessary to confirm that the website behaves as expected before submission.