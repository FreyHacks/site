import { useEffect } from 'react';
import splitbee from '@splitbee/web';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: '/sb.js',
      apiUrl: '/_hive'
    });
  });

  return <Component {...pageProps} />;
};

export default App;