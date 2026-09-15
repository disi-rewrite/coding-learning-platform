# Coding Learning Platform

## Overview
This project is a full-stack coding learning platform that allows users to explore various coding languages, take quizzes, and manage their accounts with user authentication. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Project Structure
```
coding-learning-platform
├── backend
│   ├── server.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── auth.js
│   ├── middleware
│   │   └── auth.js
│   ├── package.json
│   └── .env.example
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── pages
│   │   │   ├── Courses.js
│   │   │   ├── Quiz.js
│   │   │   ├── Login.js
│   │   │   └── Signup.js
│   │   └── components
│   │       ├── Navbar.js
│   │       └── ProtectedRoute.js
│   ├── package.json
│   └── public
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm (Node Package Manager)

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the backend dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and configure your environment variables, including your MongoDB connection string and JWT secret.

4. Start the backend server:
   ```
   node server.js
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the frontend dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

### Usage
- Visit `http://localhost:3000` to access the application.
- Users can sign up, log in, and explore courses for various coding languages.
- After completing a course section, users can take a quiz to test their knowledge.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by various online coding platforms.
- Thanks to the open-source community for the tools and libraries used in this project.