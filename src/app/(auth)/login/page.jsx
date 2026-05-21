"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        ...loginData,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Login Failed!");
        setIsLoading(false);
        return;
      }

      toast.success("Login successful!");
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center p-4 py-12"
    >
      <div className="w-full max-w-md px-4">
        {/* CARD CONTAINER BACKDROP */}
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

          {/* BRANDING HEADER */}
          <div className="text-center space-y-2 relative">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Welcome{" "}
              <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                Back
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
              Continue your learning journey today
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* EMAIL FIELD */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  required
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                />
              </div>
            </div>
            {/* PASSWORD FIELD */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  required
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                />
              </div>
            </div>
            {/* FORGOT PASSWORD LINK */}
            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 transition-all"
              >
                Forgot password?
              </Link>
            </div>
            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full h-14 text-lg font-black rounded-2xl shadow-xl bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white shadow-blue-500/10 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] group"
            >
              Sign In{" "}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full h-12 font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-3 cursor-pointer"
            >
              <Image width={20} height={20} src="https://www.google.com/favicon.ico" alt="Google" />
              Sign up with Google
            </button>

          </form>

          {/* REGISTER REDIRECT FOOTER */}
          <div className="text-center pt-2">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              New to MediQueue?{" "}
              <Link
                href="/register"
                className="text-blue-600 dark:text-blue-400 font-black hover:underline underline-offset-4 transition-all"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
