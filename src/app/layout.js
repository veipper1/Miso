import "./globals.css";
import { Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin", "japanese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata = {
  title: "Miso",
  description:
    "If it exists, Miso will try to eat it. That’s the rule. Follow his bite-sized adventures as he turns the everyday into an all-you-can-eat buffet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
