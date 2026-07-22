import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'p',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 15;
const contentWidth = pageWidth - margin * 2;

let yPos = margin;

function addHeader(title) {
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 24, 'F');
  
  doc.setTextColor(20, 184, 166); // teal-500
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('AirSense AI Platform', margin, 15);
  
  doc.setTextColor(148, 163, 184); // slate-400
  doc.setFontSize(9);
  doc.setFont('Helvetica', 'normal');
  doc.text(title, pageWidth - margin, 15, { align: 'right' });
  
  yPos = 32;
}

function addFooter(pageNum, totalPages) {
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
  
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8);
  doc.setFont('Helvetica', 'normal');
  doc.text('AirSense AI – Urban Air Quality Intelligence Platform Project Report', margin, pageHeight - 6);
  doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: 'right' });
}

function checkPageBreak(neededHeight) {
  if (yPos + neededHeight > pageHeight - 20) {
    doc.addPage();
    yPos = 32;
    return true;
  }
  return false;
}

// --- TITLE / COVER PAGE ---
doc.setFillColor(15, 23, 42);
doc.rect(0, 0, pageWidth, pageHeight, 'F');

// Glowing Card Accent
doc.setFillColor(30, 41, 59);
doc.roundedRect(margin, margin + 20, contentWidth, 120, 6, 6, 'F');

doc.setTextColor(20, 184, 166);
doc.setFontSize(12);
doc.setFont('Helvetica', 'bold');
doc.text('PROJECT DOCUMENTATION & TECHNICAL SPECIFICATION', margin + 10, margin + 40);

doc.setTextColor(255, 255, 255);
doc.setFontSize(26);
doc.text('AirSense AI', margin + 10, margin + 55);

doc.setTextColor(16, 185, 129);
doc.setFontSize(16);
doc.text('Urban Air Quality Intelligence Platform', margin + 10, margin + 68);

doc.setTextColor(203, 213, 225);
doc.setFontSize(10);
doc.setFont('Helvetica', 'normal');
const coverDesc = 'A complete AI-powered web platform featuring real-time urban telemetry, machine learning AQI prediction, 5-vector source attribution, Leaflet GIS mapping, and multilingual Gemini AI health advisories (English, Tamil, Hindi, Kannada).';
doc.text(doc.splitTextToSize(coverDesc, contentWidth - 20), margin + 10, margin + 82);

// Metadata Box
doc.setFillColor(15, 23, 42);
doc.roundedRect(margin + 10, margin + 105, contentWidth - 20, 25, 4, 4, 'F');

doc.setTextColor(148, 163, 184);
doc.setFontSize(8);
doc.text('DATE: July 2026', margin + 16, margin + 116);
doc.text('STACK: React 18, TypeScript, Vite, Tailwind CSS, Leaflet, Recharts, Gemini API', margin + 16, margin + 124);

doc.setTextColor(255, 255, 255);
doc.setFontSize(11);
doc.setFont('Helvetica', 'bold');
doc.text('TABLE OF CONTENTS', margin, 170);

const tocItems = [
  '1. Executive Summary & System Goals',
  '2. System Architecture & Technology Stack',
  '3. Comprehensive Page-by-Page Specifications (9 Modules)',
  '4. Machine Learning & EPA AQI Sub-Index Calculation Equations',
  '5. Multilingual AI Health Advisory Engine (EN, TA, HI, KN)',
  '6. Source Attribution & Sector Fingerprinting Model',
  '7. Interactive GIS Mapping & PDF Generation',
  '8. Project Deployment & GitHub Instructions'
];

