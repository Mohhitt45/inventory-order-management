import { useEffect, useState } from "react";
import api from "../api/axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/products");
        console.log("DATA:", res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Products</h2>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>{p.price}</td>
                <td>{p.stock_quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Loading / No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;