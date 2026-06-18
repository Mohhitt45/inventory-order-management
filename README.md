# 📦 Inventory Order Management System

A full-stack Inventory Management System built using **React, FastAPI, PostgreSQL, and Docker**, deployed on cloud platforms.

---

## 🚀 Live Links

### 🌐 Frontend (Vercel)
https://inventory-order-management-lyart.vercel.app/

### ⚙️ Backend API (Render)
https://inventory-order-management-etq7.onrender.com/

### 🐳 Docker Hub Image
https://hub.docker.com/r/mohhitt45/inventory-backend

### 📁 GitHub Repository
https://github.com/Mohhitt45/inventory-order-management

---

## 🧩 Features

- Product listing with SKU, price, and stock
- RESTful APIs using FastAPI
- PostgreSQL database integration (Neon)
- Docker containerized backend
- Responsive frontend using React
- Deployed on cloud (Vercel + Render)

---

## 🏗️ Tech Stack

### Frontend:
- React.js
- Vite
- Axios
- Bootstrap

### Backend:
- FastAPI
- SQLAlchemy
- PostgreSQL
- Uvicorn

### DevOps:
- Docker
- Docker Hub
- Render
- Vercel

---

## ⚙️ Setup Instructions

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

**### FRONTEND
**```bash
cd frontend
npm install
npm run dev

### DOCKER
```bash
docker build -t inventory-backend .
docker run -p 10000:10000 -e DATABASE_URL="YOUR_DB_URL" inventory-backend
