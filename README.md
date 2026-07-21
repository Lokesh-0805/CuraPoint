# 🏥 Curapoint

**Curapoint** is a comprehensive, full-stack Doctor Appointment Booking System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It streamlines the process of scheduling medical appointments, providing dedicated, unified portals for Patients, Doctors, and Administrators. 

## 🌐 Live Demo

*   **Patient Portal (Frontend):** [https://curapoint.vercel.app/](https://curapoint.vercel.app/)
*   **Admin/Doctor Dashboard:** [https://cura-point-admin.vercel.app/](https://cura-point-admin.vercel.app/)

*(Note: The Frontend, Admin Panel, and Backend API are all fully deployed and hosted on Vercel).*

## ✨ Key Features

Curapoint offers a seamless experience with three distinct user roles:

### 🧑‍⚕️ For Patients
*   **Browse & Filter:** Explore a directory of trusted doctors and filter them by specialty (e.g., General Physician, Dermatologist, etc.).
*   **Book Appointments:** View doctor availability and book time slots effortlessly.
*   **Online Payments:** Securely pay appointment fees online using **Razorpay** integration.
*   **Manage Profile:** Update personal information, address, and upload a profile picture.
*   **Manage Appointments:** View upcoming appointments or cancel them if needed.

### 🩺 For Doctors
*   **Dedicated Dashboard:** Track total appointments, active patients, and total earnings.
*   **Manage Schedule:** View upcoming bookings, mark appointments as completed, or cancel them.
*   **Profile Management:** Update consultation fees, availability status, address, and professional details.

### 🛡️ For Administrators
*   **Admin Dashboard:** Get a bird's-eye view of platform metrics (total doctors, appointments, patients, and recent bookings).
*   **Doctor Management:** Onboard new doctors by adding their credentials, specialties, fees, and profile images.
*   **System Oversight:** Monitor all appointments and manage doctor availability across the platform.

## 🛠️ Tech Stack

**Frontend (Patient App & Admin/Doctor Panel):**
*   React.js (Vite)
*   Tailwind CSS (Styling)
*   React Router DOM (Routing)
*   Context API (State Management)
*   Axios (API Calls)
*   React Toastify (Notifications)

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose (Database & ORM)
*   JSON Web Token (JWT) (Authentication)
*   Bcrypt (Password Hashing)
*   Cloudinary & Multer (Image Uploads & Storage)
*   Razorpay (Payment Gateway)

**Deployment:**
*   Vercel (Frontend, Admin, and Backend)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js installed on your machine
*   MongoDB Atlas account (or local MongoDB)
*   Cloudinary account (for image hosting)
*   Razorpay account (for the payment gateway)

### 1. Clone the repository
```bash
git clone [https://github.com/Lokesh-0805/CuraPoint](https://github.com/Lokesh-0805/CuraPoint)
cd curapoint