import type { AppProps } from 'next/app';
import StyleProvider from '@/styles';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ToastContainer />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </StyleProvider>
  );
}
