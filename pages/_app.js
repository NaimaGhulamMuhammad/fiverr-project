import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import Head from "next/head";
import Script from "next/script";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#F58232"
        />
      </Head>
      <RecoilRoot>

          <Component {...pageProps} />

      </RecoilRoot>
      <Script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></Script>
    </>
  );
}

export default MyApp;
