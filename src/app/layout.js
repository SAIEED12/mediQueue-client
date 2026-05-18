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
  title: "MediQueue",
  description: "Find the perfect tutor for every subject",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body
        className={`${inter.className} container mx-auto flex flex-col min-h-screen w-full  bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <Providers>
          <Navbar></Navbar>
          <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer></Footer>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
