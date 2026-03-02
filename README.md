# Kodflix Frontend

Netflix-style authentication UI built with React (Vite), react-router-dom, and a dark theme.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Backend API

The app expects a backend at **http://localhost:3000** with:

- **POST** `/api/auth/signup` — body: `{ name, email, password }`
- **POST** `/api/auth/signin` — body: `{ email, password }`, response must include a JWT (e.g. `token`, `accessToken`, or `access_token`)

Update `src/services/api.js` if your base URL or paths differ.

## Routes

| Path        | Page      | Access   |
|------------|-----------|----------|
| `/`        | Sign In   | Public   |
| `/signup`  | Sign Up   | Public   |
| `/dashboard` | Dashboard | Protected (requires token) |

Token is stored in `localStorage` under the key `kodflix_token`. Logout clears it and redirects to `/`.
