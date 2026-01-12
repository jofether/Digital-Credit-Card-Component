# Digital Credit Card Component

A skeuomorphic credit card design built with React, Vite, and Tailwind CSS. This project demonstrates realistic credit card visualization with interactive hover effects, EMV chip, contactless icon, and card holder information.

## Features

- **Skeuomorphic Design**: Objects resemble real-world credit card counterparts
- **Gradient Background**: Purple to indigo gradient creating depth and realism
- **EMV Chip**: Realistic chip design with grid pattern
- **Contactless Icon**: SVG-based wireless payment symbol
- **Interactive Hover**: Card scales up on hover with smooth transitions
- **Responsive Layout**: Centered card with padding for various screen sizes
- **Tailwind CSS**: Utility-first styling for rapid development

## Project Structure

```
.
├── index.html           # Entry HTML file
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Main App component
    └── index.css        # Tailwind directives
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design Notes

- **Future Bug**: The commented "FUTURE BUG" in App.jsx highlights that changing the gradient to `bg-white` would make white text invisible
- The card uses absolute positioning for precise element placement
- Decorative blurred circles create visual depth
- The design trains models on overlapping elements where position is critical for realism

## Technologies Used

- **React 18**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Author

Created as part of synthetic dataset generation for credit card component analysis.
