import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (customMessage = null) => {
    const text = customMessage || message;

    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "You",
        text: text,
        time: new Date().toLocaleTimeString(),
      },
    ]);

    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/ai/chat", {
        message: text,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: res.data.response,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "Unable to connect to AI server.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>🤖 Inventory AI Assistant</h2>

        <div>

          <Link
            to="/"
            className="btn btn-secondary me-2"
          >
            Dashboard
          </Link>

          <Link
            to="/products"
            className="btn btn-primary me-2"
          >
            Products
          </Link>

          <button
            className="btn btn-danger"
            onClick={() => setMessages([])}
          >
            Clear Chat
          </button>

        </div>

      </div>

      <div className="card shadow" style={{ height: "600px" }}>

        <div className="card-body overflow-auto">

          {messages.length === 0 && (

            <>
              <div className="alert alert-info">

                <h5>👋 Welcome to Inventory AI Assistant</h5>

                <p className="mb-2">
                  You can ask me to:
                </p>

                <ul className="mb-0">
                  <li>Search products</li>
                  <li>Create orders</li>
                  <li>View order history</li>
                  <li>Cancel orders</li>
                  <li>Update order status</li>
                  <li>Check low stock products</li>
                </ul>

              </div>

              <div className="mb-4">

                <h6 className="fw-bold mb-3">
                  Suggested Prompts
                </h6>

                <button
                  className="btn btn-outline-primary btn-sm me-2 mb-2"
                  onClick={() =>
                    sendMessage("Show low stock products")
                  }
                >
                  Low Stock
                </button>

                <button
                  className="btn btn-outline-success btn-sm me-2 mb-2"
                  onClick={() =>
                    sendMessage("Show all orders")
                  }
                >
                  Order History
                </button>

                <button
                  className="btn btn-outline-warning btn-sm me-2 mb-2"
                  onClick={() =>
                    sendMessage("Search Laptop")
                  }
                >
                  Search Laptop
                </button>

                <button
                  className="btn btn-outline-danger btn-sm me-2 mb-2"
                  onClick={() =>
                    sendMessage(
                      "Create order for Laptop quantity 1"
                    )
                  }
                >
                  Create Order
                </button>

                <button
                  className="btn btn-outline-dark btn-sm mb-2"
                  onClick={() =>
                    sendMessage("Cancel order 2")
                  }
                >
                  Cancel Order
                </button>

              </div>

            </>

          )}

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`mb-3 ${
                msg.sender === "You"
                  ? "text-end"
                  : "text-start"
              }`}
            >

              <strong>{msg.sender}</strong>

              <div
                className={`d-inline-block p-3 rounded ${
                  msg.sender === "You"
                    ? "bg-primary text-white"
                    : "bg-light"
                }`}
                style={{
                  maxWidth: "75%",
                  whiteSpace: "pre-wrap",
                }}
              >

                {msg.text}

              </div>

              <div>

                <small className="text-muted">
                  {msg.time}
                </small>

              </div>

            </div>

          ))}

          {loading && (

            <div className="d-flex align-items-center">

              <div
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></div>

              AI is thinking...

            </div>

          )}

          <div ref={messagesEndRef}></div>

        </div>

        <div className="card-footer">

          <div className="input-group">

            <input
              type="text"
              className="form-control"
              placeholder="Ask inventory assistant..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              className="btn btn-success"
              onClick={sendMessage}
            >
              Send
            </button>

          </div>

        </div>

      </div>

      <footer className="text-center mt-5 py-3 border-top">
        <small className="text-muted">
          Inventory Management System
          <br />
          Built with React • FastAPI • LangChain • PostgreSQL
          <br />
          © 2026 Mohit Agrawal
        </small>
      </footer>

    </div>
  );
}

export default AIChat;