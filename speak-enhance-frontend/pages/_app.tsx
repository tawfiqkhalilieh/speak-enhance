/* eslint-disable import/no-anonymous-default-export */
import type { AppProps } from "next/app";

import "./css/globals.css";
import "./css/fonts.css";

// eslint-disable-next-line react/display-name
export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
