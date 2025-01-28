import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from './Components/Topnav/TopNav.jsx';
import Home from './Pages/Home/Home.jsx';
import AllProducts from './Pages/All-Products/AllProducts.jsx';
import Products from './Components/Products/Products.jsx';
import ProductDetails from './Pages/Product-details/ProductDetails.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import CartContextProvider from './Contexts/CartContextProvider.jsx';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />}>
            <Route index element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="product-details/:productID" element={<ProductDetails />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;