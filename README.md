MediQueue — Academic Tutor Booking Platform
🌐 Live Site: https://mediqueue-omega.vercel.app

About
MediQueue is a full-stack academic tutor booking platform that connects students with verified, subject-specific tutors across Bangladesh. Students can browse tutor profiles, check availability, and book personalized learning sessions — online or in person — in just a few clicks.

Features

🔐 Secure Authentication — Email/password registration with real-time password validation (uppercase, lowercase, minimum 6 characters) and Google OAuth sign-in powered by Better Auth with JWT session management.
🔍 Smart Tutor Search & Filter — Search tutors by name or subject using case-insensitive regex matching. Filter by session availability date range to find tutors that fit your schedule.
📅 Intelligent Session Booking — Book sessions with automatic slot management. The system enforces booking rules: blocks bookings when slots are full or when the session start date hasn't arrived yet, and auto-decreases available slots after each successful booking.
🧑‍🏫 Tutor Management Dashboard — Logged-in users can add their own tutor profiles with full details (subject, availability, fee, teaching mode), update them via a pre-filled modal, or delete them with a confirmation prompt — all without page reloads.
📋 Booked Sessions Tracker — Students can view all their booked sessions in a dedicated dashboard and cancel bookings at any time. Cancelled bookings automatically restore the tutor's available slot count.
🌙 Dark / Light Theme — Full dark mode support across all pages with smooth transitions, powered by next-themes. The theme preference persists across sessions.
📱 Fully Responsive Design — Optimized for mobile, tablet, and desktop with a sticky navbar, mobile hamburger drawer, and adaptive card layouts built with Tailwind CSS and Shadcn/UI.


Tech Stack
Frontend

Next.js 14+ (App Router)
Tailwind CSS + Shadcn/UI + HeroUI
Better Auth (client)
Framer Motion
Swiper.js (hero carousel)
React Hot Toast

Backend

Node.js + Express.js
MongoDB (native driver)
Better Auth (server)
JWT via jose-cjs

Hosting

Client: Vercel
Server: Render


Getting Started
Prerequisites

Node.js 18+
MongoDB Atlas account
Google OAuth credentials (for social login)

Installation
bash# Clone the repository
git clone https://github.com/your-username/mediqueue-client.git
cd mediqueue-client

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your MONGODB_URI, BETTER_AUTH_SECRET, GOOGLE_CLIENT_ID, etc.

# Run the development server
npm run dev
Open http://localhost:3000 in your browser.
Environment Variables
envNEXT_PUBLIC_API_URL=http://localhost:8000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret