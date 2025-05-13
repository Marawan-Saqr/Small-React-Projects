import React, { useState, useEffect } from "react";
import PageTitle from "../Page-title/PageTitle.jsx";
import axios from "axios";
import ProductCard from "./Product-card/ProductCard.jsx";
import LoadingSpinner from '../Loading/LoadingSpinner.jsx';

const Products = () => {

  // Component States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // Get All Products
  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };


  // Use Effect
  useEffect(() => {
    getAllProducts();
  }, []);


  return (
    <div>
      <h2 className="text-center mt-4">
        <PageTitle title="ALL PRODUCTS" />
      </h2>
      <div className="bg-light min-vh-100 py-4">
        <div className="container">
          {loading ? (
            <div className="text-center mt-5">
              <LoadingSpinner />
            </div>
          ) : products.length >= 1 ? (
            <div className="row">
              {products.map((item) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={item.id}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-secondary mt-5">
              <h2>No Products For Now</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Products;