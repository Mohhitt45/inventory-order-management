import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">

        <h1 className="display-4 fw-bold">
          Inventory Management System
        </h1>

        <p className="lead text-muted">
          AI Powered Inventory & Order Management Dashboard
        </p>

      </div>

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow h-100">

            <div className="card-body text-center">

              <h3>📦 Products</h3>

              <p className="text-muted">
                View inventory, stock levels and product details.
              </p>

              <Link
                to="/products"
                className="btn btn-primary"
              >
                Open Products
              </Link>

            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow h-100">

            <div className="card-body text-center">

              <h3>🤖 AI Assistant</h3>

              <p className="text-muted">
                Ask inventory questions using natural language.
              </p>

              <Link
                to="/ai-chat"
                className="btn btn-success"
              >
                Open AI Assistant
              </Link>

            </div>

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

export default Dashboard;