import SearchBar from "@/components/SearchBar";
import TutorCard from "@/components/TutorCard";
import { fetchTutors } from "@/lib/tutors/data";

export async function generateMetadata({ searchParams }) {
  const sParams = await searchParams;
  const searchTerm = sParams?.searchTerm || "";
  const startDate = sParams?.startDate || "";

  if (searchTerm) {
    return {
      title: `Search results for "${searchTerm}"`,
      description: `Browse all academic tutors matching "${searchTerm}" on MediQueue.`,
    };
  }

  if (startDate) {
    return {
      title: "Available Tutors by Date",
      description: "Find expert tutors available matching your calendar requirements.",
    };
  }

  return {
    title: "Browse All Tutors",
    description: "Explore qualified verified academic tutors and manage your schedules seamlessly.",
  };
}

const TutorsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  
  const searchTerm = sParams?.searchTerm || "";
  const startDate = sParams?.startDate || "";
  const endDate = sParams?.endDate || "";

  const tutors = await fetchTutors(searchTerm, startDate, endDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen transition-colors duration-300">
      <div className="relative space-y-8 mb-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-100/90 to-slate-50/40 dark:from-slate-900/60 dark:to-slate-950/20 p-8 md:p-10 border border-slate-200/60 dark:border-slate-800/50 shadow-xs transition-colors duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-500/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <h2 className={`text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none`}>
              Available{" "}
              <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
                Tutors
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base leading-relaxed">
              Find, filter, and schedule sessions with verified top academic coaches instantly.
            </p>
          </div>
        </div>

        <div className="relative z-10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md p-2 rounded-2xl md:rounded-[1.75rem] border border-slate-200/50 dark:border-slate-800/80 shadow-2xl shadow-slate-200/20 dark:shadow-none transition-colors duration-300">
          <SearchBar 
            currentSearch={searchTerm} 
            currentStartDate={startDate} 
            currentEndDate={endDate} 
          />
        </div>
      </div>
      {tutors.length === 0 ? (
        <div className="text-center py-24 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
          No tutors found matching your specified search and date criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default TutorsPage;