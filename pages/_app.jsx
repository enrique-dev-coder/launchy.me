import '../styles/globals.css';
import '../styles/stars.css';
import Layout from '../components/Layout';

import { MenuProvider } from '../context/MenuContext';
function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}

export default MyApp;
