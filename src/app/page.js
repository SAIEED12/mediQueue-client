import AvailableTutors from "@/components/AvailableTutors";
import { Banner } from "@/components/Banner";
import ExtraSection from "@/components/ExtraSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Banner></Banner>
        <AvailableTutors></AvailableTutors>
        <ExtraSection></ExtraSection>
    </div>
  );
}
