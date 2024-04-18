import { inter } from "@/lib/fonts";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./_components/Footer";

export const metadata = {
  title: "DJ Z-Daddy",
  description: "DJ Z-Daddy",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${inter.className}`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
          <Toaster />
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
