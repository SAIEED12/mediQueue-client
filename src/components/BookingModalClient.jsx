"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiEnvelope } from "react-icons/bi";

const BookingModalClient = ({ tutor }) => {
  const { data: session } = useSession();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;
      if (!token) {
        toast.error("Booking Failed! Session token not found.");
        return;
      }
      
      const updatedData = {
        userId: session?.user?.id,
        studentName: session?.user?.name,
        studentEmail: session?.user?.email,
        phone: phone,
        tutorId: tutor?._id,
        tutorName: tutor?.name,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${tutor?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();
      if (!res.ok || !data) {
        throw new Error("Failed to reserve session");
      }

      toast.success("Session booked successfully!");
      router.push("/my-booked-sessions");
      router.refresh();
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const textFieldStyles = "w-full text-slate-900 dark:text-white";
  const labelStyles = "text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1";
  
  // Custom styled inputs that render cleanly in both light and dark mode contexts
  const inputStyles = "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <Modal>
      <Button 
        variant="solid"
        className="w-full bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold rounded-full py-6 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/20"
      >
        Book Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full sm:max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 transition-colors duration-300">
            <Modal.CloseTrigger className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" />
            
            <Modal.Header className="space-y-3">
              <Modal.Icon className="bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 p-2.5 rounded-xl w-fit">
                <BiEnvelope className="size-5" />
              </Modal.Icon>
              <div>
                <Modal.Heading className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  Confirm Booking Summary
                </Modal.Heading>
                <p className="mt-1.5 text-xs leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                  Review your details below to finalize your booking. We will send
                  a confirmation and session access link to your registered email
                  address once the reservation is processed.
                </p>
              </div>
            </Modal.Header>

            <Modal.Body className="mt-4">
              <Surface variant="default" className="bg-transparent border-none p-0 shadow-none">
                <form
                  id="tutor-booking-form"
                  onSubmit={handleBooking}
                  className="flex flex-col gap-4"
                >
                  <TextField className={textFieldStyles} name="name" type="text">
                    <Label className={labelStyles}>Student Name</Label>
                    <Input
                      className={inputStyles}
                      value={session?.user?.name || ""}
                      disabled
                      placeholder="Loading active profile..."
                    />
                  </TextField>

                  <TextField className={textFieldStyles} name="email" type="email">
                    <Label className={labelStyles}>Student Email</Label>
                    <Input
                      className={inputStyles}
                      value={session?.user?.email || ""}
                      disabled
                      placeholder="Loading account email..."
                    />
                  </TextField>
                  
                  <TextField className={textFieldStyles} name="phone" type="tel">
                    <Label className={labelStyles}>Phone Number</Label>
                    <Input
                      className={inputStyles}
                      placeholder="e.g., +880 17XX-XXXXXX"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </TextField>

                  <TextField className={textFieldStyles} name="tutorName" type="text">
                    <Label className={labelStyles}>Tutor Name</Label>
                    <Input className={inputStyles} value={tutor?.name || ""} disabled />
                  </TextField>

                  <TextField className={textFieldStyles} name="tutorId" type="text">
                    <Label className={labelStyles}>Tutor ID</Label>
                    <Input className={inputStyles} value={tutor?._id || ""} disabled />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer className="mt-6 flex justify-end gap-2.5">
              <Button 
                slot="close" 
                variant="bordered"
                className="font-bold border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl"
              >
                Cancel
              </Button>
              <Button
                form="tutor-booking-form"
                type="submit"
                isLoading={isSubmitting}
                className="bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold rounded-xl px-6"
              >
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModalClient;