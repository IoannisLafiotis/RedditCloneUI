import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

console.log(process.env.NEXT_PUBLIC_API_URL);

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true
        }}
      >
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
