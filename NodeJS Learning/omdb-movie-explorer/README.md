# Movie Explorer (OMDb Movie Explorer)

A lightweight movie search and watchlist app built with a plain JavaScript frontend and a Node.js/Express backend. Search movies using the OMDb API, register/login, and save movies to a personal watchlist stored in MySQL.

---

## 🔧 Tech stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Node.js, Express
- **Auth & Sessions:** express-session, cookie-based session storage
- **Database:** MySQL (via mysql2)
- **Other:** bcryptjs for password hashing, cors, dotenv

---

## ✅ Features

- Search movies via the OMDb API
- Register / Login (session-based auth)
- Add movies to your watchlist
- View, toggle status (pending ↔ watched), and remove movies from watchlist
- Simple static frontend served by Express

---

## 🚀 Quick start

### Prerequisites

- Node.js (v16+ recommended)
- MySQL server
- OMDb API key (get a free key at https://www.omdbapi.com/apikey.aspx)

### Backend

1. Open a terminal and go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure database and session secret. Copy or edit `.env` in `backend/`:

```dotenv
DB_HOST=localhost
DB_USER=root
DB_PASS=your_db_password
DB_NAME=omdb_movie_explorer
SESSION_SECRET=supersecret
```

4. Start the server:

```bash
npm start
```

Server will run on http://localhost:3000 and also serves the frontend from the `frontend/` directory.

### Database schema

Create the database and tables used by the app. Example SQL:

```sql
CREATE DATABASE IF NOT EXISTS omdb_movie_explorer;
USE omdb_movie_explorer;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  omdb_id VARCHAR(50) UNIQUE,
  title VARCHAR(255),
  poster_url TEXT,
  year VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE watchlist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  movie_id INT NOT NULL,
  status ENUM('pending','watched') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);
```

Run these in your MySQL client (or via GUI) to prepare the schema.

---

## 🔐 Frontend configuration

Open `frontend/index.html` and replace the OMDb API placeholder with your key. Example:

```js
// replace the placeholder value with your own API key
const OMDB_API_KEY = "http://www.omdbapi.com/?apikey=YOUR_KEY";
```

NOTE: The repository currently uses a simple constant in `index.html`. For production, consider moving the API key to a more secure place or proxying requests through the backend.

---

## 📡 API Endpoints

All endpoints are available under `http://localhost:3000/api` and expect/return JSON. Session cookie is used to authenticate requests (the frontend sends `credentials: 'include'`).

- POST `/api/auth/register` — Register a new user
  - Body: `{ username, email, password }`
- POST `/api/auth/login` — Login
  - Body: `{ email, password }`
  - Sets session on success
- POST `/api/auth/logout` — Logout (destroys session)

- POST `/api/movies/add` — Add a movie to the logged-in user's watchlist (creates movie record if needed)
  - Auth required (session)
  - Body: `{ omdb_id, title, poster_url, year }`

- GET `/api/watchlist` — Get current user's watchlist
  - Auth required
- POST `/api/watchlist/toggle` — Toggle watchlist item status
  - Auth required
  - Body: `{ watchlist_id, current_status }`
- POST `/api/watchlist/delete` — Remove a watchlist item
  - Auth required
  - Body: `{ watchlist_id }`

---

## ✅ Usage flow

1. Start backend (`npm start`) and ensure MySQL is running with the schema created.
2. Open http://localhost:3000 in the browser.
3. Register and login.
4. Search for movies, then add them to your watchlist.
5. Manage your watchlist on `watchlist.html`.

---

## 💡 Notes & tips

- Sessions are stored server-side and tied to a cookie — make sure the frontend and backend origin match and use `credentials: 'include'` when calling protected endpoints.
- For production, set secure cookie flags, move sensitive keys out of client-side code, and enable HTTPS.

---

## 🛠️ Contributing

Contributions are welcome. Open an issue or submit a PR with improvements.

---

## 📄 License

MIT

---

If you'd like, I can also add a `.env.example` template, a database seed script, or improved environment-based configuration for the front-end OMDb key.