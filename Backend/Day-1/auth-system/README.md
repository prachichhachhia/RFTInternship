# 🔐 Full Authentication System

> **GOW AI Academy — Backend Internship | Day 1**

A secure REST API with JWT-based authentication, password hashing, protected routes, and proper error handling.

---

## 🚀 Features

- **POST /api/register** — Register a new user
- **POST /api/login** — Login and receive a JWT token
- **GET /api/profile** — Protected route (requires valid token)
- ✅ Password hashing with `bcryptjs`
- ✅ JWT token with expiry (`jsonwebtoken`)
- ✅ Middleware-based route protection
- ✅ Handles invalid credentials & unauthorized access

---

## 🛠️ Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env   # then edit JWT_SECRET

# Run in development
npm run dev

# Run in production
npm start
```

---

## 📡 API Reference

### Register
```
POST /api/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "secret123"
}
```

### Login
```
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secret123"
}
```
Returns: `{ token: "eyJ..." }`

### Profile (Protected)
```
GET /api/profile
Authorization: Bearer <your_token>
```

---

## 🧱 Tech Stack

- Node.js + Express
- bcryptjs (password hashing)
- jsonwebtoken (JWT)
- dotenv

---

*Built for #gowaiacademy #rftinternship*