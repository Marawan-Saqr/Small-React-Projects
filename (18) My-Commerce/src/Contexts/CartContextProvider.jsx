import { useState, createContext } from 'react';

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {

  const savedItems = localStorage.getItem("products");
  const initialValue = savedItems ? JSON.parse(savedItems) : [];
  const [cartItems, setCartItems] = useState(initialValue);


  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem('products', JSON.stringify(newData));
  }


  const addProduct = (product) => {
    const checkItem = cartItems.find((item) => item.id === product.id);
    if (checkItem) {
      const newItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(newItems);
      saveDataToLocalStorage(newItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      saveDataToLocalStorage(newItems);
    }
  };

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, addProduct, saveDataToLocalStorage }}>
      {children}
    </cartContext.Provider>
  );
};


export default CartContextProvider;