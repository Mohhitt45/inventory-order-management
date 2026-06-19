import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>

      <Link to="/products" className="btn btn-primary">
        Go to Products
      </Link>
    </div>
  );
}

export default Dashboard;