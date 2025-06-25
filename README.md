# Eldo-Stream (Frontend)

**Eldo-Stream** is a modern, responsive frontend web application built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). It leverages a component-driven architecture with extensive use of Radix UI, TailwindCSS, and powerful developer tools for building accessible, animated, and dynamic UIs.

---

## 🚀 Features

- ⚡ Built with Next.js 15 and React 18
- 🎨 Styled with TailwindCSS and `tailwindcss-animate`
- 🧩 Composable UI with Radix UI primitives
- 🌙 Light/dark mode support via `next-themes`
- 🌐 Internationalization with `next-intl`
- 📅 Date & time with `date-fns` and `react-day-picker`
- 📦 Smooth UI transitions via `framer-motion` and `motion`
- ✅ Forms with `react-hook-form`, `zod`, and `@hookform/resolvers`
- 🔍 Command menu via `cmdk`
- 📈 Data visualization with `recharts`
- 🧠 State & UX enhancements with `sonner`, `lenis`, and more

---

## 📁 Tech Stack

| Tech                | Purpose                                |
|---------------------|----------------------------------------|
| **Next.js**         | App framework                          |
| **React 18**        | UI library                             |
| **TypeScript**      | Type safety                            |
| **TailwindCSS**     | Utility-first styling                  |
| **Radix UI**        | Accessible, composable components      |
| **Framer Motion**   | Animations                             |
| **Zod**             | Schema validation                      |
| **React Hook Form** | Form management                        |
| **Recharts**        | Charting and data visualization        |
| **next-intl**       | Internationalization (i18n)            |
| **Lucide React**    | Icon set                               |

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AchrafMoreau/Eldo-Stream.git
cd Eldo-Stream
```
### 2. Install dependencies
```bash
  npm install
    # or
  yarn
```
### 3. Run the development server
```bash
  npm run dev
    # or
  yarn dev
```
Visit http://localhost:3000 to see the app in action.

## 📦 Scripts
  ```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
```

## 📐 Folder Structure
```bash
.
├── components/       # Reusable UI components
├── app/              # Next.js pages
├── public/           # Static files
├── styles/           # Global styles and Tailwind config
├── hooks/            # Style hooks
├── i18n/             # Configaration of translation libary
├── lib/              # Third-party integrations or helpers
├── messages/          # Translation files (if using next-intl)
```
