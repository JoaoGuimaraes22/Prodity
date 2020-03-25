import React from "react";
import "../../src/css/login.css";
import Login from "../../src/components/users/login/login";
import Head from "next/head";

function LogIn() {
  return (
    <>
      <Head>
        <title>Log in to ProdiWork</title>
      </Head>
      <Login />
    </>
  );
}

export default LogIn;
