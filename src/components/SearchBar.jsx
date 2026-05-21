"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@heroui/react";

export default function SearchBar({ currentSearch, currentStartDate, currentEndDate }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") || "";
    const start = formData.get("startDate") || "";
    const end = formData.get("endDate") || "";

    // Generate path properties seamlessly inside browser navigation memory
    const params = new URLSearchParams(searchParams.toString());
    
    if (search) params.set("searchTerm", search); else params.delete("searchTerm");
    if (start) params.set("startDate", start); else params.delete("startDate");
    if (end) params.set("endDate", end); else params.delete("endDate");

    router.push(`/tutors?${params.toString()}`);
  };

  const handleReset = () => {
    router.push("/tutors");
  };

  const inputStyles = "px-4 py-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500";

  return (
    <form onSubmit={handleFilterChange} className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col md:flex-row flex-wrap items-end gap-4">
      
      {/* Text Finder search hook input */}
      <div className="flex flex-col flex-1 min-w-[200px]">
        <label className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Search Tutors</label>
        <input type="text" name="search" defaultValue={currentSearch} placeholder="Search by name or subject..." className={inputStyles} />
      </div>

      {/* Range Filter: Minimum Boundary */}
      <div className="flex flex-col w-full md:w-auto">
        <label className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Available From</label>
        <input type="date" name="startDate" defaultValue={currentStartDate} className={inputStyles} />
      </div>

      {/* Range Filter: Maximum Boundary */}
      <div className="flex flex-col w-full md:w-auto">
        <label className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Available To</label>
        <input type="date" name="endDate" defaultValue={currentEndDate} className={inputStyles} />
      </div>

      {/* Interactive Trigger Button Row */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Button type="submit" color="primary" className="font-bold flex-1 md:flex-initial px-6">
          Search
        </Button>
        <Button type="button" variant="bordered" onClick={handleReset} className="font-bold flex-1 md:flex-initial">
          Reset
        </Button>
      </div>

    </form>
  );
}