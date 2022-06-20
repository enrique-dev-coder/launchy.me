import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { useMenu } from '../context/MenuContext';
import MobileMenu from './MobileMenu';
import Script from 'next/script';
const Layout = ({ children }) => {
  const { isOpen, setisOpen, loading } = useMenu();
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6P2X9Y8X5Y`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6P2X9Y8X5Y', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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

      <div
        //NOTE esta clase se pone porque cuando esta activa la pantalla de carga queremos desactivar el scroll
        className={`relative ${
          loading ? 'h-screen overflow-y-hidden' : 'h-auto overflow-y-visible'
        }`}
      >
        <Navbar />
        <MobileMenu isOpen={isOpen} />
        {children}
      </div>
    </>
  );
};

export default Layout;
