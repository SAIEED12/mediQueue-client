import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MediQueue | Smart Tutor Matching",
    template: "%s | MediQueue", 
  },
  description: "Book trusted academic and professional tutors instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning >
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <Providers>
          <Navbar />
          <main className="grow w-full">{children}</main>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
