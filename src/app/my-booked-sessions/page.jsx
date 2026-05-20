export const dynamic = 'force-dynamic';
import React from 'react';
import { Merriweather } from "next/font/google";
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import BookedSessionsTable from '@/components/BookedSessionsTable';

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

const MyBookedSessionsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
      </div>
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booked-sessions/${session?.user?.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store" 
  });

  const bookings = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <h2 className={`${merriweather.className} text-3xl font-bold text-slate-900 mt-10 dark:text-white`}>
        My Booked Sessions
      </h2>
      
      {/* Inject the Client Component here */}
      <BookedSessionsTable initialBookings={bookings} token={token} />
    </div>
  );
};

export default MyBookedSessionsPage;