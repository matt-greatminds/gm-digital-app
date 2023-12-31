import "../styles/globals.css";
import "ui/styles.css";
import type { AppProps } from "next/app";
import { NavBar, PageContainer } from "ui";
import { GMDPDataProvider } from "gmdp-data-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar app="student" />
      <PageContainer>
        <GMDPDataProvider>
          <Component {...pageProps} />
        </GMDPDataProvider>
      </PageContainer>
    </>
  );
}
