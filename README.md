# Tea Theory

A modern, interactive landing page celebrating the art and science of tea. Built with React, Vite, Tailwind CSS, and GSAP for seamless animations and a responsive user experience.

## 🌿 Live Demo

*https://tea-theory.vercel.app/*

## 🚀 Features

* **Dynamic Animations**: Smooth scroll-triggered reveals and transitions powered by GSAP.
* **Responsive Design**: Mobile-first layout using Tailwind CSS and react-responsive breakpoints.
* **Thematic Sections**: Explore tea history, brewing guides, flavor profiles, and more.
* **Easy Content Management**: Centralized data in the `constants` folder for effortless updates.

## 🛠️ Tech Stack

* **Framework**: React 19 with Vite for lightning-fast builds and HMR
* **Styling**: Tailwind CSS utility-first framework
* **Animations**: GSAP (GreenSock Animation Platform)
* **Responsiveness**: react-responsive for breakpoint handling
* **Tooling**: ESLint, Prettier, Vite, npm

## 📁 Project Structure

```plaintext
Tea-Theory/
├── constants/           # Static data: sections, text content, image paths
├── public/              # Static assets (images, favicon)
│   └── images/          # Tea-related assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Section.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Base styles & Tailwind imports
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite build config
├── .gitignore
└── package.json         # Dependencies & scripts
```

## ⚙️ Getting Started

### Prerequisites

* Node.js v18 or higher
* npm v8 or higher

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/pranav89624/Tea-Theory.git
   cd Tea-Theory
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

## 🔧 Customization

* **Content Updates**: Edit static data in `constants/` for sections and images.
* **Styling Tweaks**: Modify Tailwind classes or extend the config in `tailwind.config.js`.
* **Animation Adjustments**: Fine-tune GSAP timelines in component files.

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
