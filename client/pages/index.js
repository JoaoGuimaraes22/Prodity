import React from "react";
import Link from "next/link";
import "../src/css/homepage.css";
import Navbar from "../src/components/homepage/navbar/navbar";

function Index() {
  return (
    <div>
      {/*
       ** Landing Page
       */}
      <Navbar />

      {/*
       ** Introduction
       */}

      {/*
       ** User Stories
       */}

      {/*
       ** Footer
       */}

      <h1>Hello World</h1>

      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default Index;
