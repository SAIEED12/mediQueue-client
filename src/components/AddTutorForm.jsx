"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddTutorForm({ token, userEmail, userName }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    tutorData.hourlyFee = parseFloat(tutorData.hourlyFee);
    tutorData.totalSlot = parseInt(tutorData.totalSlot);
    tutorData.experience = parseInt(tutorData.experience) || 0;

    tutorData.creatorEmail = userEmail;
    tutorData.creatorName = userName;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tutorData),
      });

      if (!res.ok) {
        throw new Error("Failed to add tutor");
      }

      toast.success("Tutor profile created successfully!");
      e.target.reset();
      router.push("/my-tutors");
      router.refresh();
    } catch (error) {
      console.error("Error adding tutor:", error);
      toast.error("Failed to add tutor. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all";
  const labelStyles =
    "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2";

  return (
    <div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
          {/* Tutor Name */}
          <div>
            <label className={labelStyles}>Tutor Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Dr. Sarah Ahmed"
              className={inputStyles}
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className={labelStyles}>Photo URL (imgbb/postimage)</label>
            <input
              type="url"
              name="photo"
              required
              placeholder="https://i.ibb.co/..."
              className={inputStyles}
            />
          </div>

          {/* Subject */}
          <div>
            <label className={labelStyles}>Subject / Category</label>
            <select name="subject" required className={inputStyles}>
              <option value="" disabled selected>
                Select a subject
              </option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="English">English</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Medical Admission">Medical Admission</option>
            </select>
          </div>

          {/* Teaching Mode */}
          <div>
            <label className={labelStyles}>Teaching Mode</label>
            <select name="teachingMode" required className={inputStyles}>
              <option value="" disabled selected>
                Select mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* Available Days */}
          <div>
            <label className={labelStyles}>Available Days</label>
            <input
              type="text"
              name="availableDays"
              required
              placeholder="e.g. Sun–Thu"
              className={inputStyles}
            />
          </div>

          {/* Time Slot */}
          <div>
            <label className={labelStyles}>Time Slot</label>
            <input
              type="text"
              name="timeSlot"
              required
              placeholder="e.g. 5:00 PM – 8:00 PM"
              className={inputStyles}
            />
          </div>

          {/* Hourly Fee */}
          <div>
            <label className={labelStyles}>Hourly Fee ($)</label>
            <input
              type="number"
              name="hourlyFee"
              min="0"
              step="0.01"
              required
              placeholder="e.g. 25"
              className={inputStyles}
            />
          </div>

          {/* Total Slot */}
          <div>
            <label className={labelStyles}>Total Slots Available</label>
            <input
              type="number"
              name="totalSlot"
              min="1"
              required
              placeholder="e.g. 5"
              className={inputStyles}
            />
          </div>

          {/* Session Start Date */}
          <div>
            <label className={labelStyles}>Session Start Date</label>
            <input
              type="date"
              name="sessionStartDate"
              required
              className={inputStyles}
            />
          </div>

          {/* Location */}
          <div>
            <label className={labelStyles}>Location (Area/City)</label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Dhanmondi, Dhaka"
              className={inputStyles}
            />
          </div>

          {/* Institution */}
          <div>
            <label className={labelStyles}>Institution</label>
            <input
              type="text"
              name="institution"
              required
              placeholder="e.g. University of Dhaka"
              className={inputStyles}
            />
          </div>

          {/* Experience */}
          <div>
            <label className={labelStyles}>Years of Experience</label>
            <input
              type="number"
              name="experience"
              min="0"
              required
              placeholder="e.g. 5"
              className={inputStyles}
            />
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label className={labelStyles}>About</label>
            <textarea
              name="about"
              required
              rows="3"
              placeholder="e.g. Passionate tutor with 5 years of experience helping SSC and HSC students..."
              className={`${inputStyles} resize-none`}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <Button
            type="submit"
            color="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full md:w-auto font-bold px-8"
          >
            {isSubmitting ? "Creating Profile..." : "Create Tutor Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
}
