import { Inter } from "next/font/google";

// import "./bootstrap.min.css"
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div class="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
