import "@/globals.css";
import { montserrat } from "../fonts";

import { RootLayoutProps } from "@/types";

import Header from "@/components/main-header/main-header";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
