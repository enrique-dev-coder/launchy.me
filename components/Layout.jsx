import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Launchy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
