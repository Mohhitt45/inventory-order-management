from pydantic import BaseModel
from app.ai.agent import chat_with_ai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware


from app.database import engine, Base
from app import models

from app.routes import product

Base.metadata.create_all(bind=engine)

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product.router, prefix="/products", tags=["Products"])


@app.get("/")
def root():
    return {"message": "Backend working"}

class ChatRequest(BaseModel):
    message: str


@app.post("/ai/chat")
def ai_chat(request: ChatRequest):

    response = chat_with_ai(request.message)

    return {
        "response": response
    }