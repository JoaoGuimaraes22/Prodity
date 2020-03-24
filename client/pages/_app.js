import App from "next/app";
import Head from "next/head";
import React from "react";
import WithReduxLayout from "../src/components/withReduxLayout";
import "../src/css/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <WithReduxLayout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </WithReduxLayout>
    );
  }
}

export default MyApp;
