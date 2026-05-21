export const dynamic = "force-dynamic";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import BookedSessionsTable from "@/components/BookedSessionsTable";

export const metadata = {
  title: "My Booked Sessions",
  description: "Booked Sessions",
};

const MyBookedSessionsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Access Denied</h2>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booked-sessions/${session?.user?.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const bookings = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <div className="space-y-1.5 mt-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          My Booked{" "}
          <span className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] bg-clip-text text-transparent">
            Sessions
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm">
          Track your upcoming schedules, virtual classroom details, and
          appointment queues.
        </p>
      </div>
      <BookedSessionsTable initialBookings={bookings} token={token} />
    </div>
  );
};

export default MyBookedSessionsPage;
