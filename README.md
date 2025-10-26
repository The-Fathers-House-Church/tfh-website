# TFH Website - Public Church Website

![Next.js](https://img.shields.io/badge/Next.js-13.3+-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3+-38B2AC) ![React](https://img.shields.io/badge/React-18.2+-61DAFB)

The official public website for The Father's House Church, built with Next.js. This modern, responsive web application serves as the primary digital presence for the church, providing spiritual content, event information, and community engagement features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Deployment](#deployment)
- [Design System](#design-system)

## 🎯 Overview

The TFH Website serves as the digital front door for The Father's House Church, providing:

- **Daily Devotionals**: "The Father's Menu" with comprehensive spiritual content
- **Event Management**: Church events, registration, and announcements
- **Community Features**: Testimonies, feedback, and member engagement
- **Media Integration**: YouTube videos, livestreams, and sermon content
- **Church Information**: About pages, locations, contact details
- **Mobile-First Design**: Responsive design optimized for all devices
- **SEO Optimized**: Proper meta tags and structured data

**Live Website**: https://tfh-website.netlify.app/

## ✨ Features

### 🏠 Homepage

- **Hero Section**: Church introduction with image gallery
- **Welcome Message**: Personal message from Senior Pastors
- **Quick Links**: Easy navigation to key sections
- **Today's Devotional**: Featured daily spiritual content
- **Worship Experience**: YouTube integration for sermons
- **Upcoming Events**: Featured church events
- **Announcements**: Important church updates
- **Mobile App Download**: Links to mobile application

### 🙏 Spiritual Content

- **Daily Devotionals ("The Father's Menu")**
  - Complete devotional with title, scripture, and content
  - Bible reading plans (1-year and 2-year)
  - Confession and further reading suggestions
  - Date-based navigation and search
- **Testimonies**
  - User testimony submission form
  - Browse approved testimonies
  - Category filtering and search

### 📅 Events & Announcements

- **Event Listings**: Complete event information
- **Event Registration**: Custom registration forms
- **Event Details**: Gallery, descriptions, and requirements
- **Announcements**: Priority-based church announcements

### 👥 Community & Interaction

- **User Authentication**: Registration and login system
- **Member Profiles**: Personal information management
- **Feedback System**: Contact forms and suggestions
- **Church Locations**: Find nearby church branches

### 📱 Media & Resources

- **Livestream Integration**: Direct access to church services
- **YouTube Channel**: Latest sermons and messages
- **Podcast Links**: Access to church podcasts
- **Resource Downloads**: Church materials and guides

## 🛠️ Technology Stack

### Core Framework

- **Next.js 13.3**: React framework with App Router
- **React 18.2**: Modern React with hooks and concurrent features
- **TypeScript 5.0**: Type-safe development

### Styling & UI

- **Tailwind CSS 3.3**: Utility-first CSS framework
- **Custom Design System**: Consistent colors, fonts, and spacing
- **Responsive Design**: Mobile-first approach
- **Auto-animate**: Smooth transitions and animations

### State Management & Forms

- **Redux Toolkit**: Predictable state management
- **Formik**: Form handling and validation
- **Yup**: Schema-based form validation
- **React Modal**: Modal dialogs and overlays

### API & Data

- **Axios**: HTTP client for API requests
- **Crypto-js**: Data encryption and security
- **Next.js API Routes**: Server-side API endpoints

### Development & Build

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
tfh-website/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── aboutPage/          # About page components
│   │   ├── auth/               # Authentication components
│   │   ├── contactPage/        # Contact page components
│   │   ├── devotional/         # Devotional components
│   │   ├── eventPage/          # Event page components
│   │   ├── feedbackPage/       # Feedback components
│   │   ├── givingPage/         # Giving/donation components
│   │   ├── homepage/           # Homepage sections
│   │   ├── layout/             # Layout components
│   │   ├── locations/          # Church locations
│   │   ├── messagesPage/       # Messages/sermons
│   │   ├── podcastPage/        # Podcast components
│   │   ├── resourcesPage/      # Resources section
│   │   └── testimony/          # Testimony components
│   ├── pages/                  # Next.js pages (App Router)
│   │   ├── auth/               # Authentication pages
│   │   ├── devotional/         # Devotional pages
│   │   ├── events/             # Event pages
│   │   ├── resources/          # Resource pages
│   │   ├── testimony/          # Testimony pages
│   │   ├── index.tsx           # Homepage
│   │   ├── about.tsx           # About page
│   │   ├── contact.tsx         # Contact page
│   │   ├── giving.tsx          # Giving page
│   │   └── _app.tsx            # App configuration
│   ├── store/                  # Redux store configuration
│   │   ├── slices/             # Redux slices
│   │   ├── hooks.ts            # Typed hooks
│   │   └── store.ts            # Store configuration
│   ├── types/                  # TypeScript definitions
│   ├── assets/                 # Images and static assets
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 📄 Pages & Components

### Core Pages

- **Homepage (`/`)**: Main landing page with all key sections
- **About (`/about`)**: Church history, vision, and leadership
- **Devotional (`/devotional`)**: Daily devotionals and archive
- **Events (`/events`)**: Church events and registration
- **Contact (`/contact`)**: Contact information and locations
- **Resources (`/resources`)**: Church resources and media
- **Giving (`/giving`)**: Donation information and methods
- **Testimony (`/testimony`)**: Share and read testimonies

### Authentication Pages

- **Login (`/auth/login`)**: User authentication
- **Register (`/auth/register`)**: New user registration
- **Forgot Password (`/auth/forgot-password`)**: Password recovery
- **Reset Password (`/auth/reset-password`)**: Password reset

### Key Components

#### Layout Components

- **AppLayout**: Main application wrapper
- **Navbar**: Navigation with responsive menu
- **Footer**: Site footer with links and contact info
- **MobileDownloadBar**: Mobile app promotion banner

#### Homepage Sections

- **HeroSection**: Main banner with image gallery
- **WelcomeSection**: Pastoral welcome message
- **DevotionalSection**: Featured daily devotional
- **EventSection**: Upcoming events showcase
- **AnnouncementSection**: Important updates

#### Content Components

- **DevotionalList**: Devotional archive with pagination
- **EventList**: Event listings with filtering
- **TestimonyList**: Testimony showcase
- **FeedbackForm**: Contact and feedback form

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- TFH Backend API running (for data)

### Installation Steps

1. **Install Dependencies**

```bash
npm install
# or
yarn install
```

2. **Environment Configuration**

```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

3. **Start Development Server**

```bash
npm run dev
# or
yarn dev
```

4. **Build for Production**

```bash
npm run build
# or
yarn build
```

5. **Start Production Server**

```bash
npm run start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v2
NEXT_PUBLIC_API_KEY=TFH_ADMIN

# YouTube Integration
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_YOUTUBE_UPLOAD_KEY=your_upload_playlist_id
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_channel_id

# Session Configuration
NEXT_PUBLIC_SESSION_NAME=TFH Web
NEXT_PUBLIC_SESSION_KEY=TFH_WEB_USER

# External Services
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 👨‍💻 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

### Development Guidelines

#### Code Structure

- Use TypeScript for all components
- Follow React best practices and hooks
- Implement responsive design with Tailwind CSS
- Use Redux Toolkit for state management
- Maintain consistent component structure

#### Component Guidelines

```typescript
// Example component structure
import React from 'react';

interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ title, children }) => {
  return (
    <div className='component-wrapper'>
      <h2 className='text-primary font-secondary'>{title}</h2>
      {children}
    </div>
  );
};

export default Component;
```

#### State Management

```typescript
// Redux slice example
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userData: any;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
  },
});
```

### API Integration

The website integrates with the TFH Backend API for:

- User authentication and management
- Devotional content retrieval
- Event information and registration
- Testimony submission and display
- Feedback and contact forms

```typescript
// API service example
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const getDevotionals = async (page = 1) => {
  const response = await api.get(`/devotional?page=${page}`);
  return response.data;
};
```

## 🌐 Deployment

### Netlify Deployment (Current)

The website is currently deployed on Netlify with automatic deployments from the main branch.

**Build Settings**:

```bash
# Build command
npm run build

# Publish directory
out
```

**Environment Variables** (set in Netlify dashboard):

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_API_KEY`
- `NEXT_PUBLIC_YOUTUBE_API_KEY`
- All other environment variables

### Alternative Deployment Options

#### Vercel

```bash
npm i -g vercel
vercel
```

#### Custom Server

```bash
npm run build
npm run start
```

## 🎨 Design System

### Colors

```css
/* Primary Colors */
--color-primary: #002f72; /* Deep Blue */
--color-secondary: #ff6634; /* Orange */

/* Status Colors */
--color-success: #08a05c; /* Green */
--color-error: #f13637; /* Red */
--color-warning: #ffc107; /* Yellow */

/* Neutral Colors */
--color-light-grey: #a9a9a9; /* Light Grey */
```

### Typography

```css
/* Font Families */
--font-primary: 'DM Sans', sans-serif;
--font-secondary: 'Sora', sans-serif;
--font-cursive: 'Kaushan Script', cursive;
```

### Spacing

```css
/* Primary Padding */
--padding-primary: 6vw; /* Responsive horizontal padding */
```

### Component Classes

```css
/* Button Styles */
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-medium;
}

.btn-secondary {
  @apply bg-secondary text-white px-6 py-3 rounded-lg font-medium;
}

/* Text Styles */
.text-primary {
  @apply text-[#002F72];
}

.text-secondary {
  @apply text-[#FF6634];
}
```

## 🔍 SEO & Performance

### SEO Features

- **Meta Tags**: Dynamic meta descriptions and titles
- **Structured Data**: JSON-LD for church information
- **Sitemap**: Automatic sitemap generation
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL canonicalization

### Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: ISG for dynamic content
- **Caching**: Proper HTTP caching headers
- **Bundle Analysis**: Webpack bundle analyzer

## 📱 Mobile Experience

- **Responsive Design**: Works on all device sizes
- **Mobile-First**: Optimized for mobile users
- **Touch-Friendly**: Large touch targets and gestures
- **App Download**: Promotion of mobile app
- **Progressive Web App**: PWA features (can be added)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Follow coding standards and add proper TypeScript types
4. Test on multiple devices and browsers
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Create Pull Request

### Development Checklist

- [ ] TypeScript types added
- [ ] Responsive design tested
- [ ] API integration working
- [ ] SEO meta tags added
- [ ] Performance optimized
- [ ] Accessibility considered

---

**Built with ❤️ for The Father's House Church**

Visit us online at [https://tfh-website.netlify.app/](https://tfh-website.netlify.app/)


### Church Website
https://tfhconline.org.ng/

Feel free to download and use as a template to create the website for the church you belong to
