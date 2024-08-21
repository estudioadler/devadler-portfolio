import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";
import { Header } from "./header";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { Toaster } from "../components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const neueMachina = localFont({
  variable: "--font-neue-machina",
  src: [
    {
      path: "../../public/fonts/NeueMachina-Ultralight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/NeueMachina-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/NeueMachina-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/NeueMachina-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/NeueMachina-Ultrabold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/NeueMachina-Black.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Adler Gabriel - Front-end Developer & UI Designer",
  description: "Desenvolvedor front-end e UI Designer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className=" scroll-smooth antialiased scrollbar selection:bg-neutral-900 selection:text-neutral-50"
    >
      {/* <Preloader /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          neueMachina.variable
        )}
      >
        <Header />
        <main>
          {children}
        </main>
        <Toaster theme="dark" richColors />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
