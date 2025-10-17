# Ideathon 2K25 - Customization Guide

This document provides quick instructions for customizing the website with your event details.

## Quick Customization Checklist

### 1. Registration Link
Update the registration URL in two files:
- `components/Hero.tsx` - Line 71
- `components/Footer.tsx` - Line 30

Replace `https://your-registration-link.com` with your actual registration link.

### 2. College/Organization Name
Update in these locations:
- `components/Hero.tsx` - Line 64: "Your College Name"
- `components/Footer.tsx` - Lines 39 & 58

### 3. Contact Information
Edit `components/Contact.tsx`:
- Email: Line 39 - `ideathon@yourcollege.edu`
- Phone: Line 56 - `+91 98765 43210`
- Address: Lines 114-118

### 4. Event Dates
Update `components/Timeline.tsx` (lines 9-30):
- Registration Opens
- Idea Submission Deadline
- Shortlisting
- Final Presentation

### 5. Prize Amounts
Edit `components/Prizes.tsx` (lines 9-35) if you want different prize values.

### 6. Sponsors
Update `components/Sponsors.tsx` (lines 8-13):
- Replace placeholder sponsor names with actual sponsors
- Add or remove sponsors as needed
- For logos: replace the icon-based placeholders with actual logo images

### 7. Themes/Problem Statements
Modify `components/Themes.tsx` (lines 7-50):
- Add, remove, or edit challenge themes
- Change descriptions and icons

### 8. Rules & Eligibility
Edit `components/Judging.tsx` (lines 61-122):
- Team size requirements
- Eligibility criteria
- Submission format
- Other rules

### 9. Social Media Links
Update `components/Footer.tsx` (lines 48-71):
- Replace `#` with actual social media URLs

### 10. Page Metadata
Edit `app/layout.tsx` (lines 8-9):
- Update the title and description for SEO

## Color Customization

The website uses a blue/cyan gradient theme. To change colors:
- Edit Tailwind classes in component files
- Main colors: `blue-600`, `cyan-600`, `slate-900`
- Replace with your preferred color scheme

## Adding Your Logo

Replace the lightbulb icon in `components/Hero.tsx` (line 40) with your event logo image.

## WhatsApp QR Code

Replace the placeholder in `components/Contact.tsx` (line 101) with your actual WhatsApp group QR code image.

## Running the Project

```bash
npm run dev     # Development mode
npm run build   # Production build
npm start       # Start production server
```

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- shadcn/ui components
