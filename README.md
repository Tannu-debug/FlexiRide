# FlexiRide – Vehicle Rental Website (Delhi NCR)

> **"Your Ride. Your Time. Your Way."**

FlexiRide is a modern, responsive, full-stack vehicle rental web application developed for an emerging mobility startup operating across the **Delhi NCR** region (Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad), India.

---

## 🌟 Highlights & Features

- **Flexible Rental Models**:
  - **Hourly Rentals**: Starting from 2 hours with 10–15 km/hr included. Ideal for city errands, student campus runs, and business meetings in DLF Cyber City or Noida Tech Parks.
  - **Daily Rentals**: 24-hour cycles with 250 km/day included. Perfect for family weekends, outstation road trips (Agra, Jaipur, Neemrana), and airport transit.
- **Brand Identity & Aesthetic**:
  - Dark navy blue (`#0B132B`), crisp white, and electric orange (`#FF6B00`).
  - Sleek modern typography, responsive cards, glassmorphism badges, and subtle glow animations.
- **Delhi NCR Service Coverage**:
  - Central Delhi (Connaught Place), South Delhi (Saket, Nehru Place), IGI Airport Terminal 3 / Aerocity, Gurugram (Cyber City, Golf Course Road), Noida (Sector 18, Sector 62), Greater Noida (Pari Chowk), Faridabad, and Ghaziabad.
  - Doorstep vehicle delivery and pickup options across all covered NCR zones.
- **Four Distinct Vehicle Categories**:
  - **Hatchback** (Maruti Swift, Hyundai i20, Tata Altroz)
  - **Sedan** (Honda City, Hyundai Verna, Maruti Ciaz)
  - **SUV** (Hyundai Creta, Mahindra XUV700, Tata Harrier)
  - **Premium Cars** (BMW 3 Series Gran Limousine, Mercedes-Benz C-Class, Audi A4)
- **Interactive Live Rate Estimator**:
  - Calculate approximate rental tariffs based on vehicle category, duration type (hourly vs daily), duration value, and pickup hub.
- **Validated Booking Enquiry Form**:
  - Real-time client-side validation for Full Name, 10-digit Indian Mobile Phone (`+91`), Email Address, Vehicle Category, Duration, and Pickup Location.
  - Generates a unique Enquiry Reference ID (`FLX-NCR-XXXXXX`).
  - Pre-populates a direct WhatsApp message to send the booking enquiry directly to the FlexiRide dispatch desk.
  - Clearly identifies demo-only submission functionality until commercial backend CRM integration.
- **Configurable WhatsApp Support**:
  - Floating WhatsApp chat launcher with customizable placeholder helpline number (`+91 98000 00000`).
- **Comprehensive Informational Pages**:
  - **Home (`/`)**: Hero section, benefits, categories, live rate estimator, how-it-works overview, and customer enquiry CTAs.
  - **About Us (`/about`)**: Company background, vision, mission, and how FlexiRide serves Students, Working Professionals, Families, Tourists, and Business Travellers.
  - **Our Vehicles (`/vehicles`)**: Full fleet showcase with category filter tabs, hourly/daily tariff view toggle, transmission selector, detailed specifications modal, and illustrative notice.
  - **How It Works (`/how-it-works`)**: Simple 4-step rental process, Hourly vs Daily comparison matrix, driver eligibility checklist, and comprehensive FAQs.
  - **Contact Us (`/contact`)**: Customer enquiry form, Delhi NCR proposed hub directories, support information, and demo disclaimers.
  - **Privacy Policy (`/privacy`)**: Clearly marked draft privacy policy explaining enquiry data collection, use, and security for business & legal review.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Target**: Vercel

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js 18+** or **Node.js 20 LTS** installed on your system along with **npm**.

```bash
node -v
npm -v
```

### Installation

1. Clone or download the repository:
   ```bash
   cd FlexiRide
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📦 Building for Production

To create an optimized production build compatible with Vercel:

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to your [Vercel](https://vercel.com/) dashboard.
3. Click **"Add New" &rarr; "Project"**.
4. Import your FlexiRide repository.
5. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Click **Deploy**. Your site will be live on a global CDN within minutes.

---

## 📋 Compliance & Operational Disclaimer

- **Concept & Feasibility Notice**: FlexiRide is an emerging vehicle rental startup concept tailored for Delhi NCR.
- **Illustrative Data**: All vehicle specifications, trims, sample rates, hub addresses, phone numbers, and availability are illustrative estimates for demonstration and enquiry generation until actual commercial operations launch.
- **Form Submissions**: Enquiry forms operate in demonstration mode with simulated reference receipt generation and direct WhatsApp communication hooks.

---

## 📄 License

This project is licensed under the MIT License. Developed for FlexiRide (Delhi NCR).
