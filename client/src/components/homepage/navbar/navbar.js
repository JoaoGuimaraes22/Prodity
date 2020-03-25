import React from "react";
import Link from "next/link";

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
          <a href="#" className="nav__ul__logo nav__ul__item">
            <h3 className="">LOGO</h3>
          </a>
          <a href="#" className="nav__ul__item">
            <li>Features</li>
          </a>
          <a href="#" className="nav__ul__item">
            <li>Premium</li>
          </a>
        </ul>
        <ul className="nav__ul nav__ul-right">
          <Link href="/users/login">
            <a className="nav__ul__item">
              <li>Login</li>
            </a>
          </Link>
          <Link href="/users/signup">
            <a className="nav__ul__item nav__ul__item-signup">
              <li>Signup</li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
