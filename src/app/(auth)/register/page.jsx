"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, User, Image as ImageIcon, CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

// ✅ Outside the component
const ValidationItem = ({ passed, label }) => (
  <div className="flex items-center gap-2">
    {passed ? (
      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
    ) : (
      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
    )}
    <span className={`text-xs font-medium ${passed ? "text-green-600 dark:text-green-400" : "text-red-400"}`}>
      {label}
    </span>
  </div>
)

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validations = {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasMinLength: password.length >= 6,
  };

  const isPasswordValid = Object.values(validations).every(Boolean);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      setPasswordTouched(true);
      toast.error("Please fix the password errors before submitting.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signUp.email({
        ...registerData,
      });

      if (error) {
        toast.error(error.message || "Registration Failed!");
        setIsLoading(false);
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const inputClass =
    "w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300";

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">

          {/* Blob */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />

          {/* Heading */}
          <div className="text-center space-y-2 relative">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Create{" "}
              <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                Account
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
              Join MediQueue to book trusted academic tutors
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="name"
                  required
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  required
                  placeholder="abc@example.com"
                  type="email"
                  name="email"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                Photo URL
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="image"
                  required
                  placeholder="https://example.com/photo.jpg"
                  type="url"
                  name="image"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordTouched(true)
                  }}
                  className={`${inputClass} ${
                    passwordTouched && !isPasswordValid
                      ? "border-red-400 dark:border-red-500 focus:border-red-400"
                      : passwordTouched && isPasswordValid
                      ? "border-green-400 dark:border-green-500 focus:border-green-400"
                      : ""
                  }`}
                />
              </div>

              {/* Validation checklist */}
              {passwordTouched && (
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 space-y-1.5 border border-slate-200 dark:border-slate-700">
                  <ValidationItem passed={validations.hasMinLength} label="At least 6 characters" />
                  <ValidationItem passed={validations.hasUppercase} label="At least one uppercase letter (A–Z)" />
                  <ValidationItem passed={validations.hasLowercase} label="At least one lowercase letter (a–z)" />
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium px-1">
              By registering, you agree to our Terms of Service and Privacy Policy guidelines.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg font-black rounded-2xl bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white shadow-lg shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Register <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center mb-6">
                <span className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="mt-10 w-full h-12 font-bold rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-3 cursor-pointer"
            >
              <Image width={20} height={20} src="https://www.google.com/favicon.ico" alt="Google" />
              Sign up with Google
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 dark:text-blue-400 font-black hover:underline underline-offset-4 transition-all"
              >
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}