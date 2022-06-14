import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Launchy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Joan&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
