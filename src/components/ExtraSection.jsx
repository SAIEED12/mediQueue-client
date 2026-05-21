import React from 'react';
import { Search, CalendarDays, GraduationCap, Users, ShieldCheck, Star, CheckCircle } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

const ExtraSection = () => {
    const steps = [
        {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "1. Find Your Ideal Tutor",
            description: "Filter through verified top-tier educators by subject, location, teaching mode, or hourly budget seamlessly."
        },
        {
            icon: <CalendarDays className="w-6 h-6 text-white" />,
            title: "2. Check Availability",
            description: "Review comprehensive schedules, flexible time slots, and choose a timing matrix that fits your routine."
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-white" />,
            title: "3. Book Session",
            description: "Secure your slot with immediate booking and kickstart your academic journey either online or offline."
        }
    ];

    const stats = [
        { icon: <Users className="w-5 h-5 text-[#0070c9] dark:text-[#00b4d8]" />, value: "5,000+", label: "Active Students" },
        { icon: <ShieldCheck className="w-5 h-5 text-[#00b4d8]" />, value: "1,200+", label: "Verified Tutors" },
        { icon: <CheckCircle className="w-5 h-5 text-[#0070c9] dark:text-[#00b4d8]" />, value: "15,000+", label: "Sessions Completed" },
        { icon: <Star className="w-5 h-5 text-amber-500 fill-current" />, value: "4.9/5", label: "Average Rating" }
    ];

    return (
        <div className="space-y-24 py-16 bg-slate-50/50 dark:bg-slate-900/40">

            {/* PROCESS SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40 px-3 py-1 rounded-full">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        How MediQueue Works
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base">
                        Your academic success is just three simple steps away. Here is how we connect you with excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
                    {steps.map((step, idx) => (
                        <div 
                            key={idx} 
                            className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-slate-950/50 flex flex-col items-center text-center group"
                        >
                            <div className="p-4 bg-linear-to-tr from-[#0070c9] to-[#00b4d8] rounded-2xl shadow-lg shadow-blue-500/20 mb-6 transition-transform group-hover:scale-110 duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* STATS & CTA BANNER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-4xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                Join Bangladesh&apos;s Fastest Growing Learning Network
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                We bridge the gap between brilliant minds and eager learners from premier institutions nationwide.
                            </p>
                            <div className="pt-2">
                                <Link href="/tutors">
                                    <Button className="bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold text-sm rounded-full px-8 py-5 shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                        Find Your Tutor Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
                            {stats.map((stat, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-800/70"
                                Rim
                                >
                                    <div className="p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm mb-3">
                                        {stat.icon}
                                    </div>
                                    <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mt-0.5">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSection;