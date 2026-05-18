import TutorCard from "@/components/TutorCard";
import { fetchTutors } from "@/lib/tutors/data";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
});


const TutorsPage = async() => {
    const tutors = await fetchTutors()
    return (
        <div>
            <h2 className={`${merriweather.className} text-3xl font-bold text-slate-900 mt-10`}>
                All Tutors
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 cursor-pointer">
            {
                tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
        </div>
        </div>
    );
};

export default TutorsPage;