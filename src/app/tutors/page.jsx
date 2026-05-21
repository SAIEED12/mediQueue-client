import SearchBar from "@/components/SearchBar";
import TutorCard from "@/components/TutorCard";
import { fetchTutors } from "@/lib/tutors/data";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
});

const TutorsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  
  const searchTerm = sParams?.searchTerm || "";
  const startDate = sParams?.startDate || "";
  const endDate = sParams?.endDate || "";

  const tutors = await fetchTutors(searchTerm, startDate, endDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchBar 
        currentSearch={searchTerm} 
        currentStartDate={startDate} 
        currentEndDate={endDate} 
      />
      
      <h2 className={`${merriweather.className} text-3xl font-bold text-slate-900 mt-10 dark:text-white`}>
        All Tutors
      </h2>

      {tutors.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          No tutors found matching your specified search and date criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorsPage;