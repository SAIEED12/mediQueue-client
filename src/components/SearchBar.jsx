
"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (search) {
      params.set("searchTerm", search)
    } else {
      params.delete("searchTerm")
    }
    router.push(`/tutors?${params.toString()}`)


  }

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden">

      <div className="pl-5 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for tutors by name or subject"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        onClick={handleSearch}
        className="h-10 px-6 mr-2 rounded-xl bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-semibold hover:scale-[1.02] active:scale-[0.98] transition-colors cursor-pointer"

      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;