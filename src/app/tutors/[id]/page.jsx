const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import BookingModalClient from '@/components/BookingModalClient';
import { auth } from '@/lib/auth';
import { Chip } from '@heroui/react';
import { Clock, Star, MapPin, Briefcase, GraduationCap, Calendar, AlertCircle, Users } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';

const fetchSingleTutor = async (id, token) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
            headers: {
                authorization: `Bearer ${token}` || ''
            }
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error("Error fetching single tutor page data:", error);
        return null;
    }
};

export default async function TutorDetails({ params }) {
    const { id } = await params;
    const tokenData = await auth.api.getToken({
        headers: await headers()
    });
    const token = tokenData?.token;
    
    const tutor = await fetchSingleTutor(id, token);
    
    // Safety fallback layout if dynamic object returns empty or missing references
    if (!tutor || !tutor._id) {
        return <NotFound />;
    }

    const { 
        _id, name, photo, subject, availableDays, timeSlot, 
        hourlyFee, institution, experience, location, teachingMode, rating, about 
    } = tutor;

    const currentDate = new Date();
    const sessionStartDate = new Date(tutor.sessionStartDate);
    
    const isBookingBlockedYet = currentDate < sessionStartDate;
    const isFullyBooked = tutor.totalSlot === 0;

    const featuredItems = [
        { icon: Briefcase, label: `${experience} Yrs Experience` },
        { icon: Star, label: `${(rating || 0).toFixed(1)} Rating`, customClass: "text-amber-500 fill-current" },
        { icon: MapPin, label: location },
        { icon: GraduationCap, label: teachingMode },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* LEFT COLUMN: HERO INFOGRAPHIC CONTENT */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video bg-slate-100 dark:bg-slate-800">
                        <Image
                            src={photo || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'}
                            alt={`${name}'s Profile Banner`}
                            fill
                            className="object-cover object-top transform transition duration-700 group-hover:scale-102"
                            priority
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                variant="solid"
                                className="font-bold shadow-xl bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white border-none"
                            >
                                Verified Tutor
                            </Chip>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40 px-3 py-1 rounded-full">
                            {subject}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            {name}
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            {institution}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {featuredItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white shadow-xl dark:bg-slate-800/50 px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-800/60 text-slate-900 dark:text-white font-bold dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300"
                            >
                                <item.icon className={`w-5 h-5 shrink-0 ${item.customClass || 'text-blue-600 dark:text-blue-400'}`} />
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-semibold truncate">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3  border-slate-100 bg-white p-4 rounded-2xl shadow-xl hover:shadow-md transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-800/60 text-slate-900">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">About the Tutor</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-medium">
                            {about}
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200/60 dark:border-slate-800 shadow-2xl space-y-8">
                        
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Hourly Fee</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-blue-600 dark:text-blue-400">${hourlyFee}</span>
                                <span className="text-slate-400 dark:text-slate-500 font-bold text-sm">/ hour</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-extrabold">Available Time</p>
                                        <p className="mt-0.5 text-slate-800 dark:text-slate-200">{availableDays} ({timeSlot})</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-extrabold">Session Start Date</p>
                                        <p className="mt-0.5 text-slate-800 dark:text-slate-200">{tutor.sessionStartDate}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                                    <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-extrabold">Available Space</p>
                                        <p className="mt-0.5 text-slate-800 dark:text-slate-200">{tutor.totalSlot} Slots Remaining</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />
                        </div>

                        <div className="space-y-3">
                            {isFullyBooked ? (
                                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-2xl p-4 flex gap-2.5 text-red-700 dark:text-red-400 text-xs font-bold leading-normal">
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                    <div>
                                        <p>This session is fully booked. You can’t join at the moment.</p>
                                        <p className="text-red-400 dark:text-red-500/80 font-medium mt-0.5">No available slots left.</p>
                                    </div>
                                </div>
                            ) : isBookingBlockedYet ? (
                                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-4 flex gap-2.5 text-amber-700 dark:text-amber-400 text-xs font-bold leading-normal">
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                    <div>
                                        <p>Booking is not available yet for this tutor.</p>
                                        <p className="text-amber-500 dark:text-amber-500/80 font-medium mt-0.5">Registration parameters activate starting {tutor.sessionStartDate}.</p>
                                    </div>
                                </div>
                            ) : (
                                <BookingModalClient tutor={tutor} />
                            )}
                        </div>

                        <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-bold">
                            Verified Academic Credentials • Cancel Anytime
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-24 text-center min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-red-500">Tutor profile not found</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Please verify route references or secure network validation parameters.</p>
        </div>
    );
};