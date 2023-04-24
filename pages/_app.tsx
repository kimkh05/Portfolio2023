import type { AppProps } from 'next/app';
import StyleProvider from '@/styles';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ToastContainer />
      <RecoilRoot>
        <Head>
          <title>KyeongHo's Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </StyleProvider>
  );
}
