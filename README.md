# 🛒 MERN E-Commerce Platform

A *full-stack E-Commerce web application* built with the *MERN stack (MongoDB, Express, React, Node.js)*.  
This project provides a complete shopping experience with authentication, cart, payments, and an admin dashboard for managing products and orders.

---

## ✨ Features

### 👤 User
- Register / Login / Logout (JWT Authentication)
- Browse, search, and filter products
- Add/remove items from cart
- Place orders with secure payments
- Order history & tracking

### 🛠 Admin
- Add, update, delete products
- Manage categories
- View and manage customer orders
- Role-based authentication

### 💡 Extras
- Responsive design for all devices
- RESTful APIs
- Optimized performance
- Cloud deployment ready (Heroku / Vercel / AWS)

---

## 🛠 Tech Stack

*Frontend*
- React.js  
- Redux Toolkit (state management)  
- Tailwind CSS (UI)  

*Backend*
- Node.js  
- Express.js  

*Database*
- MongoDB (Mongoose ODM)  

*Other Tools*
- JWT (Authentication & Authorization)  
- Stripe / Razorpay (Payments)  
- Cloudinary (Image upload)  
- Git & GitHub for version control  

---

## 📂 Project Structure

```bash
ecommerce-project/
│── client/           # React frontend
│   ├── public/       # Static assets
│   └── src/          # React components, pages, redux, hooks
│
│── server/           # Backend (Node + Express)
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   ├── controllers/  # Business logic
│   ├── middleware/   # Auth middleware
│   └── config/       # DB and server config
│
│── .gitignore
│── README.md
│── package.json