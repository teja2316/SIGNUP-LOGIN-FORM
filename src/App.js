import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Loginpage from "./components/signup_loginpage";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="home" index element={<Home />} />            
            <Route path="singup" element={<Signup />} />
            <Route path="login" element={<Loginpage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;