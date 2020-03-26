import React from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Ster Wers</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <>{children}</>
    </main>
  </>
);

export default Layout;