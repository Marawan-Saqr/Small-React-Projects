import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cartContext } from "../../Contexts/CartContextProvider";
import PageTitle from '../../Components/Page-title/PageTitle.jsx';

const Cart = () => {

  // Component States
  const cart = useContext(cartContext);


  // Handle Delete Function
  const handleDelete = (id) => {
    const newItems = cart.cartItems.filter((item)=> item.id !== id);
    cart.setCartItems(newItems);
    cart.saveDataToLocalStorage(newItems);
  }


  return (
    <div className="container mt-5">
      <h2 className="text-center"><PageTitle title="Cart Page" /></h2>
      {cart.cartItems.length === 0 ? (
        <h2>No Items At Cart</h2>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default Cart;