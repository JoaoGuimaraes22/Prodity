import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { get } from "../../../helpers/GET";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <main id="#login" className="login">
      <div className="login__container">
        <div className="login__container__item login__container__intials">
          <Link href="/">
            <h3 className="login-logo">Logo</h3>
          </Link>
          <h4 className="login-info">Log in</h4>
        </div>

        <div className="login__container__item login__container__socials">
          <a href="#">
            <FaGoogle className="icon icon-google" />
            Log in with Google
          </a>
        </div>

        <form
          className="login__container__item login__container__form"
          onSubmit={async e => {
            e.preventDefault();
            const userID = await get("http://localhost:5000/api/userdata");
            await router.push(`/app/${userID.id}`);
          }}
        >
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

          <input type="submit" value="Log In" className="btn-submit" />
        </form>

        <div className="login__container__item login__container__extra">
          <p className="extra-text">
            Don't have an account?
            <Link href="/users/signup">
              <a>Sign Up</a>
            </Link>
          </p>

          <p className="extra-text">
            Forgot your password?
            <Link href="/users/password">
              <a>Click here</a>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
