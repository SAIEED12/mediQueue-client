export const dynamic = "force-dynamic";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import MyTutorsTable from "@/components/MyTutorsTable";

export const metadata = {
  title: "My Tutors ",
  description: "Tutors Added By Me",
};

const MyTutorsPage = async () => {
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenData?.token;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
        <p className="text-slate-500 mt-2">
          Please log in to manage your listed tutor profiles.
        </p>
      </div>
    );
  }
  let tutorsData = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (res.ok) {
      tutorsData = await res.json();
    }
  } catch (error) {
    console.error("Failed to load listed tutors data:", error);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="mt-10 mb-20">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          My Listed{" "}
          <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
            Tutors
          </span>
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Review, modify, or permanently remove your active platform
          classifications.
        </p>
      </div>

      <MyTutorsTable initialTutors={tutorsData} token={token} />
    </div>
  );
};

export default MyTutorsPage;
