"use client";

import React, { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function UpdateTutor({ tutor, token, onSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const formData = new FormData(e.currentTarget);
    const updatedFields = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutor._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFields),
      });

      if (!res.ok) throw new Error("Failed to update");

      toast.success("Tutor profile updated successfully!");
      
      if (onSuccess) {
        onSuccess(tutor._id, updatedFields);
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not complete the profile update.");
    } finally {
      setIsProcessing(false);
    }
  };

  const inputStyles = "w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white mb-3";
  const labelStyles = "block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider";

  return (
    <AlertDialog>
      <Button size="sm" color="primary" variant="flat" className="font-bold">
        Update
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-full md:max-w-[650px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading className="text-xl font-bold text-slate-900 dark:text-white">
                Modify Tutor Profile
              </AlertDialog.Heading>
            </AlertDialog.Header>
            
            <form onSubmit={handleUpdateSubmit}>
              <AlertDialog.Body className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <div>
                    <label className={labelStyles}>Tutor Name</label>
                    <input type="text" name="name" defaultValue={tutor?.name} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Photo URL</label>
                    <input type="url" name="photo" defaultValue={tutor?.photo} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Subject</label>
                    <select name="subject" defaultValue={tutor?.subject} required className={inputStyles}>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English">English</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Medical Admission">Medical Admission</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyles}>Teaching Mode</label>
                    <select name="teachingMode" defaultValue={tutor?.teachingMode} required className={inputStyles}>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyles}>Available Days</label>
                    <input type="text" name="availableDays" defaultValue={tutor?.availableDays} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Time Slot</label>
                    <input type="text" name="timeSlot" defaultValue={tutor?.timeSlot} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Hourly Fee ($)</label>
                    <input type="number" name="hourlyFee" defaultValue={tutor?.hourlyFee} min="0" step="0.01" required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Total Slots</label>
                    <input type="number" name="totalSlot" defaultValue={tutor?.totalSlot} min="1" required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Session Start Date</label>
                    <input type="date" name="sessionStartDate" defaultValue={tutor?.sessionStartDate} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Location</label>
                    <input type="text" name="location" defaultValue={tutor?.location} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Institution</label>
                    <input type="text" name="institution" defaultValue={tutor?.institution} required className={inputStyles} />
                  </div>
                  <div>
                    <label className={labelStyles}>Experience (Years)</label>
                    <input type="number" name="experience" defaultValue={tutor?.experience} min="0" required className={inputStyles} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelStyles}>About</label>
                    <textarea name="about" defaultValue={tutor?.about} rows="3" required className={`${inputStyles} resize-none`}></textarea>
                  </div>
                </div>
              </AlertDialog.Body>
              
              <AlertDialog.Footer className="mt-6 flex justify-end gap-2">
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button color="primary" type="submit" isLoading={isProcessing} slot="close">
                  Save Profile
                </Button>
              </AlertDialog.Footer>
            </form>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}