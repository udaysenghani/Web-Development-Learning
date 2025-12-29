# NoteAPI ✅

A simple Express + MongoDB REST API for creating, reading, updating, and deleting personal notes. Includes user authentication (signup/signin) using JSON Web Tokens (JWT).

---

## 🚀 Features

- User signup and signin with hashed passwords (bcrypt)
- JWT-based authentication middleware to protect note endpoints
- CRUD operations for notes (each note belongs to a user)
- Built with Express, Mongoose, and MongoDB

---

## 🔧 Requirements

- Node.js (v16+ recommended)
- MongoDB (local or MongoDB Atlas)
- npm (or yarn)

---

## ⬇️ Installation

1. Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd NoteAPI
npm install
```

2. Create a `.env` in project root (see sample below).

3. Start the app:

```bash
npm run start
# (this uses nodemon to run src/index.js)
```

The server listens on port `3000` by default.

---

## ⚙️ Configuration (`.env`)

The project currently has a placeholder for MongoDB connection and a hard-coded JWT secret. Create a `.env` file and update the code to use these values (recommended):

Example `.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
SECRET_KEY=your_long_random_secret
```
---

## 📦 API Endpoints

Base URL: `http://localhost:3000`

### Users
- `POST /user/signup`
  - Body: `{ "username": "...", "email": "...", "password": "..." }`
  - Success: returns created `user` and `token`

- `POST /user/signin`
  - Body: `{ "email": "...", "password": "..." }`
  - Success: returns `user` and `token`

### Notes (All protected — require Authorization header)
- `GET /note` — Returns all notes for the authenticated user
- `POST /note` — Body: `{ "title": "...", "description": "..." }` — Creates a note
- `PUT /note/:id` — Body: `{ "title": "...", "description": "..." }` — Updates the note
- `DELETE /note/:id` — Deletes the note

Auth header format:
```
Authorization: Bearer <token>
```

---

## 📌 Example Requests

1) Signup (curl)

```bash
curl -X POST http://localhost:3000/user/signup \
 -H "Content-Type: application/json" \
 -d '{"username":"alice","email":"alice@example.com","password":"secret"}'
```

2) Signin (curl)

```bash
curl -X POST http://localhost:3000/user/signin \
 -H "Content-Type: application/json" \
 -d '{"email":"alice@example.com","password":"secret"}'
```

3) Create note (curl)

```bash
curl -X POST http://localhost:3000/note \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer <TOKEN>" \
 -d '{"title":"Todo","description":"Buy milk"}'
```

---

## Models

**User**:
- `username`: String, required
- `email`: String, required
- `password`: String, required (stored hashed)

**Note**:
- `title`: String, required
- `description`: String, required
- `userId`: ObjectId (ref user), required
- timestamps enabled

---

## 💡 Tips & TODOs

- Replace hard-coded `SECRET_KEY` with `process.env.SECRET_KEY` and add `dotenv` usage.
- Set `MONGO_URI` in `.env` and update `mongoose.connect(process.env.MONGO_URI)`.
- Consider adding validation, rate-limiting, and improved error handling.
- Add tests and a Postman collection for easier testing.

---
