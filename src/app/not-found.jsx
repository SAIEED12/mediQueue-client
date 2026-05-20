// app/not-found.jsx
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-[#0a0f1a]">

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg mb-6">
                <BookOpen className="w-8 h-8 text-white" />
            </div>

            {/* Label */}
            <p className="text-xs font-bold tracking-widest text-teal-500 uppercase mb-3">
                404 · Page Not Found
            </p>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white text-center mb-4">
                We can't find that page
            </h1>

            {/* Subtext */}
            <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm leading-relaxed mb-8">
                The page you're looking for took a study break. Let's get you back on track.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
                <Link
                    href="/"
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold text-sm hover:opacity-90 transition"
                >
                    Back home
                </Link>
                <Link
                    href="/tutors"
                    className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                    Browse tutors
                </Link>
            </div>
        </div>
    )
}