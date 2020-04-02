import React from "react";
import Head from "next/head";
import Signup from "../../src/components/users/signup/signup";
import "../../src/css/signup.css";

function SignUp() {
  return (
    <div>
      <Head>
        <title>Sign up for a free ProdiWork account</title>
      </Head>
      <Signup />
    </div>
  );
}

export default SignUp;
