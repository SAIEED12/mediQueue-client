import { Chip, Button } from "@heroui/react";
import { Clock, Star, MapPin, Briefcase, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AvailableCard = ({ tutor }) => {
    const { 
        _id, 
        name, 
        photo, 
        subject, 
        availableDays, 
        timeSlot, 
        hourlyFee, 
        institution, 
        experience, 
        location, 
        teachingMode, 
        rating 
    } = tutor;

    const detailUrl = `/tutors/${_id || ''}`;

    return (
        <div
            className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        >
            {/* Top Portrait Image & Badge Container */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-50 w-full">
                <Image 
                    src={photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600'}
                    alt={`${name}'s Profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Teaching Mode */}
                <div className="absolute top-3 right-3 z-10">
                    <Chip
                        size="sm"
                        className="font-bold text-[10px] uppercase bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white border-none shadow-md shadow-blue-500/20"
                        variant="solid"
                    >
                        {teachingMode}
                    </Chip>
                </div>
            </div>

            {/* Details */}
            <div className="p-5 flex flex-col grow space-y-3">
                
                <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {subject}
                    </span>
                    <Link href={detailUrl}>
                        <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {name}
                        </h4>
                    </Link>
                    <p className="text-xs text-slate-400 font-medium truncate">
                        {institution}
                    </p>
                </div>

                {/* Location, Day Slots & Micro Timing Details */}
                <div className="space-y-1 text-[11px] font-medium text-slate-400 pt-1">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                        <span className="truncate">{location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                        <span className="truncate text-slate-500 font-semibold">
                            {availableDays} <span className="text-slate-300 font-normal">|</span> {timeSlot}
                        </span>
                    </div>
                </div>

                {/* Card Footer: Pricing Metrics & Book Session CTA Button */}
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            Hourly Rate
                        </span>
                        <div className="text-right">
                            <span className="font-black text-lg text-slate-900">${hourlyFee}</span>
                            <span className="text-[10px] text-slate-400 font-medium">/hr</span>
                        </div>
                    </div>

                    {/* Book Session CTA */}
                    <Link href={detailUrl} className="w-full">
                        <Button 
                            className="w-full bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold text-xs rounded-xl py-5 shadow-md shadow-blue-500/10 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1.5"
                        >
                            <CalendarCheck className="w-3.5 h-3.5" />
                            Book Session
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AvailableCard;