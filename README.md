# Doddi Mahindhra — Premium Developer Portfolio

A distinctive, elegant, modern, and recruiter-friendly software developer portfolio engineered for **Doddi Mahindhra** (Aspiring Software Developer).

Designed around a **Modern Editorial + Minimal Developer Portfolio** concept inspired by Swiss typography, minimalist creative agencies, and contemporary engineering portfolios. Built with **React 19**, **Vite**, and **pure modern CSS3** with zero bloat.

---

## Visual Identity & Design System

### 1. Palette Architecture
- **Primary Background**: `#F8F8F5` (Warm editorial paper tone)
- **Secondary Background / Surfaces**: `#FFFFFF`
- **Primary Text**: `#17191C` (Deep charcoal contrast)
- **Secondary / Muted Text**: `#747984` (Refined neutral)
- **Accent Blue**: `#315CFD` (Purposefully applied for key CTAs, highlights, active states)
- **Border**: `#E6E7EB` (Subtle boundary separation)
- **Muted Background**: `#F0F1F5` (Light tag & pill fills)
- **Full Dark Mode**: Carefully designed high-contrast dark palette (`#0C0E12` / `#14171E` / `#4B74FF`) with localStorage persistence and system preference detection.

### 2. Typography
- **Headings**: `Space Grotesk` (weights 500, 600, 700) with fluid responsive scaling via `clamp()`.
- **Body**: `Inter` (weights 400, 500, 600) with optimized line heights and reading widths.
- **Technical & Metrics**: `JetBrains Mono` for badges, tags, code snippets, dates, and metric values.

---

## Project Structure

```text
├── index.html                   # Semantic HTML5 entry, Google Fonts, Open Graph tags
├── package.json                 # Project dependencies & npm scripts
├── vite.config.js               # Vite build configuration
├── public/
│   └── assets/
│       └── mahindhra-portrait.jpg # Verified profile portrait photo
├── src/
│   ├── main.jsx                 # React root bootstrap
│   ├── App.jsx                  # Main application orchestrator & theme state
│   ├── index.css                # Centralized design system tokens, components, resets
│   ├── responsive.css           # Breakpoints (1440px, 1024px, 768px, 480px, 390px, 360px)
│   ├── data/
│   │   └── portfolioData.js     # Decoupled resume data (skills, projects, education, etc.)
│   └── components/
│       ├── Navbar.jsx           # Monogram brand, links with animated underlines, theme toggle
│       ├── Hero.jsx             # Asymmetric two-column hero, portrait frame, floating cards
│       ├── About.jsx            # Two-column editorial layout, stats, leadership & interests
│       ├── Skills.jsx           # Structured technical skill panels with clean categorization
│       ├── Experience.jsx       # Industry internship timeline (AWS Cloud & AI/ML)
│       ├── Projects.jsx         # Asymmetric project cards with code view & metrics
│       ├── Education.jsx        # Academic pedigree cards (B.Sc. MECs 7.5 CGPA, SSC 97%)
│       ├── Certifications.jsx   # Credential grid (C Language, Pearson MePro, MS Office)
│       ├── Achievements.jsx     # Distinctive Android Hackathon milestone banner
│       ├── Contact.jsx          # Oversized editorial typography, 1-click copy, contact dispatch
│       ├── Footer.jsx           # Minimalist colophon, back-to-top trigger
│       ├── ResumeModal.jsx      # Recruiter-friendly printable verified resume viewer
│       └── Icons.jsx            # Crisp vector icons
└── dist/                        # Production build output
```

---

## Verified Resume Data Included

All content reflects **Doddi Mahindhra's** official resume:
- **Title**: Aspiring Software Developer
- **Location**: Visakhapatnam, Andhra Pradesh, India
- **Contact**: `mahimahindhra000@gmail.com` | `+91 6302827360` | `github.com/Mahindhra`
- **Core Languages**: Java, C, Python (Fundamentals)
- **Web Technologies**: HTML5, CSS3, JavaScript, XML
- **Databases & Server**: SQL, MySQL, Apache Tomcat
- **Internships**:
  - AWS Cloud Computing – Adhoc Network (EC2, S3, IAM, Cloud Architecture)
  - Artificial Intelligence & Machine Learning – ULearn (Data Processing, ML Algorithms)
- **Education**:
  - Aditya Degree & PG College – B.Sc. MECs (CGPA: 7.5)
  - M.N.R. High School – SSC (Percentage: 97%)
- **Certifications**:
  - C Programming Certification
  - Pearson MePro Communication Skills Certification
  - Microsoft Office Certification
- **Key Achievement**: Android Development Hackathon (30 Sep 2024 – 04 Oct 2024) Recognized for outstanding participation and live problem-solving.
- **Leadership & Activities**: Team Leadership, Event Organization, Financial Literacy.
- **Interests**: Playing Piano, Cooking, Painting, Drawing.

---

## Getting Started & Local Development

### Prerequisites
- Node.js (v18 or higher recommended; built and tested on v24)
- npm (v9+)

### Installation
```bash
# Clone or navigate into the workspace
cd intern

# Install dependencies
npm install

# Start local development server
npm run dev
```

The app will be available at `http://localhost:3000` (or the port specified by Vite).

### Production Build
```bash
# Compile and optimize for production
npm run build

# Preview the production build locally
npm run preview
```

The compiled assets will be in the `dist/` directory ready for deployment.

---

## Deployment Instructions

### 1. Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern editorial portfolio for Doddi Mahindhra"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `Mahindhra/intern` (or your chosen repo name).
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live on a secure HTTPS domain within 30 seconds!

### 2. Deploying to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### 3. Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Use GitHub Actions with the official Vite deployment workflow.

---

## Key CSS Features & Accents
- **CSS Custom Properties**: Centralized design system in `:root` and `[data-theme="dark"]`.
- **Underline Hover Animation**: Clean sliding accent bar under navigation links.
- **Restrained Elevation**: Subtle vertical translate (`-3px`) and soft shadow on card hover.
- **Print Optimization**: Dedicated `@media print` stylesheet inside `index.css` formatting the modal into a clean physical PDF resume.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` and implements high-contrast `:focus-visible` rings.
