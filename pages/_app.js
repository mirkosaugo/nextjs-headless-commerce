import { useState, useMemo } from 'react';
import MenuProvider from '../store/context/MenuContext';
import 'normalize.css/normalize.css';
import '/assets/css/document.css';

import '/assets/scss/index.scss';


function MyApp({ Component, pageProps }) {
  return <MenuProvider><Component {...pageProps} /></MenuProvider>
}

export default MyApp
