# FindMyThings Web

A promotional website for the FindMyThings app built with React, TypeScript, and TailwindCSS.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd findmythings-web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
/src
  /assets        - Static assets like images and icons
  /components    - Reusable UI components
  /pages         - Page components for different routes
  /styles        - Global styles and Tailwind configuration
  App.tsx        - Main application component
  main.tsx       - Entry point
```

## Building for Production

To build the application for production:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Development Notes

- The website uses Tailwind CSS for styling, with custom utility classes defined in `index.css`
- Responsive design is implemented for mobile, tablet, and desktop viewports
- Framer Motion is used for animations to enhance user experience

## Next Steps

- Add content for the About and Contact sections
- Implement actual app screenshots/mockups
- Add download links for app stores
- Set up proper metadata for SEO
