import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../../Contexts/CartContextProvider';

const ProductCard = ({ item }) => {
  const cart = useContext(cartContext);

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={item?.image || 'default-image.jpg'} />
        <Card.Body>
          <Card.Title>{item?.title?.slice(0, 20) || 'No Title'}</Card.Title>
          <Card.Text>{item?.description?.slice(0, 100) || 'No Description Available'}</Card.Text>
          <Link to={`/all-products/product-details/${item.id}`} className="btn btn-primary me-2">
            Show Details
          </Link>
          <button className="btn btn-warning" onClick={() => cart.addProduct(item)}>
            Add To Cart
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;