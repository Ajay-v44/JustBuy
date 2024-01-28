import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import { useState } from "react";

function App() {
  const [cartitems,setCartItems]=useState([])
  return (
    
    <div className="App">
      <Router>
        <Header cartitems={cartitems}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail cartitems={cartitems} setCartItems={setCartItems} />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
