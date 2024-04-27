import { AuthContextProvider } from "@/context/authContext";
import { cn } from "@/lib/utils";
import "../[locale]/globals.css";
import { barlow } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Login",
  description: "DJ Zaddy | Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={cn(`${barlow.className} bg-[#000]`)}>
          {children}
          <Toaster />
        </body>
      </AuthContextProvider>
    </html>
  );
}
