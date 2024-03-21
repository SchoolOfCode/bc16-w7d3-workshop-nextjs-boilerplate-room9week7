import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "../src/Header/Header.jsx";
import Footer from "../src/Footer/Footer.jsx";
const inter = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Fireplace Palace",
  description: "Lovely Fireplaces",
};

export default function RootLayout() {
  useClient();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
