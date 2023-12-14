import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./features/product/Product";
import { Cart } from "./features/cart/Cart";
import { MainDashboard } from "./features/voiceApp/MainDashBoard";

function App() {

  
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Signup" element={<SignupPage/>} />
          <Route path="/Signup/product" element={<Product/>} />
          <Route path="/Signup/cart" element={<Cart/>} />
          {/* <Route path="/Signup/Cart" element={<Home/>} /> */}
          <Route path="/voiceApp" element={<MainDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
