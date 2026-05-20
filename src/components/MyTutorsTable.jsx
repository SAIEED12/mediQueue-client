"use client";

import React, { useState } from "react";
import { UpdateTutor } from "./UpdateTutor";
import { DeleteTutor } from "./DeleteTutor";
import Image from "next/image";

export default function MyTutorsTable({ initialTutors, token }) {
  // Convert server props into a local interactive state loop
  const [tutors, setTutors] = useState(initialTutors || []);

  // Handler for dynamic UI changes immediately when a profile updates
  const handleUpdateSuccess = (id, updatedFields) => {
    setTutors((prev) =>
      prev.map((tutor) =>
        tutor._id === id ? { ...tutor, ...updatedFields } : tutor
      )
    );
  };

  // Handler for wiping a profile row out of view immediately on confirmation
  const handleDeleteSuccess = (id) => {
    setTutors((prev) => prev.filter((tutor) => tutor._id !== id));
  };

  // Friendly Empty State Layout
  if (tutors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-center mt-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          No Tutors Found
        </h3>
        <p className="text-slate-500 text-sm max-w-sm">
          You haven&apos;t added any tutor profiles yet. Head over to the &quot;Add Tutor&quot; tab to get listed!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="w-full overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-500 dark:text-slate-400">
              <th className="p-4">Tutor</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Hourly Fee</th>
              <th className="p-4">Teaching Mode</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {tutors.map((tutor) => (
              <tr
                key={tutor._id}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors text-slate-700 dark:text-slate-300"
              >
                {/* Profile Image & Meta Details */}
                <td className="p-4 flex items-center gap-3">
                  <Image
                    src={tutor.photo}
                    alt={tutor.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                  />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {tutor.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {tutor.institution}
                    </div>
                  </div>
                </td>

                {/* Subject / Category */}
                <td className="p-4 font-medium">{tutor.subject}</td>

                {/* Pricing Details */}
                <td className="p-4 font-semibold text-slate-900 dark:text-white">
                  ${tutor.hourlyFee}/hr
                </td>

                {/* Delivery Formats */}
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {tutor.teachingMode}
                  </span>
                </td>

                {/* Modularized Isolated Modal Operations */}
                <td className="p-4 text-right space-x-2 whitespace-nowrap">
                  <UpdateTutor
                    tutor={tutor}
                    token={token}
                    onSuccess={handleUpdateSuccess}
                  />
                  <DeleteTutor
                    tutorId={tutor._id}
                    tutorName={tutor.name}
                    token={token}
                    onSuccess={handleDeleteSuccess}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}