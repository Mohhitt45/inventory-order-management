---
📦 Inventory Order Management System
A full-stack Inventory Management System built with \*\*React\*\*, \*\*FastAPI\*\*, \*\*PostgreSQL\*\*, and \*\*Docker\*\* — deployed on cloud platforms for real-time stock tracking and order management.
---
🚨 Problem Statement

Managing inventory manually often leads to inefficiencies such as stock mismatches, delayed updates, and lack of real-time visibility.

Small and medium businesses struggle to track product availability, pricing, and stock levels across multiple systems.'

This project solves these issues by building a centralized Inventory Management System that provides:

✅ Real-time product tracking
✅ API-based architecture for easy integration
✅ Cloud deployment for scalability and availability

🚀 Live Links

Service	Link
🌐 Frontend (Vercel)	inventory-order-management-lyart.vercel.app
⚙️ Backend API (Render)	inventory-order-management-etq7.onrender.com
🐳 Docker Hub	mohhitt45/inventory-backend
📁 GitHub Repo	Mohhitt45/inventory-order-management

🧩 Features
📋 Product listing with SKU, price, and stock levels
⚡ RESTful APIs built with FastAPI
🗄️ PostgreSQL database integration via Neon
🐳 Dockerized backend for consistent deployment
📱 Responsive frontend using React + Bootstrap
☁️ Fully deployed on cloud (Vercel + Render)

🏗️ Tech Stack
Layer	Technologies
Frontend	React.js, Vite, Axios, Bootstrap
Backend	FastAPI, SQLAlchemy, PostgreSQL (Neon), Uvicorn
DevOps	Docker, Docker Hub, Render, Vercel

📁 Project Structure
```
inventory-order-management/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   └── main.py
│   ├── Dockerfile
│   └── requirements.txt
│
└── README.md
```
---
⚙️ Setup Instructions
Prerequisites
Node.js v18+
Python 3.10+
Docker (optional)
PostgreSQL or Neon account
---
🐍 Backend
```bash
cd backend
pip install -r requirements.txt
```
Create a `.env` file in `/backend`:
```env
DATABASE\_URL=postgresql://user:password@host/dbname
```
Run the server:
```bash
uvicorn app.main:app --reload
```
API available at: `http://localhost:8000`  
Interactive docs: `http://localhost:8000/docs`
---
⚛️ Frontend
```bash
cd frontend
npm install
npm run dev
```
App available at: `http://localhost:5173`
---
🐳 Docker
Build and run the backend using Docker:
```bash
docker build -t inventory-backend .
docker run -p 10000:10000 -e DATABASE\_URL="your\_db\_url\_here" inventory-backend
```
Or pull directly from Docker Hub:
```bash
docker pull mohhitt45/inventory-backend
docker run -p 10000:10000 -e DATABASE\_URL="your\_db\_url\_here" mohhitt45/inventory-backend
```
---
📖 API Documentation
FastAPI provides auto-generated interactive API docs:
Swagger UI: `/docs`
ReDoc: `/redoc`
---
🤝 Contributing
Fork this repository
Create a new branch: `git checkout -b feature/your-feature-name`
Commit your changes: `git commit -m "Add: your feature description"`
Push to your branch: `git push origin feature/your-feature-name`
Open a Pull Request
---
👨‍💻 Author
Mohhitt45  
🔗 GitHub | 🐳 Docker Hub
---
⭐ If this project helped you, please give it a star on GitHub!
