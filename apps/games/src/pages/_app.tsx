import "../styles/globals.css";
import "ui/styles.css";
import type { AppProps } from "next/app";
import { NavBar, PageContainer } from "ui";
import { GMDPDataProvider } from "gmdp-data-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-em1-20">
      <NavBar />
      <PageContainer>
        <GMDPDataProvider>
          <Component {...pageProps} />
        </GMDPDataProvider>
      </PageContainer>
    </div>
  );
}
