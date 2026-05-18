import { Inter, Merriweather } from "next/font/google"
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ 
  subsets: ["latin"], 
})

const merriweather = Merriweather({
  subsets: ["latin"],
})

export const metadata = {
  title: "MediQueue",
  description: "Find the perfect tutor for every subject",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className={`${inter.className} container mx-auto min-h-full flex flex-col`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster />
        </body>
    </html>
  );
}
