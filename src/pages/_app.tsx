import { type AppType } from "next/app";
import Script from "next/script";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2GEJ936XLK`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2GEJ936XLK');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
