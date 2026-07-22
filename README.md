# AirSense AI – Urban Air Quality Intelligence Platform 🍃

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan.svg)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green.svg)](https://leafletjs.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-1.5%20Flash-teal.svg)](https://deepmind.google/technologies/gemini/)

**AirSense AI** is a complete, production-ready urban air quality intelligence platform designed for municipal environmental agencies, city planners, and citizens. It features real-time telemetry monitoring, ML-driven AQI predictions based on EPA sub-indices, interactive Leaflet GIS mapping, 5-vector pollution source attribution, multilingual citizen health advisories (English, Tamil, Hindi, Kannada), and executive PDF export.

---

## 🌟 Key Features

### 1. 📊 Urban AQI Dashboard
- Live telemetry cards for Average AQI, Highest Hotspot, Lowest Center, and Active Sensor Nodes.
- Visual Semicircle AQI Gauge with EPA-standard color coding.
- Recharts 24-hour diurnal trend area charts and pollutant radar composition profiles.
- Searchable city telemetry directory.

### 2. 🤖 Machine Learning AQI Predictor
- Telemetry input controls for PM2.5, PM10, NO₂, SO₂, Temperature (°C), and Relative Humidity (%).
- Quick-load scenario presets (Clean Coastal Air, Moderate Traffic, Industrial Hotspot, Winter Inversion).
- Calculation engine combining EPA linear sub-indices with Google Gemini AI diagnostic notes.

### 3. 🚨 Pollution Hotspots Analytics
- Ranked directory of top polluted cities with intensity meters.
- Comparative Recharts bar chart rankings.
- Regional filtering (North India, South India, East Asia, Europe, North America).

### 4. 🏭 Source Attribution Diagnostics
- Sector contribution breakdown across 5 vectors:
  - **Vehicular Traffic** (38%)
  - **Industrial Emissions** (26%)
  - **Construction & Demolition Dust** (16%)
  - **Biomass & Waste Burning** (12%)
  - **Natural Crustal Dust** (8%)
- Interactive donut chart and confidence ratings.
- Sector-specific policy mitigation strategies.

### 5. 🗺️ Interactive GIS Map
- Leaflet map layer with custom glowing AQI marker badges.
- Interactive popups displaying real-time city telemetry, weather, and primary pollutant driver.
- City search and location shortcuts.

### 6. 🌐 Multilingual Citizen Health Advisory
- AI-generated safety guidelines supporting **4 languages**:
  - **English**
  - **Tamil (தமிழ்)**
  - **Hindi (हिंदी)**
  - **Kannada (ಕನ್ನಡ)**
- Targeted persona guidance for General Public, Children & Elderly, Outdoor Workers, and Asthma Patients.
- Automatic fallback engine if no Gemini API Key is configured.

### 7. 📄 Executive Reports & PDF Export
- Customizable report builder with toggle sections.
- Print-ready executive document layout.
- Instant PDF generation via `jsPDF` + `html2canvas`.

---

## 📁 Repository Folder Structure

```
airsense-ai/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AQIBadge.tsx          # EPA color-coded status badges
│   │   ├── AQIGauge.tsx           # Semicircle visual AQI meter
│   │   ├── ApiKeyModal.tsx        # Gemini API Key configuration modal
│   │   ├── Navbar.tsx             # Sticky topbar header & status indicator
│   │   ├── Sidebar.tsx            # Environmental glassmorphic navigation sidebar
│   │   ├── StatCard.tsx           # Glassmorphic summary metric cards
│   │   └── ThemeToggle.tsx        # Light/Dark mode switcher
│   ├── pages/
│   │   ├── LandingPage.tsx        # Hero banner, live ticker, quick inspector
│   │   ├── Dashboard.tsx          # Metrics, trends area chart, radar profile
│   │   ├── AQIPrediction.tsx      # EPA sub-index + Gemini prediction engine
│   │   ├── Hotspots.tsx           # Ranking table, heat intensity, bar charts
│   │   ├── SourceAttribution.tsx  # Sector donut chart & mitigation strategies
│   │   ├── InteractiveMap.tsx     # Leaflet GIS map with custom markers
│   │   ├── HealthAdvisory.tsx     # Multilingual health advisory (EN, TA, HI, KN)
│   │   ├── Reports.tsx            # PDF document generator & live print preview
│   │   └── About.tsx              # Mission, sub-index formulas & tech stack
│   ├── services/
│   │   ├── aqiCalculator.ts       # Sub-index formulas & risk algorithms
│   │   ├── geminiService.ts       # Gemini API client + multilingual fallback
│   │   ├── mockData.ts            # Realistic global & Indian city datasets
│   │   └── pdfExport.ts           # Client-side PDF export service
│   ├── types/
│   │   └── index.ts               # TypeScript interface definitions
│   ├── App.tsx                    # Main app layout & view router
│   ├── index.css                  # Custom glassmorphism CSS & scrollbars
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML head with Leaflet CSS & Google Fonts
├── package.json                   # Dependencies & build scripts
├── postcss.config.js              # PostCSS configuration for Tailwind
├── tailwind.config.js             # AQI theme colors & animations
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```

---

## ⚡ Quick Start & Local Execution

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Installation
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/airsense-ai.git
cd airsense-ai

# Install dependencies
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📤 How to Push to GitHub

Run the following commands in your terminal inside the project directory:

```bash
git init
git add .
git commit -m "Initial commit: AirSense AI Urban Air Quality Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/airsense-ai.git
git push -u origin main
```

---

## 🛠️ Technology Stack
- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Glassmorphism design system
- **Icons**: Lucide React
- **Charts**: Recharts
- **GIS Map**: Leaflet, React-Leaflet
- **PDF Generation**: jsPDF, html2canvas
- **AI Integration**: Google Gemini 1.5 Flash API with intelligent client-side fallback

---

## 📜 License
MIT License. Free to use for research, academic, and municipal development projects.
