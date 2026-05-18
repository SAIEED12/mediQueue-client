
import { Chip, Button } from '@heroui/react';
import { Clock, Star, MapPin, Briefcase, GraduationCap, Calendar, AlertCircle, Users } from 'lucide-react';
import Image from 'next/image';
// import BookingModalClient from './BookingModalClient';

const fetchSingleTutor = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`)
        const data = await res.json()
        return data || {}
    

};

export default async function TutorDetails({ params }) {
    const {id} = await params;
    const tutor = await fetchSingleTutor(id);
    const { _id, name, photo, subject, availableDays, timeSlot, hourlyFee, institution, experience, location, teachingMode, rating, about} = tutor;



    // --- SYSTEM VALIDATION BARRIERS ---
    const currentDate = new Date(); // Internal clock system matches operational environment (2026)
    const sessionStartDate = new Date(tutor.sessionStartDate);
    
    const isBookingBlockedYet = currentDate < sessionStartDate;
    const isFullyBooked = tutor.totalSlot === 0;

    const featuredItems = [
        { icon: Briefcase, label: `${experience} Yrs Experience` },
        { icon: Star, label: `${rating.toFixed(1)} Rating`, customClass: "text-amber-500 fill-current" },
        { icon: MapPin, label: location },
        { icon: GraduationCap, label: teachingMode },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Left Frame: Core Media Header & Detail Parameters */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video bg-slate-100">
                        <Image
                            src={photo || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'}
                            alt={`${name}'s Profile Banner`}
                            fill
                            className="object-cover object-top transform transition duration-700 group-hover:scale-102"
                            priority
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white border-none"
                            >
                                Verified Tutor
                            </Chip>
                        </div>
                    </div>

                    {/* Subject, Name Headers */}
                    <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {subject}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {name}
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            {institution}
                        </p>
                    </div>

                    {/* Metadata Attribute Badges Grid Block */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {featuredItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 text-slate-900 font-bold hover:bg-white hover:shadow-md transition-all duration-300"
                            >
                                <item.icon className={`w-5 h-5 ${item.customClass || 'text-blue-600'}`} />
                                <span className="text-sm text-slate-700">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Biography Description */}
                    <div className="space-y-3 pt-4">
                        <h3 className="text-lg font-bold text-slate-900">About the Tutor</h3>
                        <p className="text-slate-600 leading-relaxed text-base">
                            {about}
                        </p>
                    </div>
                </div>

                {/* Right Frame: Floating Sticky Checkout Frame Column */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200/60 shadow-2xl space-y-8">
                        
                        {/* Rate / Hour Box */}
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Hourly Fee</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black text-blue-600">${hourlyFee}</span>
                                <span className="text-slate-400 font-bold text-sm">/ hour</span>
                            </div>
                        </div>

                        {/* Schedule & Target Threshold Constraints */}
                        <div className="space-y-4">
                            <div className="w-full h-px bg-slate-100" />
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-wider font-extrabold">Available Time</p>
                                        <p className="mt-0.5">{availableDays} ({timeSlot})</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                                    <Calendar className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-wider font-extrabold">Session Start Date</p>
                                        <p className="mt-0.5">{tutor.sessionStartDate}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                                    <Users className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-wider font-extrabold">Available Space</p>
                                        <p className="mt-0.5">{tutor.totalSlot} Slots Remaining</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="w-full h-px bg-slate-100" />
                        </div>

                        {/* --- BUSINESS VALIDATION FLOW ROUTER ENGINE --- */}
                        
                        {/* <div className="space-y-3">
                            {isFullyBooked ? (
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex gap-2.5 text-red-700 text-xs font-bold leading-normal">
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                    <div>
                                        <p>This session is fully booked. You can’t join at the moment.</p>
                                        <p className="text-red-400 font-medium mt-0.5">No available slots left.</p>
                                    </div>
                                </div>
                            ) : isBookingBlockedYet ? (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-2.5 text-amber-700 text-xs font-bold leading-normal">
                                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                    <div>
                                        <p>Booking is not available yet for this tutor.</p>
                                        <p className="text-amber-500 font-medium mt-0.5">Registration parameters activate starting {tutor.sessionStartDate}.</p>
                                    </div>
                                </div>
                            ) : (
                        
                                <BookingModalClient tutor={tutor} />
                            )}
                        </div> */}

                        <p className="text-center text-xs text-slate-400 font-bold">
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
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-2xl font-bold text-red-500">Tutor profile not found</h2>
            <p className="text-muted-foreground mt-2">Please verify route references or secure network validation parameters.</p>
        </div>
    );
};