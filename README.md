<<<<<<< HEAD
# Royalway Christian Centre Rebuild

A premium Next.js App Router scaffold for a modern church website, including a Stripe-powered Give page.

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env file
   ```bash
   cp .env.example .env.local
   ```
3. Add your Stripe secret key in `.env.local`
4. Run locally
   ```bash
   npm run dev
   ```

## Stripe flow

This scaffold uses a Next.js App Router Route Handler at `src/app/api/checkout/route.ts` to create Stripe Checkout Sessions. Next.js Route Handlers are the App Router mechanism for custom request handlers, and they live inside the `app` directory. citeturn273290search1turn273290search11

## Content basis

The content scaffold reflects the live Royalway site identity, including the tag line “Transforming Lives. Breaking Limits.”, ministry sections, pastor names, and published contact details from the current church website. citeturn273290search0
=======
# ✨ Royalway Christian Centre Platform

A modern, production-ready church platform built with Next.js, Tailwind CSS, and Stripe, designed to deliver a seamless digital experience for worship, community engagement, and secure giving.

---

## 🚀 Overview

Royalway Christian Centre is a fully responsive, multi-page web platform that enables churches to:

- Share sermons and teachings
- Promote events and ministries
- Engage visitors and members
- Accept secure online donations

Built with scalability and real-world deployment in mind.

---

## 🌐 Live Experience

-

---

## ⚙️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Payments:** Stripe Checkout API
- **UI Design:** Glassmorphism + modern gradient system
- **Language:** TypeScript

---

## ✨ Key Features

### 🏠 Multi-Page Architecture
- Home
- About
- Sermons
- Events
- Ministries
- Contact
- Give (Donation)

---

### 🎥 Sermons System
- Featured sermon layout
- Reusable sermon cards
- Optimized image rendering with `next/image`

---

### 📅 Events & Ministries
- Structured content display
- Scalable component-based layout
- Clean, responsive grid system

---

### 💳 Secure Giving (Stripe Integration)
- One-time and recurring donation options
- Category-based giving (Tithe, Offering, Missions, etc.)
- Stripe-hosted secure checkout

---

### 🎨 Modern UI/UX
- Glassmorphism design system
- Soft gradients and lighting effects
- Responsive across all devices
- Subtle motion and hover interactions

---

### ⚡ Performance Optimized
- Image optimization via Next.js
- Lazy loading
- SEO-ready metadata
- Clean component architecture

---

## 📁 Project Structure
# ✨ Royalway Christian Centre Platform

A modern, production-ready church platform built with Next.js, Tailwind CSS, and Stripe, designed to deliver a seamless digital experience for worship, community engagement, and secure giving.

---

## 🚀 Overview

Royalway Christian Centre is a fully responsive, multi-page web platform that enables churches to:

- Share sermons and teachings
- Promote events and ministries
- Engage visitors and members
- Accept secure online donations

Built with scalability and real-world deployment in mind.

---

## 🌐 Live Experience

> Add your deployed link here after Vercel deployment  
> e.g. https://royalway.vercel.app

---

## ⚙️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Payments:** Stripe Checkout API
- **UI Design:** Glassmorphism + modern gradient system
- **Language:** TypeScript

---

## ✨ Key Features

### 🏠 Multi-Page Architecture
- Home
- About
- Sermons
- Events
- Ministries
- Contact
- Give (Donation)

---

### 🎥 Sermons System
- Featured sermon layout
- Reusable sermon cards
- Optimized image rendering with `next/image`

---

### 📅 Events & Ministries
- Structured content display
- Scalable component-based layout
- Clean, responsive grid system

---

### 💳 Secure Giving (Stripe Integration)
- One-time and recurring donation options
- Category-based giving (Tithe, Offering, Missions, etc.)
- Stripe-hosted secure checkout

---

### 🎨 Modern UI/UX
- Glassmorphism design system
- Soft gradients and lighting effects
- Responsive across all devices
- Subtle motion and hover interactions

---

### ⚡ Performance Optimized
- Image optimization via Next.js
- Lazy loading
- SEO-ready metadata
- Clean component architecture

---

## 📁 Project Structure
royalway-full-project/
├── public/
│ ├── sermons/
│ ├── events/
│ ├── ministries/
│
├── src/
│ ├── app/
│ ├── components/
│ ├── data/
│
├── next.config.ts
├── package.json

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
>>>>>>> 58919f076c8d279d6c5a6930c29abf17cd8d33e0
