import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { useMenu } from '../context/MenuContext';
import MobileMenu from './MobileMenu';
import Script from 'next/script';
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
  const { isOpen, setisOpen, loading, setLoading } = useMenu();
  const { asPath } = useRouter();
  //NOTE se uso el hook de userouter para recibir los parametros de la ruta, el asPath trae el path de la pagina, con esto le decimos que si la pagina es diferente a la home no ponga el estado de la pantalla de carga
  asPath != '/' && setLoading(false);

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
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T23HX97');`,
        }}
      ></Script>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <title>Launchy</title>
        <meta
          name="description"
          content="Desarrollando e innovando hasta el infinito y mas allá."
          key="desc"
        />
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
        <link rel="shortcut icon" href="/launchy.ico" />
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
