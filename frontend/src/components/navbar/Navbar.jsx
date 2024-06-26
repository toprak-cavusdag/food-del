import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      <img
        src={assets.logo}
        alt="Food Del Logo"
        title="Food Del Logo"
        className="logo"
      />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={()=> setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot" />
        </div>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
