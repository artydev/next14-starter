import { Inter } from "next/font/google";

import "./globals.css";
import "./bootstrap.min.css"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div class="innercontainer">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="main">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
