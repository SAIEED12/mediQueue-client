// app/about/page.jsx
import { BookOpen, Users, Star, Globe, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | TutorFlow",
  description: "Learn more about TutorFlow and our mission",
}

export default function About() {
  const stats = [
    { number: "5,000+", label: "Students Enrolled" },
    { number: "300+", label: "Verified Tutors" },
    { number: "12", label: "Subjects Covered" },
    { number: "4.9★", label: "Average Rating" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make quality education accessible to every student in Bangladesh by connecting them with the best tutors across all subjects.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe every student deserves personalized attention. We prioritize trust, quality, and meaningful learning outcomes above everything.",
    },
    {
      icon: Globe,
      title: "Our Reach",
      description:
        "From Dhaka to Chittagong, Sylhet to Rajshahi — TutorFlow connects students and tutors across every major city in Bangladesh.",
    },
  ]

  const team = [
    {
      name: "Arafat Hossain",
      role: "Founder & CEO",
      institution: "BUET",
      initials: "AH",
      color: "from-blue-500 to-teal-400",
    },
    {
      name: "Nadia Islam",
      role: "Head of Tutors",
      institution: "University of Dhaka",
      initials: "NI",
      color: "from-teal-400 to-green-400",
    },
    {
      name: "Rakib Mahmud",
      role: "Lead Developer",
      institution: "SUST",
      initials: "RM",
      color: "from-blue-600 to-blue-400",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          <BookOpen className="w-4 h-4" />
          About TutorFlow
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
          Empowering Students,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-teal-400">
            One Session at a Time
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          TutorFlow was built to solve a simple problem — finding a great tutor
          shouldn&apos;t be hard. We connect students with verified, passionate
          educators across Bangladesh.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              {stat.number}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {values.map((value, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center mb-4">
              <value.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {value.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
            Our Story
          </h2>
          <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            <p>
              TutorFlow started in 2024 when a group of university students
              realized how difficult it was to find reliable, subject-specific
              tutors outside of personal networks. Students were relying on
              word-of-mouth, Facebook groups, and unreliable classifieds.
            </p>
            <p>
              We built TutorFlow to fix that. A platform where students can
              browse verified tutors, see their qualifications, availability,
              and fees — and book a session in minutes. No middlemen, no
              guesswork.
            </p>
            <p>
              Today we support thousands of students preparing for JSC, SSC,
              HSC, and university admission exams across Bangladesh.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
{/* CTA */}
<div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
  
  {/* Left — Text */}
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shrink-0">
      <BookOpen className="w-6 h-6 text-white" />
    </div>
    <div>
      <h2 className="text-2xl font-black text-slate-900 dark:text-white">
        Ready to find your tutor?
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
        Join thousands of students already learning with TutorFlow.
      </p>
    </div>
  </div>

  {/* Right — Buttons */}
  <div className="flex gap-3 shrink-0">
    <Link
      href="/tutors"
      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold text-sm hover:opacity-90 transition shadow-lg shadow-blue-500/20"
    >
      Browse Tutors
    </Link>
    <Link
      href="/register"
      className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"
    >
      Register Free
    </Link>
  </div>

</div>

    </div>
  )
}