import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./Home";
import Cart from "./Cart";
import Order from "./Orders"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {CartProvider} from "react-use-cart";




function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}exact/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="Order" element={<Order/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    
    </>
  );
};

export default App;
