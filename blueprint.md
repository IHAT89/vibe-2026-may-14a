# Blueprint

## Overview

A simple, modern web application that generates a random number. It features a theme switcher for day and night modes, with a clean and mobile-responsive design.

## Project Structure

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling.
- `main.js`: The JavaScript file for application logic.
- `blueprint.md`: This file.

## Style, Design, and Features

### Version 1.0

- **Random Number Generator:**
  - A button to generate a random number between 0 and 100.
  - The generated number is displayed in a circular container.
- **Theme Switcher:**
  - A toggle switch to change between day (light) and night (dark) modes.
  - The user's theme preference is saved in `localStorage`.
  - The application also respects the user's `prefers-color-scheme` media query.
- **Design:**
  - **Layout:** A centered, single-column layout that is mobile-responsive.
  - **Typography:** Uses the system's default UI font for a native feel.
  - **Color:**
    - **Day Mode:** Light background with dark text.
    - **Night Mode:** Dark background with light text.
    - Uses `oklch` for modern, vibrant colors.
  - **Effects:**
    - Subtle background texture.
    - The random number container has a multi-layered drop shadow.
    - The "Generate Number" button has a glow effect that intensifies on hover.

## Current Plan

- **Task:** Implement two UI versions, one for day and one for night.
- **Steps:**
  1. **HTML:** Add a theme switcher to `index.html`.
  2. **CSS:** Update `style.css` with styles for both light and dark themes using CSS variables.
  3. **JavaScript:** Implement the theme switching logic in `main.js` and persist the user's preference using `localStorage`.
  4. **Blueprint:** Update `blueprint.md` to document the new theme switcher feature.