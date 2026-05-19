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
  const router = useRouter();
  const handleBooking = async (e) => {
    e.preventDefault();
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.error("Booking Failed!");
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
      },
    );

    const data = await res.json();
    if (!data) {
      toast.error("Something went wrong");
      return;
    }
    router.push("/my-booked-sessions");
  };
  return (
    <Modal>
      <Button variant="secondary">Book Now</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEnvelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="dark:text-white">
                Confirm Booking Summary
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-slate-500 dark:text-slate-400">
                Review your details below to finalize your booking. We will send
                a confirmation and session access link to your registered email
                address once the reservation is processed.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  id="tutor-booking-form"
                  onSubmit={handleBooking}
                  className="flex flex-col gap-4"
                >
                  {/* Student Name (Auto-filled & Locked) */}
                  <TextField className="w-full" name="name" type="text">
                    <Label>Student Name</Label>
                    <Input
                      value={session?.user?.name || ""}
                      disabled
                      placeholder="Loading active profile..."
                    />
                  </TextField>

                  {/* Student Email (Auto-filled & Locked) */}
                  <TextField className="w-full" name="email" type="email">
                    <Label>Student Email</Label>
                    <Input
                      value={session?.user?.email || ""}
                      disabled
                      placeholder="Loading account email..."
                    />
                  </TextField>

                  {/* Phone Number (Controlled User Entry Input) */}
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone Number</Label>
                    <Input
                      placeholder="Enter your phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </TextField>

                  {/* Tutor Name (Auto-filled & Locked) */}
                  <TextField className="w-full" name="tutorName" type="text">
                    <Label>Tutor Name</Label>
                    <Input value={tutor?.name || ""} disabled />
                  </TextField>

                  {/* Tutor ID (Auto-filled & Locked) */}
                  <TextField className="w-full" name="tutorId" type="text">
                    <Label>Tutor ID</Label>
                    <Input value={tutor?._id || ""} disabled />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button
                form="tutor-booking-form"
                type="submit"
                className="bg-linear-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold"
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModalClient;
