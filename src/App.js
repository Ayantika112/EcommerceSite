import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./features/product/Product";
import { Cart } from "./features/cart/Cart";
import { MainDashboard } from "./features/voiceApp/MainDashBoard";
import SingleProduct from "./pages/SingleProduct";
import LogInPagedesign from "./features/component-with-style/LogInPagedesign";
import DesignLogin from "./features/component-with-style/logIn/DesignLogin";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />}>
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route exact path="product/SingleProduct/:id" element={<SingleProduct />} />
        </Route>
        <Route path="/voiceApp" element={<MainDashboard />}></Route>
        <Route path="/designLoginPage" element={<LogInPagedesign/>}></Route>
        <Route path="/DesignLogin" element={<DesignLogin/>}/>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
