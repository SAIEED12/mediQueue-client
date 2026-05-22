import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12">
          
          {/* BRAND BLOCK */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-[#0070c9] to-[#00b4d8] rounded-xl transition-transform group-hover:rotate-6">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Medi
                <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                  Queue
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Book trusted academic tutors across Bangladesh — fast, friendly, and fully transparent.
            </p>
          </div>

          {/* NAV LINKS BLOCK */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Learning Services</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li><Link href="/tutors" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors">Find Tutors</Link></li>
              <li><Link href="/about" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors">Contact</Link></li>
              <li><Link href="/add-tutor" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors">Become a Tutor</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO BLOCK */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                <a href="mailto:support@mediqueue.com" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors truncate">
                  support@mediqueue.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-[#0070c9] dark:hover:text-[#00b4d8] transition-colors">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-500 dark:text-slate-400 leading-snug">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA CONNECTIONS */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0070c9] dark:hover:text-[#00b4d8] hover:border-[#0070c9] dark:hover:border-[#00b4d8] transition-all duration-200">
                <span className="font-sans font-bold text-sm tracking-tighter">X</span>
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0070c9] dark:hover:text-[#00b4d8] hover:border-[#0070c9] dark:hover:border-[#00b4d8] transition-all duration-200" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0070c9] dark:hover:text-[#00b4d8] hover:border-[#0070c9] dark:hover:border-[#00b4d8] transition-all duration-200" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0070c9] dark:hover:text-[#00b4d8] hover:border-[#0070c9] dark:hover:border-[#00b4d8] transition-all duration-200" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BOUNDARY */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            © 2026 MediQueue. Crafted with care for curious students. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;