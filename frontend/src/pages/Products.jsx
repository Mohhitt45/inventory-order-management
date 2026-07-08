import { useEffect, useState } from "react";
import api from "../api/axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    setLoading(true);

    try {
      const res = await api.get("/products/");

      setProducts(res.data);

      setLoading(false);

    } catch (error) {

      alert(error.message);
      console.log(error);

      setLoading(false);
    }
  };


  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="container mt-4">


      <h2>Products</h2>


      <div className="row mb-3">


        <div className="col-md-6">

          <input
            type="text"
            className="form-control"
            placeholder="Search by Product Name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="col-md-2">

          <button
            className="btn btn-primary w-100"
            onClick={fetchProducts}
          >
            Refresh
          </button>

        </div>


      </div>



      <div className="row mb-4">


        <div className="col-md-4">

          <div className="card shadow-sm text-center">

            <div className="card-body">

              <h6>Total Products</h6>

              <h3>{products.length}</h3>

            </div>

          </div>

        </div>



        <div className="col-md-4">

          <div className="card shadow-sm text-center">

            <div className="card-body">

              <h6>Low Stock</h6>

              <h3>
                {products.filter(
                  (p) => p.stock_quantity <= 5
                ).length}
              </h3>

            </div>

          </div>

        </div>



        <div className="col-md-4">

          <div className="card shadow-sm text-center">

            <div className="card-body">

              <h6>Inventory Value</h6>

              <h5>

                ₹
                {products
                  .reduce(
                    (sum, p) =>
                      sum + p.price * p.stock_quantity,
                    0
                  )
                  .toLocaleString("en-IN")}

              </h5>

            </div>

          </div>

        </div>


      </div>





      {loading && (

        <div className="text-center my-5">

          <div
            className="spinner-border text-primary"
            role="status"
          ></div>


          <p className="mt-3">
            Loading Products...
          </p>


        </div>

      )}






      {!loading && (

        <table className="table table-bordered">


          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>SKU</th>

              <th className="text-end">
                Price
              </th>

              <th>
                Stock
              </th>

              <th>
                Status
              </th>

              <th>
                Actions
              </th>

            </tr>

          </thead>




          <tbody>


            {filteredProducts.map((p) => (

              <tr key={p.id}>


                <td>
                  {p.id}
                </td>


                <td>
                  {p.name}
                </td>


                <td>
                  {p.sku}
                </td>


                <td className="text-end">

                  ₹{p.price.toLocaleString()}

                </td>


                <td>
                  {p.stock_quantity}
                </td>



                <td>


                  {p.stock_quantity <= 5 ? (


                    <span className="badge bg-danger">

                      Low Stock

                    </span>


                  ) : (


                    <span className="badge bg-success">

                      In Stock

                    </span>


                  )}


                </td>




                <td>


                  <button
                    className="btn btn-sm btn-info me-2"
                  >
                    View
                  </button>



                  <button
                    className="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </button>



                  <button
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>


                </td>


              </tr>


            ))}



          </tbody>


        </table>


      )}






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


export default Products;