"use client";

import React, { useState } from "react";
import { CancelAlert } from "./CancelAlert"; 

export default function BookedSessionsTable({ initialBookings, token }) {
  const [bookings, setBookings] = useState(initialBookings || []);


  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-center mt-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No booked sessions</h3>
        <p className="text-slate-500 dark:text-slate-400">
          You haven&apos;t booked any sessions yet. Explore our tutors to get started!
        </p>
      </div>
    );
  }

  const handleUpdateStatus = (cancelledBookingId) => {
    setBookings(prevBookings => 
      prevBookings.map(booking => 
        booking._id === cancelledBookingId 
          ? { ...booking, status: "cancelled" } 
          : booking
      )
    );
  };

  return (
    <div className="mt-8">
      <div className="w-full overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-500 dark:text-slate-400">
              <th className="p-4 whitespace-nowrap">Tutor Name</th>
              <th className="p-4 whitespace-nowrap">Student Name</th>
              <th className="p-4 whitespace-nowrap">Email</th>
              <th className="p-4 whitespace-nowrap">Status</th>
              <th className="p-4 whitespace-nowrap text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {bookings.map((booking) => {
              
              const isCancelled = booking.status?.toLowerCase() === 'cancelled';

              return (
                <tr key={booking._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{booking.tutorName}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{booking.studentName}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{booking.studentEmail}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isCancelled 
                        ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                    }`}>
                      {isCancelled ? 'Cancelled' : (booking.status || 'Booked')}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {!isCancelled ? (
                      <CancelAlert 
                        bookingId={booking._id} 
                        token={token} 
                        onSuccess={() => handleUpdateStatus(booking._id)} 
                      />
                    ) : (
                      <span className="text-slate-400 text-sm font-medium pr-2">N/A</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}