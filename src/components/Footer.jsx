import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
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
            <h3 className="font-bold text-slate-900 text-sm mb-4">Explore</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li><Link href="/tutors" className="hover:text-[#0070c9] transition-colors">Find Tutors</Link></li>
              <li><Link href="/become-tutor" className="hover:text-[#0070c9] transition-colors">Become a Tutor</Link></li>
              <li><Link href="/bookings" className="hover:text-[#0070c9] transition-colors">Services</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Account</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-500">
              <li><Link href="/login" className="hover:text-[#0070c9] transition-colors">Login</Link></li>
              <li><Link href="/register" className="hover:text-[#0070c9] transition-colors">Register</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#0070c9] transition-colors">About</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Follow</h3>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all">
                <span className="font-sans font-bold text-sm tracking-tighter">X</span>
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-[#0070c9] hover:border-[#0070c9] transition-all" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 MediQueue. Crafted with care for curious students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;