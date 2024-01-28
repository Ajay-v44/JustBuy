import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import { useState } from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./Pages/Cart";
function App() {
  const [cartitems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <ToastContainer theme="dark" position="top-center" />
        <Header cartitems={cartitems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cartitems={cartitems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/cart" element={<Cart  cartitems={cartitems} setCartItems={setCartItems} />} />
            
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
