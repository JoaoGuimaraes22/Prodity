import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <main id="#signup" className="signup">
      <div className="signup__container">
        <div className="signup__container__item signup__container__intials">
          <Link href="/">
            <h3 className="signup-logo">Logo</h3>
          </Link>
          <h4 className="signup-info">Sign up</h4>
        </div>

        <div className="signup__container__item signup__container__socials">
          <a href="#">
            <FaGoogle className="icon icon-google" />
            Sign Up with Google
          </a>
        </div>

        <form
          className="signup__container__item signup__container__form"
          onSubmit={e => {
            e.preventDefault();
            console.log(name, email, password);
          }}
        >
          <div className="form-item">
            <label>Your name</label>
            <input
              type="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-item">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-item">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>

          <input type="submit" value="Sign up now" className="btn-submit" />
        </form>

        <div className="signup__container__item signup__container__extra">
          <p className="extra-text">
            Already signed up?
            <Link href="/users/login">
              <a>Go to Login</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
