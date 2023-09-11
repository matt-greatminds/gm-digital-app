import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";
import "explore/dist/index.css";
import { NavBar, PageContainer } from "ui";
import { GMDPDataProvider } from "../components/clientComponents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-beige-80">
      <body>
        <NavBar app="main" />
        <PageContainer>
          <GMDPDataProvider>{children}</GMDPDataProvider>
        </PageContainer>
      </body>
    </html>
  );
}
