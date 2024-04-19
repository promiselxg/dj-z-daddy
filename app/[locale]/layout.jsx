import { inter } from "@/lib/fonts";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./_components/Footer";

export const metadata = {
  title: "DJ Zaddy",
  description:
    "Experience the electrifying fusion of cultures with DJ Zaddy, born in Lagos, Nigeria, now making waves in Germany's nightlife scene. From Michael Jackson's timeless pop to Fela Kuti's Afrobeat revolution, DJ Zaddy blends genres seamlessly. With seven years of expertise and a passion for Afrobeat, Dancehall, Hip-Hop, and Latin rhythms, his open format sets ignite dance floors worldwide. Join the journey with DJ Zaddy for an unforgettable musical experience.",
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
