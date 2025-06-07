# File Upload Implementation

## 1. Documentation

### Main Concepts Applied

- Disabled Next.js's default body parser to allow formidable to handle file uploads.
- Used formidable to parse multipart/form-data and save uploaded files on the server.
- Used react-hook-form for form state and validation.
- Integrated react-dropzone for drag-and-drop file selection.
- Validated file type and size on both frontend and backend for security.
- Provided upload progress feedback using Axios.

## 2. Reflection

### What I Learned

- Learned how to handle file uploads in Next.js using formidable.
- Understood the importance of disabling the default body parser for file uploads.
- Practiced integrating react-hook-form and react-dropzone for a better user experience.
- Realized the importance of validating files on both frontend and backend for security.

### Challenges Faced

- Faced issues with integrating drag-and-drop (react-dropzone) with react-hook-form.
- Sometimes file uploads failed due to incorrect form parsing or missing directory.
- Had to debug validation logic for file type and size.

### How I Overcame Challenges

- Read documentation for formidable, react-hook-form, and react-dropzone.
- Used console logs and error messages to troubleshoot problems.
- Created a custom component to connect react-dropzone with react-hook-form.
- Ensured the upload directory existed and had correct permissions.
