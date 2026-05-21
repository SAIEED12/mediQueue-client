"use client";
import { useState, useEffect } from "react";
import { Menu, X, User, LogOut, GraduationCap, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const { theme, setTheme } = useTheme();

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
    { name: "Contact", href: "/contact" },
  ];

  if (session) {
    navLinks.push(
      { name: "Add Tutor", href: "/add-tutor" },
      { name: "My Tutors", href: "/my-tutors" },
      { name: "My Booked Sessions", href: "/my-booked-sessions" }
    );
  }

  const handleLogOut = async () => {
    setIsMenuOpen(false);
    await signOut();
    router.push("/");
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-2"
        : "bg-transparent py-4" 
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-[#0070c9] to-[#00b4d8] rounded-xl group-hover:rotate-12 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Medi
                <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                  Queue
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((navLink) => {
              const isActive = pathname === navLink.href;
              return (
                <Link
                  key={navLink.href}
                  href={navLink.href}
                  className={`font-medium text-sm transition-colors relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#0070c9] font-semibold dark:text-blue-400"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {navLink.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0070c9] to-[#00b4d8]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {  
              <Button
                isIconOnly
                variant="light"
                radius="full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </Button>
            }

            {!isPending && !session ? (
              <>
                <Link
                  href="/login"
                  className="font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold rounded-full p-4 shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full cursor-pointer transition-colors border border-transparent hover:border-slate-200">
                  <Image
                    width={40}
                    height={40}
                    src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold max-w-[120px] truncate dark:text-white">
                     {session?.user?.name}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Student</p>
                  </div>
                </button>
                <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-sm truncate dark:text-white">{session?.user?.name || "User"}</p>
                    <p className="text-xs truncate text-slate-500 dark:text-slate-400">
                      {session?.user?.email}
                    </p>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-3 transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            { 
              <Button
                isIconOnly
                variant="light"
                radius="full"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-slate-500 dark:text-slate-400"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </Button>
            }

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {navLinks.map((navLink) => {
            const isActive = pathname === navLink.href;
            return (
              <Link
                key={navLink.href}
                href={navLink.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-950/50 text-[#0070c9] dark:text-blue-400 font-bold"
                    : "text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {navLink.name}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
            {!session ? (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="bordered" className="rounded-xl w-full text-slate-900 dark:text-white border-slate-200 dark:border-slate-700">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="rounded-xl w-full bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <div className="px-4 py-2 flex items-center gap-3 mb-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <Image
                    width={32}
                    height={32}
                    src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="truncate">
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {session?.user?.name}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <LogOut className="w-5 h-5" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}