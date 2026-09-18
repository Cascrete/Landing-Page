import type { Metadata } from "next";
import {
  Montserrat,
  Plus_Jakarta_Sans,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cascrete.com"),
  title: {
    default: "Cascrete | Web, App, Brand & Design Studio",
    template: "%s | Cascrete",
  },
  description:
    "Cascrete designs and develops websites, apps, brands, social media creatives, packaging, and editorial experiences for ambitious businesses.",
  keywords: [
    "Cascrete",
    "web development studio",
    "app development",
    "UI UX design",
    "branding and identity",
    "social media creatives",
    "packaging design",
    "editorial design",
    "digital product studio",
  ],
  authors: [{ name: "Cascrete" }],
  creator: "Cascrete",
  publisher: "Cascrete",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://cascrete.com",
    siteName: "Cascrete",
    title: "Cascrete | Web, App, Brand & Design Studio",
    description:
      "Websites, apps, branding, social creatives, packaging, and editorial design built for businesses ready to move.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cascrete digital product and design studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cascrete | Web, App, Brand & Design Studio",
    description:
      "Websites, apps, branding, social creatives, packaging, and editorial design built for businesses ready to move.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${jakarta.variable} ${hanken.variable} ${jetbrainsMono.variable} font-jakarta antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
