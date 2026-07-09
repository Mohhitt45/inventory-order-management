# 🤖 AI Inventory & Order Management System

An AI-powered Inventory and Order Management System that enables users to manage products, track orders, and interact with an intelligent AI assistant using natural language queries.

Built using **FastAPI, React, PostgreSQL, LangChain Agents, LangGraph, and Groq LLM**.

The system combines traditional inventory management APIs with an AI Agent capable of understanding user requests and executing business operations through tool calling.

---

# 🚀 Live Demo

## Frontend (React + Vite)

🔗 https://inventory-order-management-lyart.vercel.app/

## Backend API (FastAPI)

🔗 https://inventory-order-management-etq7.onrender.com/

## API Documentation (Swagger)

🔗 https://inventory-order-management-etq7.onrender.com/docs

---

# ✨ Features

## 📦 Inventory Management

- View all products
- Search products by name and SKU
- Track available stock levels
- Calculate inventory value
- Detect low-stock products


## 🛒 Order Management

- Create customer orders
- View order history
- Update order status
- Cancel orders
- Track order workflow


## 🤖 AI Inventory Assistant

Users can interact with inventory operations using natural language.

Example queries:


Show low stock products

Search laptop products

Create order for product ID 5

Show order history


The AI Assistant uses:

- LangChain Agents
- LangGraph workflow
- Groq LLM
- Custom Inventory Tools


The AI Agent understands user intent and selects the required backend tool automatically.

---

# 🏗️ System Architecture

             User
              |
              |
      React Frontend
      (Vite + Bootstrap)
              |
              |
         REST API
              |
              |
      FastAPI Backend
              |
    ---------------------
    |                   |
    |                   |

PostgreSQL Database AI Agent
|
|
LangGraph Agent
|
|
Groq LLM


---

# 🧠 AI Agent Workflow


User Query

  ↓

LangGraph Agent

  ↓

Intent Understanding

  ↓

Tool Selection

  ↓

Database Operation

  ↓

Natural Language Response


AI Agent Tools:

- Product Search
- Low Stock Detection
- Order Creation
- Order History Lookup
- Order Status Update
- Order Cancellation

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Bootstrap
- Axios


## Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic


## Database

- PostgreSQL
- Neon Database


## AI / LLM

- LangChain
- LangGraph
- Groq LLM
- AI Agents
- Tool Calling


## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure


inventory-order-management

│
├── backend
│ │
│ ├── app
│ │ │
│ │ ├── ai
│ │ │ ├── agent.py
│ │ │ └── tools.py
│ │ │
│ │ ├── routes
│ │ ├── models.py
│ │ ├── database.py
│ │ └── main.py
│ │
│ └── requirements.txt
│
│
├── frontend
│ │
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ └── api
│ │
│ └── package.json
│
│
└── README.md


---

# 🔌 API Endpoints

## 📦 Products API

### Get All Products


GET /products/


Returns all inventory products.


---

## 🤖 AI Chat API

### Chat with AI Assistant


POST /ai/chat


Request:

```json
{
  "message": "Show low stock products"
}

Response:

{
  "response": "There are 2 low stock products available."
}
⚙️ Local Setup
Backend Setup

Clone repository:

git clone https://github.com/Mohhitt45/inventory-order-management.git

Navigate to backend:

cd backend

Install dependencies:

pip install -r requirements.txt

Create .env file:

DATABASE_URL=your_database_url

GROQ_API_KEY=your_groq_api_key

Run backend:

uvicorn app.main:app --reload
Frontend Setup

Navigate frontend:

cd frontend

Install dependencies:

npm install

Run application:

npm run dev
🔐 Environment Variables

Backend requires:

DATABASE_URL=PostgreSQL connection string

GROQ_API_KEY=Groq API key

Never commit .env files to GitHub.

📸 Screenshots
AI Assistant Response

Add screenshot here

Swagger API Documentation

Add screenshot here

Inventory Management UI

Add screenshot here

🔮 Future Improvements
User Authentication
Role Based Access Control
Advanced Analytics Dashboard
AI Powered Inventory Forecasting
Automated Supplier Recommendations
Docker Deployment
Cloud Monitoring
Model Performance Tracking
👨‍💻 Author

Mohit Agrawal

AI Engineer | Data Scientist

GitHub:
https://github.com/Mohhitt45


Bhai isme abhi screenshots ke liye placeholders rakhe hain. Pehle ye README push kar de. Uske baad hum:
1. GitHub repo me `screenshots/` folder banayenge  
2. 3-4 professional screenshots add karenge  
3. README me actual image links laga denge 🚀