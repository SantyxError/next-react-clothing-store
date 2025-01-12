import "@/styles/globals.css";
import GlobalStyles from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
