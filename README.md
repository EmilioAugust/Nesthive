# 📂 Nesthive (Bookmark Manager)

**Nesthive** is a backend web application for saving, organizing, and managing your favorite links.  
Built with **FastAPI**, **SQLAlchemy**, and **JWT authentication**, it allows users to create collections, tag bookmarks, and search through them easily.

---

## Features

- **User Authentication (JWT)** — secure registration and login   
- **Bookmarks** — add, edit, and delete saved links  
- **Tags** — categorize bookmarks for easier organization  
- **Search & Filter** — find links by keyword or tag

---

## Tech Stack

- **Backend:** FastAPI
- **Frontend:** React, Vite, JavaScript (ES6+), CSS, Fetch API
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy
- **Auth:** JWT (python-jose) + Passlib

---

## Requirements

### For Docker setup:
- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Docker Compose v2

### For manual setup:
- Python 3.12+
- Node.js 20+
- PostgreSQL

---

## 🐳 Running with Docker
### 1. Clone the repository
```bash
git clone https://github.com/EmilioAugust/Nesthive.git
cd Nesthive
```

### 2. Configure environment variables
```bash
cp .env.example .env
# Edit the .env file with your values
```

### 3. Start all services
```bash
# First time build and start
docker-compose up --build
# or
# Start in background
docker-compose up -d --build
```
### 4. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/docs

---

## 📄 License
MIT License — feel free to use and modify.
