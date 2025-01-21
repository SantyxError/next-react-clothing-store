import "@/styles/globals.css"; // Si estás usando un archivo global de CSS
import GlobalStyles from "@/styles/globalStyles"; // Este es el que contiene los estilos de styled-components
import { theme } from "@/styles/theme";
import Navbar from "@/ui/components/organisms/NavBar/NavBar";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
