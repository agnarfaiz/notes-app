# Notes App Setup Plan

This document outlines the high-level steps to set up the foundation for a Notes App using Laravel, React, TailwindCSS, and MariaDB. We will be using Bun as our package manager and JavaScript runtime. This plan focuses solely on environment configuration and project scaffolding, excluding feature implementation.

## 1. Environment & Database Setup
- Configure the `.env` file to use MariaDB as the database connection (set `DB_CONNECTION=mariadb` or `mysql` with the appropriate MariaDB port and credentials).
- Create a new database in MariaDB for the notes application.
- Run the default Laravel migrations to ensure database connectivity is working properly.

## 2. Frontend Tooling & Dependencies (Bun, React, TailwindCSS)
- **Package Manager:**
  - Ensure the project is initialized and ready to use Bun for package management.
- **Dependencies:**
  - Install React and its DOM package using Bun (`bun add react react-dom`). Add types if needed.
  - Install TailwindCSS, PostCSS, and Autoprefixer (`bun add -D tailwindcss postcss autoprefixer`).
  - Install the Vite React plugin (`bun add -D @vitejs/plugin-react`).

## 3. Configuration (Tailwind, Vite, & React)
- **TailwindCSS:**
  - Initialize the Tailwind configuration (`bunx tailwindcss init -p`).
  - Configure `tailwind.config.js` to scan Laravel view files (e.g., `resources/views/**/*.blade.php`) and React components (`resources/js/**/*.{js,jsx,ts,tsx}`) for Tailwind utility classes.
- **Vite:**
  - Update `vite.config.js` to include the React plugin and set up your entry points (e.g., `resources/css/app.css` and `resources/js/app.jsx` or `app.tsx`).
  - Add the standard Tailwind directives to your main CSS file (`resources/css/app.css`).
- **Laravel View Integration:**
  - Create or update the main Laravel blade view (e.g., `resources/views/app.blade.php`).
  - Include a root `div` (e.g., `<div id="app"></div>`) where React will be mounted.
  - Use the `@vite` directive in the blade template to load your main CSS and JS entry points.

## 4. Basic Wiring & Verification
- **Entry Point:**
  - Create a basic React entry point (`resources/js/app.jsx` or similar) that uses `ReactDOM.createRoot` to render a simple placeholder component (e.g., "Hello World") into the root div to verify everything is connected.
- **Run & Test Setup:**
  - Start the backend server (`php artisan serve`) and the Vite development server (`bun run dev`).
  - Verify that the Laravel app correctly serves the React frontend and that TailwindCSS styles are applied.
