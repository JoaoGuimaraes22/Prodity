import React from "react";
import Head from "next/head";
import "../src/css/homepage.css";
import Navbar from "../src/components/homepage/navbar/navbar";
import Landing from "../src/components/homepage/landing/landing";

function Index() {
  return (
    <div>
      <Head>
        <title>ProdiWork: for you to be the best you</title>
      </Head>
      <Navbar />
      <Landing />
      {/*
       ** Introduction
       */}

      {/*
       ** User Stories
       */}

      {/*
       ** Footer
       */}
    </div>
  );
}

export default Index;
