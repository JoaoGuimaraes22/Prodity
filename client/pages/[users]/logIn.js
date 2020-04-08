import React from "react";
import "../../src/css/login.css";
import Login from "../../src/components/users/login/login";
import Head from "next/head";
import { useRouter } from "next/router";

function LogIn() {
  const Router = useRouter();
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
