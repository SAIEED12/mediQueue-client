import { Button, Card, Chip } from "@heroui/react";
import { Clock, Star, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutor }) => {
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
        rating, 
        about 
    } = tutor;

    return (
        <Card className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative overflow-hidden aspect-4/3 bg-slate-100 w-full">
                <Image
                    alt={`${name}'s Profile`}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    src={photo || "/placeholder-tutor.jpg"} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />

                <div className="absolute top-4 right-4 z-10">
                    <Chip
                        className="font-bold shadow-lg shadow-blue-600/20 bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white border-none"
                        variant="solid"
                    >
                        {teachingMode}
                    </Chip>
                </div>
            </div>
            <div className="p-8 flex flex-col grow space-y-4">

                <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {subject}
                    </span>
                    <h3 className="text-xl font-bold leading-tight line-clamp-1 text-slate-900">
                        {name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium line-clamp-1">
                        {institution}
                    </p>
                </div>

                {/* <div className="flex items-center justify-between text-xs font-bold border-y border-slate-100 py-2">
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-slate-900">{(rating || 0).toFixed(1)} Rating</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                        <Briefcase className="w-4 h-4" />
                        <span>{(experience || 0).toFixed()} Yrs Experience</span>
                    </div>
                </div> */}
                <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1 shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {location}
                    </span>
                </div>
                <div className="space-y-1.5 text-xs font-medium text-slate-500 bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2">
                        <span className="bg-white text-slate-700 px-2 py-0.5 rounded font-bold uppercase tracking-tight scale-90 origin-left">Days:</span>
                        <span className="truncate">{availableDays}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-white text-slate-700 px-2 py-0.5 rounded font-bold uppercase tracking-tight scale-90 origin-left">Time:</span>
                        <span className="truncate">{timeSlot}</span>
                    </div>
                </div>
                <div className="pt-4 mt-auto border-t border-slate-100 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-slate-900">${hourlyFee}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 -mt-1">per hour</span>
                    </div>

                    <Link href={`/tutors/${_id }`}>
                        <Button
                            variant="solid"
                            className="font-bold rounded-full px-6 transition-transform bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book Session
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default TutorCard;