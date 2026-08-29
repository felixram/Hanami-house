import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { siteUrl } from "./site-config";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hanami House | Private & Corporate Sushi Catering",
  description:
    "Hanami House brings chef-attended omakase and refined sushi catering to weddings, private dinners, and corporate events — each menu composed around what the season offers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${shipporiMincho.variable} ${zenKakuGothicNew.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
