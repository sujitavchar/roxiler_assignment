#  Store Rating Platform

A role-based web application that allows users to rate registered stores.  
This project is **backend-focused** and emphasizes authentication, authorization, database design, and clean API development.  
The frontend is intentionally **very minimal**, as the primary focus is backend engineering rather than UI/UX design.

---

##  Tech Stack

### Backend
- Node.js (Express)
- PostgreSQL
- JWT Authentication
- bcrypt (password hashing)
- Raw SQL (No ORM)

### Frontend
- React.js
- Very basic CSS / inline styling

---

##  Project Focus

>  **Note**  
> The backend of this project is **fully working and complete** as per the requirements.  
> The frontend is intentionally kept **simple and functional**, because the author is backend-inclined and a lazy designer 😄.  
> The goal of the frontend is only to demonstrate backend functionality.

---

##  User Roles

1. Administrator
2. Normal User
3. Store Owner

---

##  Authentication & Authorization

- Single login system for all roles
- Stateless JWT-based authentication
- Role-based access control (RBAC)
- Passwords are securely hashed using bcrypt
- Users cannot assign or modify their own roles

---

##  Features

###  Normal User
- Register and log in
- View all registered stores
- Search stores by name and address
- Submit and update ratings (1–5)
- View overall store ratings
- Logout

---

###  System Administrator
- Login with admin privileges
- Dashboard with:
  - Total users
  - Total stores
  - Total ratings
- Create admin users, store owners, and normal users
- Add new stores
- View all users and stores
- Logout

---

###  Store Owner
- Login
- View users who have submitted ratings for their store
- View average store rating
- Logout

---

##  Database Design

- Normalized PostgreSQL schema
- Database-level constraints and validations
- Indexed columns for performance
- Average ratings calculated dynamically (not stored)
- Raw SQL used for full control and transparency

---

##  Backend Highlights

- Clean REST API design
- Secure JWT authentication
- Strict role-based authorization
- No ORM used (intentional design choice)
- Scalable and readable code structure

---

##  Frontend Note

The frontend:
- Is minimal and unstyled
- Exists only to demonstrate backend functionality
- Uses simple role-based conditional rendering
- Handles authentication, API calls, and basic interactions

UI/UX polish was intentionally deprioritized.

---

##  Getting Started

### Backend
```bash
cd backend
npm install
node index.js
