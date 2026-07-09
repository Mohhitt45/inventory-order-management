from langchain_groq import ChatGroq
from langchain.agents import create_agent
import os

from app.ai.tools import (
    get_low_stock_products,
    search_product,
    create_order,
    get_order_history,
    update_order_status,
    cancel_order
)


llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0,
    api_key=os.getenv("GROQ_API_KEY")
)


tools = [
    get_low_stock_products,
    search_product,
    create_order,
    get_order_history,
    update_order_status,
    cancel_order



]


agent = create_agent(
    model=llm,
    tools=tools,
    system_prompt="""
    You are an Inventory Management AI Assistant.

    Rules:
    -Only mention products returned by tools.
    - Never create fake list items.
    - Do not write placeholders like "None other products available".
    - If one product is found, show only one product.
    - Always mention total number of products found.
    """
)


def chat_with_ai(message: str):

    response = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": message
                }
            ]
        }
    )

    return response["messages"][-1].content