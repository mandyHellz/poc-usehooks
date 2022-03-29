import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { HelloContextProvider } from "../ExamplesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelloContextProvider>
      <Component {...pageProps} />
    </HelloContextProvider>
  );
}

export default MyApp;
