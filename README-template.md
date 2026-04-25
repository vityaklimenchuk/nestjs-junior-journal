# Project Name

> One-line description of what this project does.

[![Node](https://img.shields.io/badge/node-20.x-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey)]()

## ✨ Features

- Feature 1 (e.g., User registration & JWT login)
- Feature 2 (e.g., CRUD for tasks)
- Feature 3 (e.g., Role-based access control)

## 🛠 Tech Stack

- **Runtime:** Node.js 20
- **Language:** TypeScript
- **Framework:** Nest.js
- **Database:** PostgreSQL + TypeORM
- **Auth:** JWT (Passport.js)
- **Validation:** class-validator
- **Docs:** Swagger / OpenAPI
- **Testing:** Jest + Supertest
- **Container:** Docker + docker-compose

## 🚀 Quick start

```bash
# 1. Clone
git clone git@github.com:vityaklimenchuk/PROJECT-NAME.git
cd nestjs-junior-journal

# 2. Install
npm install

# 3. Configure env
cp .env.example .env
# edit .env with your DB credentials

# 4. Start DB (Docker)
docker-compose up -d postgres

# 5. Run migrations
npm run migration:run

# 6. Start app
npm run start:dev
```

App will be at `http://localhost:3000`
Swagger docs: `http://localhost:3000/api`

## 📖 API endpoints (sample)

| Method | Path           | Description         | Auth      |
| ------ | -------------- | ------------------- | --------- |
| POST   | /auth/register | Register a new user | Public    |
| POST   | /auth/login    | Login, get JWT      | Public    |
| GET    | /users/me      | Get current user    | JWT       |
| GET    | /tasks         | List tasks (paged)  | JWT       |
| POST   | /tasks         | Create a task       | JWT       |
| PATCH  | /tasks/:id     | Update task         | JWT       |
| DELETE | /tasks/:id     | Delete task         | JWT+Admin |

Full OpenAPI spec: see `/api` after running locally.

## 🧪 Tests

```bash
npm test              # unit
npm run test:e2e      # end-to-end
npm run test:cov      # with coverage
```

## 🌐 Live demo

Deployed at: https://your-app.up.railway.app

## 📸 Screenshots

(insert 1-2 Postman / Swagger screenshots — recruiters love visuals)

## 📝 What I learned

- Brief reflection: what was new, what was hard, what you'd do differently.
- This shows growth and is a great talking point in interviews.

## 📄 License

MIT
