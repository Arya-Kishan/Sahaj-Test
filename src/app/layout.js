import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollButton/ScrollButton";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata = {
  title: "SahajMoney™ - Investment Simplified",
  description: "Find out why Fee-Only Financial Planning is good for you and how it can stop you from making costly mistakes. 3 steps to a more financially secure life in 2024.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <ScrollToTopButton />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
