import React from "react";

const Navbar = () => {
  return (
    <>
      {/* 
        ** Navbar

        * Logo
        * Features
        * Premium
         
        * Login
        * Sign Up
    */}
      <nav id="nav" className="nav">
        <ul className="nav__ul nav__ul-left">
          <h3 className="nav__ul__logo nav__ul__item">LOGO</h3>
          <li className="nav__ul__item">Features</li>
          <li className="nav__ul__item">Premium</li>
        </ul>
        <ul className="nav__ul nav__ul-right">
          <li className="nav__ul__item">Login</li>
          <li className="nav__ul__item">Signup</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