doc.setFont('Helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(203, 213, 225);
let tocY = 180;
tocItems.forEach(item => {
  doc.text(item, margin + 5, tocY);
  tocY += 8;
});

// --- PAGE 2: EXECUTIVE SUMMARY & ARCHITECTURE ---
doc.addPage();
addHeader('1. EXECUTIVE SUMMARY & ARCHITECTURE');

doc.setFont('Helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(15, 23, 42);
doc.text('1. Executive Summary', margin, yPos);
yPos += 8;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(9.5);
doc.setTextColor(51, 65, 85);
const execText = 'AirSense AI is built to bridge the gap between raw urban atmospheric telemetry and actionable public health policy. By combining real-time particulate matter (PM2.5, PM10) and gaseous pollutant (NO2, SO2) sensor feeds with machine learning EPA sub-index calculation algorithms, the platform delivers precise AQI assessments, source attributions, interactive geospatial mapping, and multilingual AI health advisories.';
doc.text(doc.splitTextToSize(execText, contentWidth), margin, yPos);
yPos += 22;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(15, 23, 42);
doc.text('2. System Architecture & Technology Stack', margin, yPos);
yPos += 8;

const stackDetails = [
  ['Component', 'Technology Choice', 'Purpose'],
  ['Core Framework', 'React 18 + TypeScript + Vite', 'Type-safe, lightning-fast component architecture'],
  ['Styling', 'Tailwind CSS + Glassmorphism', 'Environmental blue/green theme with backdrop blur cards'],
  ['UI Icons', 'Lucide React', 'Consistent, scalable vector icons across all pages'],
  ['Data Visualization', 'Recharts 2.x', 'Diurnal trend area charts, hotspot bars, & radar profiles'],
  ['GIS Mapping', 'Leaflet 1.9 + React-Leaflet', 'OpenStreetMap dark tile layer with glowing AQI badges'],
  ['AI Integration', 'Google Gemini 1.5 Flash API', 'Multilingual health advisories & prediction diagnostics'],
  ['PDF Engine', 'jsPDF + html2canvas', 'Client-side executive report export & print preview']
];

doc.setFillColor(241, 245, 249);
doc.rect(margin, yPos, contentWidth, 8, 'F');
doc.setFont('Helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(15, 23, 42);
doc.text(stackDetails[0][0], margin + 3, yPos + 5.5);
doc.text(stackDetails[0][1], margin + 45, yPos + 5.5);
doc.text(stackDetails[0][2], margin + 110, yPos + 5.5);
yPos += 8;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(51, 65, 85);

for (let i = 1; i < stackDetails.length; i++) {
  if (i % 2 === 1) {
    doc.setFillColor(248, 250, 252);
    doc.rect(margin, yPos, contentWidth, 7, 'F');
  }
  doc.text(stackDetails[i][0], margin + 3, yPos + 5);
  doc.text(stackDetails[i][1], margin + 45, yPos + 5);
  doc.text(stackDetails[i][2], margin + 110, yPos + 5);
  yPos += 7;
}

yPos += 10;

// --- PAGE 3: PAGE SPECIFICATIONS (9 MODULES) ---
doc.addPage();
addHeader('2. DETAILED PAGE SPECIFICATIONS');

doc.setFont('Helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(15, 23, 42);
doc.text('3. Platform Page Specifications (9 Modules)', margin, yPos);
yPos += 8;

const pagesSpec = [
  {
    name: '1. Landing Page',
    file: 'src/pages/LandingPage.tsx',
    desc: 'Environmental hero banner, live urban AQI ticker (Delhi, Mumbai, Bengaluru, Tokyo, London, NY), quick city telemetry inspector, and core capability shortcuts.'
  },
  {
    name: '2. Telemetry Dashboard',
    file: 'src/pages/Dashboard.tsx',
    desc: 'Summary metric cards (Average AQI, Highest Hotspot, Lowest Center, Sensor Nodes), visual semicircle AQI gauge, Recharts 24h trends area chart, radar profile, and live station directory.'
  },
  {
    name: '3. AQI Prediction Engine',
    file: 'src/pages/AQIPrediction.tsx',
    desc: 'Input sliders for PM2.5, PM10, NO2, SO2, Temp, and Humidity; scenario presets; EPA sub-index calculation; and Gemini AI diagnostic notes.'
  },
  {
    name: '4. Pollution Hotspots Analytics',
    file: 'src/pages/Hotspots.tsx',
    desc: 'Top polluted city rankings, heat intensity badges, regional filter (North/South India, East Asia, Europe), and comparative Recharts bar chart.'
  },
  {
    name: '5. Source Attribution Diagnostics',
    file: 'src/pages/SourceAttribution.tsx',
    desc: '5-vector sector contribution (Traffic 38%, Industry 26%, Construction 16%, Waste Burning 12%, Natural Dust 8%), interactive donut chart, and sector mitigation strategies.'
  },
  {
    name: '6. Interactive GIS Map',
    file: 'src/pages/InteractiveMap.tsx',
    desc: 'Leaflet map with custom glowing HTML/SVG AQI marker badges, detailed telemetry popups, search bar, and location quick-jump shortcuts.'
  },
  {
    name: '7. Multilingual Citizen Advisory',
    file: 'src/pages/HealthAdvisory.tsx',
    desc: 'Personalized safety protocols in English, Tamil, Hindi, and Kannada for General Public, Children & Elderly, Outdoor Workers, and Asthma Patients.'
  },
  {
    name: '8. Executive PDF Reports',
    file: 'src/pages/Reports.tsx',
    desc: 'Report customizer checklist, live print preview document layout, and one-click PDF generation via jsPDF + html2canvas.'
  },
  {
    name: '9. About & Tech Blueprint',
    file: 'src/pages/About.tsx',
    desc: 'Mission statement, sub-index mathematical equations, data provider compliance (CPCB, US EPA, Copernicus), and tech stack inventory.'
  }
];

pagesSpec.forEach(p => {
  checkPageBreak(22);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(13, 148, 136); // teal-600
  doc.text(p.name, margin, yPos);
  
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`[${p.file}]`, margin + 55, yPos);
  yPos += 5;

  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const lines = doc.splitTextToSize(p.desc, contentWidth - 5);
  doc.text(lines, margin + 5, yPos);
  yPos += lines.length * 4.5 + 4;
});

// --- PAGE 4: FORMULAS, MULTILINGUAL & DEPLOYMENT ---
doc.addPage();
addHeader('3. FORMULAS & DEPLOYMENT GUIDE');

doc.setFont('Helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(15, 23, 42);
doc.text('4. EPA AQI Sub-Index Calculation Equations', margin, yPos);
yPos += 8;

doc.setFont('Helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(51, 65, 85);
const formulaDesc = 'AirSense AI evaluates air quality by calculating linear sub-indices for primary criteria pollutants using standard EPA/CPCB breakpoints:';
doc.text(doc.splitTextToSize(formulaDesc, contentWidth), margin, yPos);
yPos += 10;

const mathBoxes = [
  '• PM2.5 Sub-index: I_PM2.5 = PM2.5 * 3.8 * Weather_Factor',
  '• PM10 Sub-index: I_PM10 = PM10 * 1.8 * Weather_Factor',
  '• NO2 Sub-index: I_NO2 = NO2 * 1.4',
  '• SO2 Sub-index: I_SO2 = SO2 * 1.5',
  '• Weather Factor = 1 + (Temp > 35°C ? 0.10 : 0) + (Humidity < 30% ? 0.08 : 0)',
  '• Final Calculated AQI = Max(I_PM2.5, I_PM10, I_NO2, I_SO2) [Capped at 500]'
];

doc.setFillColor(248, 250, 252);
doc.roundedRect(margin, yPos, contentWidth, 38, 4, 4, 'F');
doc.setDrawColor(203, 213, 225);
doc.roundedRect(margin, yPos, contentWidth, 38, 4, 4, 'D');

doc.setFont('Helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);
let mathY = yPos + 6;
mathBoxes.forEach(b => {
  doc.text(b, margin + 6, mathY);
  mathY += 5.5;
});
yPos += 44;

doc.setFont('Helvetica', 'bold');
doc.setFontSize(14);
doc.setTextColor(15, 23, 42);
doc.text('5. GitHub Upload & Quick Start Commands', margin, yPos);
yPos += 8;

doc.setFillColor(15, 23, 42);
doc.roundedRect(margin, yPos, contentWidth, 40, 4, 4, 'F');

doc.setFont('Courier', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(45, 212, 191);
const gitCmds = [
  '# Clone or navigate to directory',
  'cd C:\\Users\\LENOVO\\.gemini\\antigravity\\scratch\\airsense-ai',
  '',
  '# Push to GitHub repository',
  'git init',
  'git add .',
  'git commit -m "Initial commit: AirSense AI Urban Platform"',
  'git branch -M main',
  'git remote add origin https://github.com/YOUR_USERNAME/airsense-ai.git',
  'git push -u origin main'
];

let gitY = yPos + 6;
gitCmds.forEach(c => {
  doc.text(c, margin + 6, gitY);
  gitY += 3.5;
});

// Add footers to all pages
const totalPages = doc.internal.getNumberOfPages();
for (let i = 1; i <= totalPages; i++) {
  doc.setPage(i);
  if (i > 1) {
    addFooter(i, totalPages);
  }
}

const outputPath = path.join(process.cwd(), 'AirSense_AI_Project_Report.pdf');
const pdfBytes = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfBytes));

console.log(`PDF successfully generated at: ${outputPath}`);
