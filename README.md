📚 Book Shelf — Full-Stack Digital Library

A full-stack web application to explore, add, update, and delete books.

🚀 Project Overview

Book Shelf is a single-page full-stack web app that allows authenticated users to manage their personal book collection.
Users can add, edit, and delete books with full CRUD functionality.
The project integrates:

React frontend

Node.js + Express backend

MongoDB Atlas database

Firebase Authentication for secure user access

✨ Features

🔐 Authentication: Firebase Email/Password & Google Login

📘 CRUD Operations: Create, Read, Update, Delete books

🧭 Private & Public Routes: Managed via React Router

🖼️ Image Uploads: Handled via imgbb API

🔔 Toast Notifications: Success & error feedback

🔽 Sorting by Rating: Using MongoDB’s .sort() operation

🌗 Theme Toggle: Dark/Light mode via DaisyUI

💬 Comments Feature: Real-time updates for user interactions

📱 Responsive Design: Built with TailwindCSS and DaisyUI

🧩 Tech Stack
Frontend:

React

React Router

TailwindCSS

DaisyUI

Axios

React Hot Toast

React Tooltip


Backend:

Node.js

Express.js

MongoDB Atlas

CORS

Authentication:

Firebase Authentication

Hosting:

Client: Netlify

Server: Vercel

📄 Main Requirements

Includes Navbar, Footer, and dynamic main content.

Navbar links: Home | All Books | Add Book | My Books | Login/Register.

Authenticated users see their profile photo and logout option.

Smooth routing — no page reload errors.

🏠 Home Page

Eye-catching banner with animated buttons.

Displays Top 6 books from MongoDB dynamically.

Two static sections:

Top Genres

About Book Shelf

🔐 Authentication

Users can register or log in using Email/Password or Google.

Password validation includes:

One uppercase

One lowercase

Minimum length requirement

On success, users are redirected to their desired route or homepage.

🛠️ CRUD Operations

Add books with:

title, author, genre, rating, summary, coverImage, userEmail, userName

Data stored securely in MongoDB.

Users can view, update, and delete only their own books.

📚 All Books Page

Displays all books from the database.

Each book shows:

Title | Author | Genre | Rating

Includes a “View Details” button linking to the book’s detail page.

🔍 Book Details Page

Displays full information:

Cover Image | Summary | Rating

Authenticated users can comment on books.

Comments stored in MongoDB with live updates.

➕ Add Book Page

Form to add new books with all required fields.

Shows toast notifications instead of browser alerts.

Clean UI with DaisyUI form components.

📖 My Books Page

Displays only the books added by the logged-in user.

Allows update and delete operations.

Confirmation message shown after actions.

🔽 Sorting & Filtering

Sort books ascending or descending by rating.

Controlled through a DaisyUI dropdown.

Uses MongoDB’s .sort() operation on the backend.