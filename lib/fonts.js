import { Inter, Barlow, Montserrat, Open_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
});
