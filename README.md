# Project Management Application

A backend API for a project management application built with Node.js and Express. This application provides complete user authentication, project management, and team collaboration features.

## Overview

This is a Udemy course project designed to teach backend API development using Node.js, Express, and MongoDB. It provides a foundation for building scalable project management systems with user authentication, project creation, task management, and team collaboration.

## Features

- **User Authentication**
  - User registration with email verification
  - Login with JWT tokens
  - Password management (change password, forgot password)
  - Refresh token mechanism for persistent sessions
  - Email-based verification system

- **Project Management**
  - Create, read, update, and delete projects
  - Project member management
  - Add/remove members from projects
  - View project details and members

- **Task Management**
  - Create and manage tasks within projects
  - Subtask support for detailed work tracking
  - Note-taking functionality for projects

- **Email Notifications**
  - Email verification for new users
  - Password reset emails
  - Mailgen integration for beautiful email templates

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.3.3)
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Password Security**: bcrypt (v6.0.0)
- **Email**: Nodemailer (v8.0.5) with Mailgen (v2.0.32)
- **Validation**: express-validator (v7.3.2)
- **Development**: Nodemon (v3.1.14)
- **Formatting**: Prettier (3.8.1)
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv (v17.3.1)

## Project Structure

```
Proj-Management/
├── src/
│   ├── app.js                          # Express app configuration
│   ├── index.js                        # Application entry point
│   │
│   ├── controllers/                    # Request handlers
│   │   ├── auth.controllers.js         # Authentication logic
│   │   ├── healthcheck.controllers.js  # Health check endpoint
│   │   └── project.controllers.js      # Project CRUD operations
│   │
│   ├── routes/                         # API route definitions
│   │   ├── auth.routes.js              # Authentication endpoints
│   │   └── healthcheck.routes.js       # Health check routes
│   │
│   ├── models/                         # Database schemas
│   │   ├── user.models.js              # User schema with auth methods
│   │   ├── project.models.js           # Project schema
│   │   ├── projectmember.models.js     # Project member associations
│   │   ├── task.models.js              # Task schema
│   │   ├── subtask.models.js           # Subtask schema
│   │   └── note.models.js              # Note schema
│   │
│   ├── middlewares/                    # Custom Express middlewares
│   │   ├── auth.middleware.js          # JWT verification (verifyJWT)
│   │   └── validator.middleware.js     # Request validation
│   │
│   ├── db/                             # Database configuration
│   │   └── index.js                    # MongoDB connection setup
│   │
│   ├── utils/                          # Utility functions
│   │   ├── async-handler.js            # Error handling wrapper
│   │   ├── api-response.js             # Standardized API responses
│   │   ├── api-error.js                # Standardized error responses
│   │   ├── constants.js                # Application constants
│   │   └── mail.js                     # Email utilities
│   │
│   └── validators/                     # Request validation schemas
│       └── index.js                    # Validation rules
│
├── public/                             # Static files
│   └── images/                         # Image assets
│
├── package.json                        # Project dependencies
└── README.md                           # This file
```

## API Endpoints

### Authentication Routes (`/api/v1/auth`)

**Public Endpoints:**
- `POST /register` - Register a new user
- `POST /login` - User login
- `GET /verify-email/:verificationToken` - Verify email
- `POST /refresh-token/` - Refresh access token
- `POST /forgot-password/` - Request password reset
- `POST /reset-password/:resetToken` - Reset forgotten password

**Protected Endpoints:**
- `POST /logout` - Logout user
- `POST /current-user` - Get current user information
- `POST /change-password` - Change user password
- `POST /resend-email-verification` - Resend verification email

### Health Check Routes (`/api/v1/heathcheck`)
- `GET /` - API health status

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd Proj-Management
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/proj-management
CORS_ORIGIN=http://localhost:5173,http://localhost:3000

# JWT Configuration
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=30d

# Email Configuration
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password

# Other Configuration
FORGOT_PASSWORD_EXPIRY=15
EMAIL_VERIFICATION_EXPIRY=7
```

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the application with Nodemon, which automatically restarts the server when files change.

### Production Mode
```bash
npm start
```
This will run the application directly with Node.js.

## Key Models

### User Schema
- `avatar` - User profile picture (URL and local path)
- `username` - Unique username (indexed for faster searches)
- `email` - Unique email address
- `fullName` - User's full name
- `password` - Encrypted password
- `isEmailVerified` - Email verification status
- `refreshToken` - Token for session refresh
- `forgotPasswordToken` - Token for password reset
- `forgotPasswordExpiry` - Expiry time for password reset
- `emailVerificationToken` - Email verification token
- `emailVerificationExpiry` - Expiry time for email verification

### Project Schema
- `name` - Project name (unique)
- `description` - Project description
- `createdBy` - Reference to User who created the project
- `timestamps` - Automatic creation and update timestamps

### ProjectMember Schema
- Links users to projects with member roles

### Task & Subtask Schemas
- Hierarchical task structure within projects

### Note Schema
- Notes associated with projects

## Middleware & Utilities

### Middlewares
- **verifyJWT** - Validates JWT tokens for protected routes
- **validate** - Validates request data using express-validator

### Utilities
- **asyncHandler** - Wraps async route handlers to catch errors
- **ApiResponse** - Standardized response format
- **ApiError** - Standardized error format
- **mail** - Email handling with Mailgen templates

## Security Features

- **Password Hashing** - bcrypt for secure password storage
- **JWT Authentication** - Secure token-based authentication
- **Email Verification** - Email confirmation for new accounts
- **Password Reset** - Secure password recovery mechanism
- **CORS Protection** - Cross-origin request filtering
- **Input Validation** - express-validator for request validation
- **Secure Cookies** - HttpOnly cookie support

## Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.3.3 | MongoDB ODM |
| jsonwebtoken | ^9.0.3 | JWT authentication |
| bcrypt | ^6.0.0 | Password hashing |
| nodemailer | ^8.0.5 | Email sending |
| mailgen | ^2.0.32 | Email templates |
| express-validator | ^7.3.2 | Input validation |
| cors | ^2.8.6 | CORS middleware |
| cookie-parser | ^1.4.7 | Cookie parsing |
| dotenv | ^17.3.1 | Environment variables |

## Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.1.14 | Auto-restart on file changes |
| prettier | 3.8.1 | Code formatting |

## Learning Purpose

This project is designed as an educational resource for learning backend API development with Node.js, Express, and MongoDB. It covers essential concepts including:

- RESTful API design
- Authentication and authorization
- Database modeling with Mongoose
- Error handling and middleware
- Email integration
- Input validation
- CORS configuration
- JWT token management

## Notes

- The application uses ES6 modules (`import`/`export` syntax)
- Database timestamps are automatically managed by Mongoose
- Email verification and password reset tokens have configurable expiry times
- The API supports cookie-based and header-based authentication

## Author

**Rajdeep Chowdhury**
