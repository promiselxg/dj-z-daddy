import { inter } from "@/lib/fonts";
import "./globals.css";
import Footer from "./_components/Footer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "DJ Z-Daddy",
  description: "DJ Z-Daddy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
