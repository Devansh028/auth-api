# 🚀 Advanced Node.js Backend — Auth, Users, Admin, Uploads, Search, Pagination, Referral System

A fully featured **production-grade backend** built with **Node.js, Express, MongoDB**, including:

- 🔐 JWT Authentication (Access + Refresh Tokens)
- 👤 User Management (CRUD)
- 🛡 Role-Based Access (Admin System)
- 🖼 File Uploads (Profile, Posts, Any File)
- 🔍 Search + Filter APIs
- 📄 Pagination API
- 🎁 Referral & Credit System
- 📊 Admin Dashboard Stats
- 📚 API Documentation with Swagger UI

This backend is designed with **real-world system design**, **clean architecture**, and **enterprise-level patterns**.

---

# 📦 **Tech Stack**

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Bcrypt Password Hashing**
- **Multer File Uploads**
- **Swagger UI Documentation**
- **Role-Based Authorization**
- **Search / Filter / Pagination**
- **Referral Logic + Credits**

---

# 📁 **Folder Structure**

auth-api/
├── controllers/
│ ├── authController.js
│ ├── userController.js
│ ├── adminController.js
│ ├── uploadController.js
│ └── referralController.js
│
├── middleware/
│ ├── authMiddleware.js
│ ├── adminMiddleware.js
│ └── uploadMiddleware.js
│
├── routes/
│ ├── authRoutes.js
│ ├── userRoutes.js
│ ├── adminRoutes.js
│ ├── uploadRoutes.js
│ └── referralRoutes.js
│
├── models/
│ ├── User.js
│ └── Post.js
│
├── uploads/
│ ├── profile/
│ ├── posts/
│ └── files/
│
├── config/
│ ├── db.js
│ └── swagger.js
│
├── server.js
├── .env
├── package.json
└── README.md

---

# 🔐 **Authentication**

### ✔ Register

### ✔ Login

### ✔ Refresh Token

### ✔ Logout

### ✔ Protected Routes

### ✔ Profile API

### ✔ Referral Registration

---

# 👤 **User APIs**

| Method | Endpoint                    | Description                |
| ------ | --------------------------- | -------------------------- |
| GET    | `/api/users`                | Get all users (Admin only) |
| GET    | `/api/users/:id`            | Get single user            |
| PUT    | `/api/users/:id`            | Update user                |
| DELETE | `/api/users/:id`            | Delete user (Admin only)   |
| GET    | `/api/users/search/query`   | Search users               |
| GET    | `/api/users/paginate/users` | Pagination                 |

---

# 🛡️ **Admin APIs**

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| PUT    | `/api/admin/make-admin/:id`   | Promote user to admin      |
| PUT    | `/api/admin/block-user/:id`   | Block a user               |
| PUT    | `/api/admin/unblock-user/:id` | Unblock user               |
| GET    | `/api/admin/stats`            | Admin dashboard statistics |

---

# 🖼 **File Upload APIs**

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/api/upload/profile` | Upload profile picture |
| POST   | `/api/upload/post`    | Upload post images     |
| POST   | `/api/upload/file`    | Upload any file        |

---

# 🎁 **Referral APIs**

| Method | Endpoint                  | Description        |
| ------ | ------------------------- | ------------------ |
| GET    | `/api/referral/dashboard` | Referral dashboard |
| GET    | `/api/referral/history`   | Referral history   |

Referral System Includes:

- Auto referral code generation
- Signup with referral
- Credits for referrer + new user
- Referral tracking
- Dashboard + history

---

# 📄 **Pagination API**

Example:

GET /api/users/paginate/users?page=2&limit=5

---

# 🔍 **Search API**

Example:

GET /api/users/search/query?search=dev&role=user&page=1

---

# 📚 **API Documentation (Swagger)**

After starting the server:

📌 **Swagger UI:**  
http://localhost:5000/api-docs

---

# ⚙️ **Environment Variables (.env)**

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

---

# ▶️ **Running the Project**

### Install dependencies:

npm install

### Start development server:

npm run dev

### Start production server:

npm start

# ⭐ **Author**

**Devansh Kumar**  
Full-Stack Developer (Node.js + React + Spring Boot)

---

# 🎉 **Project Completed — Ready for GitHub**
