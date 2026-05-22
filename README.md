MediQueue — Academic Tutor Booking Platform
<img width="1902" height="990" alt="Home" src="https://github.com/user-attachments/assets/ea2ca8e4-b01b-4daf-9762-0c9d104bcef2" />
<img width="1896" height="956" alt="Tutors" src="https://github.com/user-attachments/assets/c271d8ea-ab3e-49de-8318-bfbd97055589" />
<img width="1913" height="896" alt="Available" src="https://github.com/user-attachments/assets/e751e408-959f-44ac-8e43-44a36d4b9b54" />
<img width="1917" height="955" alt="Booking" src="https://github.com/user-attachments/assets/4592ac63-f45d-4532-8858-3f14a249f0d9" />
<img width="1901" height="953" alt="BookedSession" src="https://github.com/user-attachments/assets/cc611148-680e-4b3e-8f5c-642de6e06307" />
<img width="1895" height="947" alt="AddTutor" src="https://github.com/user-attachments/assets/d8bad3c4-2012-4511-97ee-942c4ae4fec4" />
<img width="1903" height="959" alt="My Tutors" src="https://github.com/user-attachments/assets/481d2cec-5344-4e3a-943e-981b2a4d5eaa" />







🌐 Live Site: https://mediqueue-omega.vercel.app

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
