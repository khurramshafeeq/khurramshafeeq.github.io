// import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose your theme
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/app/_components/ScrollToTop";

import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Home | Portfolio",
  },
  description: "portfolio of my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${worksans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
