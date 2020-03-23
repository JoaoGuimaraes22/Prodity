import App from "next/app";
import React from "react";
import WithReduxLayout from "../src/components/withReduxLayout";
import "../src/css/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <WithReduxLayout>
        <Component {...pageProps} />
      </WithReduxLayout>
    );
  }
}

export default MyApp;
