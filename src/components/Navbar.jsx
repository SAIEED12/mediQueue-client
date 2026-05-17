"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // console.log(session);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-linear-to-tr from-[#0070c9] to-[#00b4d8] rounded-xl group-hover:rotate-12 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Medi
                <span className="bg-linear-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                  Queue
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((navLink) => {
              const isActive = pathname === navLink.href;
              return (
                <Link
                  key={navLink.href}
                  href={navLink.href}
                  className={`font-medium text-sm transition-colors relative py-1 ${
                    isActive
                      ? "text-[#0070c9] font-semibold"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {navLink.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#0070c9] to-[#00b4d8] " />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Login
            </Link>
            <Link href="/register">
              <Button className="bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold rounded-full p-4 shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Register
              </Button>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-3 p-1 rounded-full   cursor-pointer transition-colors border border-transparent hover:border-border">
                <Image
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                />
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold  max-w-50">Greetings, User!</p>
                  <p className="text-[10px] text-slate-500">Student</p>
                </div>
              </button>
              <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="font-bold text-sm">User</p>
                  <p className="text-xs truncate text-slate-500">
                    user@gmail.com
                  </p>
                </div>
                <button className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left cursor-pointer">
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Courses
          </Link>
          <Link
            href="/add-course"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Add Course
          </Link>
          <Link
            href="/dashboard"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Dashboard
          </Link>
          <div className="pt-4 border-t border-border mt-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/login">
                <Button href="/login" variant="bordered" className="rounded-xl">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button href="/register" className="rounded-xl bg-linear-to-r from-[#0070c9] to-[#00b4d8]">
                  Register
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Account
              </p>
              <button className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl">
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
