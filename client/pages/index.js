import React from "react";
import Link from "next/link";
import "../src/css/homepage.css";
import Navbar from "../src/components/homepage/navbar/navbar";
import Landing from "../src/components/homepage/landing/landing";

function Index() {
  return (
    <div>
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
