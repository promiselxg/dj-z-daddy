import { inter } from "@/lib/fonts";
import "./globals.css";
import Footer from "./_components/Footer";

export const metadata = {
  title: "DJ Z-Daddy",
  description: "DJ Z-Daddy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
