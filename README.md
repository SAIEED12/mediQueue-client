MediQueue — Academic Tutor Booking Platform

🌐 Live Site: MediQueue Live Demo

About

MediQueue is a full-stack academic tutor booking platform designed to connect students with verified, subject-specific tutors across Bangladesh. Students can discover tutors, explore detailed profiles, check availability, and schedule personalized learning sessions — online or in person — through a seamless and user-friendly experience.

The platform focuses on simplifying tutor discovery and booking while providing efficient session management for both students and tutors.

Features

🔐 Secure Authentication & Authorization

Email/password authentication with real-time password validation:
Uppercase requirement
Lowercase requirement
Minimum 6-character validation
Google OAuth integration for quick sign-in
Authentication powered by Better Auth with JWT-based session management

🔍 Smart Tutor Search & Filtering

Search tutors by name or subject using case-insensitive matching
Filter tutors by session availability date range
Quickly find tutors that match learning needs and schedules

📅 Intelligent Session Booking System

Real-time session booking with automatic slot management
Prevents bookings when:
Session capacity is full
Session date has not yet become available
Automatically updates available slots after successful bookings

🧑‍🏫 Tutor Management Dashboard

Create and manage tutor profiles with:
Subject specialization
Availability schedule
Teaching mode
Session fees
Update tutor information through pre-filled edit modals
Delete profiles with confirmation prompts
Instant UI updates without page refresh

📋 Session Tracking & Cancellation

Dedicated dashboard for students to manage booked sessions
View complete booking history
Cancel sessions anytime
Automatically restores available tutor slots after cancellation

🌙 Dark / Light Theme Support

Smooth theme switching with persistent user preferences
Implemented using next-themes
Consistent experience across all pages

📱 Responsive User Experience

Fully optimized for mobile, tablet, and desktop devices
Sticky navigation bar
Mobile hamburger drawer
Responsive card-based layouts for better usability
Tech Stack
Frontend
Next.js 14+ (App Router)
Tailwind CSS
Shadcn/UI
HeroUI
Better Auth (Client)
Framer Motion
Swiper.js
React Hot Toast
Backend
Node.js
Express.js
MongoDB (Native Driver)
Better Auth (Server)
JWT authentication using jose-cjs
Deployment
Client: Vercel
Server: Render
Getting Started
Prerequisites
Node.js v18+
MongoDB Atlas account
Google OAuth credentials
Installation
# Clone repository
git clone https://github.com/your-username/mediqueue-client.git

# Move into project directory
cd mediqueue-client

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev

Open:

http://localhost:3000
Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8000

BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
