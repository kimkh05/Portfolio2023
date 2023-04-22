import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import { theme } from './theme';

interface PropsType {
  children: ReactNode;
}

const StyleProvider = ({ children }: PropsType) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    {children}
  </ThemeProvider>
);

export default StyleProvider;
