import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {

  // Component States
  const params = useParams();
  const [product, setProduct] = useState(null);


  // Get Product By Id
  const getProductById = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params.productID}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };


  // UseEffect
  useEffect(() => {
    getProductById();
  }, [params]);


  return (
    <div className="container d-flex flex-column align-items-center py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {product ? (
        <div className="card shadow-lg" style={{ maxWidth: '28rem', width: '100%' }}>
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top p-3"
            style={{ objectFit: 'contain', height: '18rem' }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{product.title}</h5>
            <p className="card-text text-muted">{product.description}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center text-muted">No Item To Show</h2>
      )}
    </div>
  );
};


export default ProductDetails;