import React from 'react';
import { Merriweather } from "next/font/google";
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

const merriweather = Merriweather({
  subsets: ["latin"],
});

const MyBookedSessionsPage = async() => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booked-sessions/${session?.user?.id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const bookings = await res.json()
    console.log(bookings)
    return (
        <div>
            <h2 className={`${merriweather.className} text-3xl font-bold text-slate-900 mt-10 dark:text-white`}>My Booked Session</h2>
        </div>
    );
};

export default MyBookedSessionsPage;