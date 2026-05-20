"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

export function CancelAlert({ bookingId, token, onSuccess }) {
const router = useRouter();
const [isProcessing, setIsProcessing] = useState(false);
  const handleConfirmCancel = async () =>{
    setIsProcessing(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}/cancel`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })

    const data = await res.json();
    toast.success("Session cancelled successfully.");
    if (onSuccess) {
        onSuccess();
      }
    router.refresh();
    setIsProcessing(false);

  }

  return (
    <AlertDialog>
      <Button color="danger"variant="flat"size="sm"className="font-bold">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Go Back
              </Button>
              <Button isLoading={isProcessing} onClick={handleConfirmCancel} slot="close" variant="danger">
                Cancel Booking?
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}