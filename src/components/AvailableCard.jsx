"use client";

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
        location, 
        teachingMode, 
    } = tutor;

    return (
        <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-slate-950/50 cursor-pointer">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-50 dark:bg-slate-800 w-full">
                <Image 
                    src={photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600'}
                    alt={`${name}'s Profile`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute top-3 right-3 z-10">
                    <Chip
                        size="sm"
                        className="font-bold text-[10px] uppercase bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white border-none shadow-md shadow-blue-500/20"
                        variant="solid"
                    >
                        {teachingMode}
                    </Chip>
                </div>
            </div> 
            <div className="p-5 flex flex-col grow space-y-3">
                
                <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {subject}
                    </span>
                    <Link href={`/tutors/${_id}`}>
                        <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {name}
                        </h4>
                    </Link>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium truncate">
                        {institution}
                    </p>
                </div>
                
                <div className="space-y-1 text-[11px] font-medium text-slate-400 dark:text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                        <span className="truncate text-slate-500 dark:text-slate-400">{location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                        <span className="truncate text-slate-500 dark:text-slate-400 font-semibold">
                            {availableDays} <span className="text-slate-300 dark:text-slate-700 font-normal">|</span> {timeSlot}
                        </span>
                    </div>
                </div>
                
                <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                            Hourly Rate
                        </span>
                        <div className="text-right">
                            <span className="font-black text-lg text-slate-900 dark:text-white">${hourlyFee}</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">/hr</span>
                        </div>
                    </div>
                    
                    <Link href={`/tutors/${_id}`} className="w-full">
                        <Button 
                            className="w-full bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold text-xs rounded-xl py-5 shadow-md shadow-blue-500/10 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1.5"
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