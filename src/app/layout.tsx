import "@/globals.css";

import { Montserrat } from "next/font/google";

import { RootLayoutProps } from "@/types";

import Header from "@/components/main-header/main-header";

const montserrat = Montserrat({
  weight: "200",
  subsets: ["latin"],
});

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
