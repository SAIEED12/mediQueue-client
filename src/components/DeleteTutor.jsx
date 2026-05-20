"use client";

import React, { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteTutor({ tutorId, tutorName, token, onSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDeleteConfirm = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${tutorId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete");

      toast.success("Tutor profile permanently removed.");
      
      if (onSuccess) {
        onSuccess(tutorId);
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not delete this tutor listing.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AlertDialog>
      <Button size="sm" color="danger" variant="flat" className="font-bold">
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="flex items-center gap-3">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-xl font-bold text-slate-900 dark:text-white">
                Delete Profile?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="mt-3">
              <p className="text-sm text-slate-500">
                Are you sure you want to permanently remove the profile of <strong className="text-slate-800 dark:text-slate-200">{tutorName}</strong>? This action cannot be reverted.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="mt-6 flex justify-end gap-2">
              <Button slot="close" variant="tertiary">
                Go Back
              </Button>
              <Button 
                color="danger" 
                isLoading={isProcessing} 
                onClick={handleDeleteConfirm}
                slot="close"
              >
                Permanently Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}