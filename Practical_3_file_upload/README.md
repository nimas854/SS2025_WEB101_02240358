# Practical 3: File Upload in Next.js

This project demonstrates how to implement secure file upload functionality in a Next.js application using formidable, react-hook-form, and react-dropzone.

## Instructions

### 1. Prerequisites

- Node.js and npm installed.

### 2. Setup

1. Clone or download this repository.
2. Open a terminal in the `Practical_3_file_upload` folder.

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the file upload feature.

---

## Solution Overview

- Uses formidable for parsing multipart/form-data on the backend.
- Uses react-hook-form and react-dropzone for form state and drag-and-drop file selection on the frontend.
- Validates file type and size on both frontend and backend.
- Uploaded files are saved to a specific directory on the server.
- Shows upload progress using Axios.

---

## Example Solution Screenshot

<!-- Add your screenshot here if required, e.g.:
![File Upload Screenshot](./screenshot-upload.png)
-->

---

## Troubleshooting

- If file upload fails, check the server logs for errors.
- Make sure the upload directory exists and has write permissions.
- For any issues, refresh the page or restart the dev server.

---

### File Upload Implementation

## Instructions

# Objective

Create a React application with a file upload form that includes:
● Multipart form data handling
● File type and size validation
● Upload progress tracking
● Drag and drop interface

# Part 1: Setup Project

1. Create a new Next.js project:
   npx create-next-app file-upload
   cd file-upload

2. Install required dependencies:  
   npm install react-hook-form formidable axios react-dropzone

# Part 2: Create Basic File Upload Form and API Route for File Upload

1. Create a new file in pages/index.js and implement a basic form with React Hook
   Form. - Implement File Validation

2. Create a new file in pages/api/upload.js. -
   Implement Progress Tracking -
   Implement Drag and Drop Interface
