import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-[#0070c9] to-[#00b4d8] rounded-xl transition-transform group-hover:rotate-6">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Medi
                <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                  Queue
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Book trusted academic tutors across Bangladesh — fast, friendly, and fully transparent.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Learning Services</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li><Link href="/tutors" className="hover:text-[#0070c9] transition-colors">Find Tutors</Link></li>
              <li><Link href="/services/online-tutoring" className="hover:text-[#0070c9] transition-colors">Online Classes</Link></li>
              <li><Link href="/services/academic-coaching" className="hover:text-[#0070c9] transition-colors">Academic Coaching</Link></li>
              <li><Link href="/become-tutor" className="hover:text-[#0070c9] transition-colors">Become a Tutor</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:support@mediqueue.com" className="hover:text-[#0070c9] transition-colors truncate">
                  support@mediqueue.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+8801700000000" className="hover:text-[#0070c9] transition-colors">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-500 leading-snug">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all duration-200">
                <span className="font-sans font-bold text-sm tracking-tighter">X</span>
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all duration-200" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all duration-200" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all duration-200" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 MediQueue. Crafted with care for curious students. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;