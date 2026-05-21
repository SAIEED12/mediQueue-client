"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const submissionData = Object.fromEntries(formData.entries());
        
        try {
            // Mocking API call submission
            await new Promise((resolve) => setTimeout(resolve, 1500)); 
            console.log("Contact Form Submitted:", submissionData);
            toast.success("Message sent successfully!");
            e.target.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const inputStyleClasses = "w-full bg-white dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700/80 focus:border-blue-600 dark:focus:border-blue-500 rounded-2xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm font-medium outline-none shadow-none transition-all duration-300";

    return (
        <div className="min-h-[85vh] flex flex-col transition-colors duration-300 w-full py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto w-full space-y-10">
                
                {/* HEADER SECTION */}
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight sm:text-5xl">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-base sm:text-lg">
                        Have questions about finding a tutor or managing your queue? Reach out, we are here to help.
                    </p>
                </div>

                {/* MAIN GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* LEFT PANEL: CONTACT INFO CARDS */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                        
                        {/* Info Block 1: Email */}
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xs transition-colors duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-2xl text-[#0070c9] dark:text-[#00b4d8] shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Email Support</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Our team responds within 24 hours.</p>
                                <a href="mailto:support@mediqueue.com" className="block text-sm font-black text-blue-600 dark:text-blue-400 hover:underline pt-1">
                                    support@mediqueue.com
                                </a>
                            </div>
                        </div>

                        {/* Info Block 2: Phone */}
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xs transition-colors duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-2xl text-[#0070c9] dark:text-[#00b4d8] shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Call Center</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Mon-Fri from 9:00 AM to 6:00 PM.</p>
                                <a href="tel:+1234567890" className="block text-sm font-black text-blue-600 dark:text-blue-400 hover:underline pt-1">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>

                        {/* Info Block 3: Location */}
                        <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xs transition-colors duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-2xl text-[#0070c9] dark:text-[#00b4d8] shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Headquarters</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Visit our primary operations office.</p>
                                <p className="text-sm font-black text-slate-700 dark:text-slate-300 pt-1">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-3 p-5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-3xl transition-colors duration-300">
                            <span className="relative flex h-2.5 w-2.5 ml-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">
                                All Systems Operational • Support Active
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PANEL: INTERACTIVE CONTACT FORM */}
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            
                            <div className="p-0 relative">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    
                                    {/* Name Input */}
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            placeholder="John Doe"
                                            type="text"
                                            name="name"
                                            className={`${inputStyleClasses} h-14 px-5`}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            required
                                            placeholder="john@example.com"
                                            type="email"
                                            name="email"
                                            className={`${inputStyleClasses} h-14 px-5`}
                                        />
                                    </div>

                                    {/* Subject Line Input with native icon tracking overlay */}
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                                            Subject
                                        </label>
                                        <div className="relative w-full">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                                            <input
                                                id="subject"
                                                required
                                                placeholder="How can we help you?"
                                                type="text"
                                                name="subject"
                                                className={`${inputStyleClasses} h-14 pl-12 pr-5`}
                                            />
                                        </div>
                                    </div>

                                    {/* Message Description Input using standard HTML Textarea */}
                                    <div className="space-y-2 flex flex-col">
                                        <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            placeholder="Type your message here in detail..."
                                            name="message"
                                            className={`${inputStyleClasses} min-h-[140px] p-4 resize-none`}
                                        />
                                    </div>

                                    {/* SUBMIT FORM BUTTON */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-14 text-lg font-black rounded-2xl shadow-xl bg-gradient-to-r from-[#0070c9] to-[#00b4d8] hover:opacity-95 text-white shadow-blue-500/10 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] group mt-2 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                                    >
                                        {isLoading ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message{" "}
                                                <Send className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}