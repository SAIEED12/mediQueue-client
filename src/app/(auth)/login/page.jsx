"use client";
import { Button, Input } from "@heroui/react";
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

      toast.success("Login successfull!");
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50">
      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Welcome{" "}
                <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                  Back
                </span>
              </h2>
              <p className="text-slate-500 font-medium">
                Continue your learning journey today
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  required
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  startContent={<Mail className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-slate-700 ml-1"
                >
                  Password
                </label>
                <Input
                  id="password"
                  required
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  startContent={<Lock className="w-5 h-5 text-slate-400" />}
                  className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                />
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 transition-all"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white shadow-blue-500/10 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] group"
              >
                Sign In{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="space-y-4 pt-2">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
                      Or
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleGoogleLogin}
                  variant="bordered"
                  className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.google.com/favicon.ico"
                    className="w-5 h-5"
                    alt="Google"
                  />
                  Sign in with Google
                </Button>
              </div>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 font-medium">
                New to MediQueue?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
