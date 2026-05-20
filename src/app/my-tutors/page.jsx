export const dynamic = 'force-dynamic'; // Forces Next.js to always fetch fresh entries instead of rendering static pages

import React from 'react';
import { Merriweather } from "next/font/google";
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import MyTutorsTable from '@/components/MyTutorsTable';

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

const MyTutorsPage = async () => {
  // 1. Recover standard session context blocks and authorization headers
  const tokenData = await auth.api.getToken({
    headers: await headers()
  });
  const token = tokenData?.token;

  const session = await auth.api.getSession({
    headers: await headers()
  });

  // 2. Private Route Shield: Reject access if the user is unauthenticated
  if (!session?.user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
        <p className="text-slate-500 mt-2">Please log in to manage your listed tutor profiles.</p>
      </div>
    );
  }

  // 3. Fetch data specifically linked to the logged-in user's email address
  let tutorsData = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: "no-store" // Bypasses data retention pools to keep real-time data sync accurate
    });

    if (res.ok) {
      tutorsData = await res.json();
    }
  } catch (error) {
    console.error("Failed to load listed tutors data:", error);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="mt-10">
        <h2 className={`${merriweather.className} text-3xl font-bold text-slate-900 dark:text-white`}>
          My Listed Tutors
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Review, modify, or permanently remove your active platform classifications.
        </p>
      </div>
      
      {/* 4. Pass properties down to the newly generated stateful data table */}
      <MyTutorsTable initialTutors={tutorsData} token={token} />
    </div>
  );
};

export default MyTutorsPage;