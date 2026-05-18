import { fetchAvailableTutors } from "@/lib/tutors/data";
import AvailableCard from "./AvailableCard";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
});

const AvailableTutors = async () => {
  const tutors = await fetchAvailableTutors();
  return (
    <div className="mb-20">
      <h2
       className={`${merriweather.className} text-3xl font-black text-slate-900 dark:text-white my-10 tracking-tight text-center transition-colors duration-300`}
      >
        Available Tutors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tutors?.map((tutor) => (
          <AvailableCard key={tutor._id} tutor={tutor}></AvailableCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableTutors;
