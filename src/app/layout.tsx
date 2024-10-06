import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import ToasterContext from "@/context/ToasterContext";
import { UserProvider } from "@/contexts/UserProvider";
import "./globals.css";
import { Providers } from "@/components/providers";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bake N Treat",
  description: "Bake N Treat Official Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abhayaLibre.className}>
      <body>
        <Providers>
          <UserProvider>
            <Navbar />
            <ToasterContext />
            {children}
            <NewsLetter />
            <Footer />
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
