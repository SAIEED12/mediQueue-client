import AvailableTutors from "@/components/AvailableTutors";
import { Banner } from "@/components/Banner";
import ExtraSection from "@/components/ExtraSection";

export default function Home() {
  return (
 <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <AvailableTutors />
        <ExtraSection />
      </div>
    </div>
  );
}
