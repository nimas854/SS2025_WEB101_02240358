# Data Visualisation Dashboard

This project is a Sales Analytics Dashboard built with React. It visualizes sales, customer, and visitor data using different types of charts.

## Features

- **Monthly Sales Performance:** Line chart showing sales, profit, and target.
- **Product Category Distribution:** Pie chart showing sales by product category.
- **Customer Acquisition:** Stacked bar chart for new and returning customers.
- **Weekly Visitors:** Line chart for weekly website visitors.

## Instructions

### 1. Prerequisites

- Node.js and npm installed.

### 2. Setup

1. Clone or download this repository.
2. Open a terminal in the project folder.

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```



### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## Solution Overview

- All charts are interactive and responsive.
- Data is loaded from local files in `src/data/salesData.js`.
- Example screenshot:



---

## Troubleshooting

- If charts do not load, ensure all dependencies are installed.
- For any issues, refresh the page or restart the dev server.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
