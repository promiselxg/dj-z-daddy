import { inter } from "@/lib/fonts";
import "../[locale]/globals.css";
import "./dashboard.css";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/context/authContext";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata = {
  title: "DJ Z-Daddy | Account Management",
  description: "DJ Z-Daddy Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CookiesProvider>
        <AuthContextProvider>
          <body className={`${inter.className}`}>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <div className="w-full flex h-screen ">
              <Sidebar />
              <div className="w-full md:w-[84%] bg-[#fafafb] md:ml-[16.7%] ">
                <Header />
                <div className="flex mt-[70px] p-5">{children}</div>
              </div>
              <Toaster />
            </div>
          </body>
        </AuthContextProvider>
      </CookiesProvider>
    </html>
  );
}
