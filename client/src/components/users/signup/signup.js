import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { post } from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
          onSubmit={async e => {
            e.preventDefault();
            try {
              const response = await post("http://localhost:5000/api/signup", {
                email: email,
                name: name,
                password: password
              });
              const token = response.data.token;
              console.log(token);
            } catch (err) {
              console.log(err.response.data);
              setErrorMsg(err.response.data.message);
            }
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
          <p style={{ color: "red", fontSize: "20px" }}>{errorMsg}</p>
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
