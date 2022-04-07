import Head from 'next/head';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>N.A.A.A | Ants with a need, a need for speed.</title>
        <meta name="description" content="Where antz run free" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
