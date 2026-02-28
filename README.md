# Norhill Website

A professional, sleek, and interactive TypeScript website for Norhill, built with React, Vite, and Docker.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Professional Design**: Based on Norhill brand guidelines (Nordic Professional Minimalism)
- **Interactive Components**: Smooth animations with Framer Motion
- **External Component Loading**: Seamlessly load and render external React components without iframes
- **Responsive Design**: Mobile-first, fully responsive layout
- **Docker Support**: Containerized for easy deployment
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Kontaktsida**: Bokningskalender (fem närmaste lediga tider) och meddelandeformulär med reCAPTCHA; bokningar och meddelanden skrivs till filer i containern för hantering av bakgrundsprocesser

## Brand Guidelines Implementation

- **Colors**: Bold Nordic Blue, Vibrant Forest Green, Rich Slate Gray, and accent colors
- **Typography**: Inter (headings) + Lora (body text)
- **Design Style**: Nordic Professional Minimalism with generous white space
- **Content**: Based on comprehensive marketing materials

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Docker (optional, for containerized deployment)

### Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:3000`

**Kontakt-API lokalt (bokning + meddelande):**  
Kör API-servern på port 3001 (Vite proxar `/api` dit):
```bash
npm run dev:server
```
Skapa `data/available-slots.json` för att visa lediga tider (se [docs/KONTAKT-OCH-BOKNING.md](docs/KONTAKT-OCH-BOKNING.md)).

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Docker Deployment

#### Build and run with Docker Compose:

```bash
docker-compose up --build
```

Bokningar och meddelanden skrivs i containerns `/app/data` (volym `norhill-data`). För att redigera tillgängliga tider eller läsa filer från värddatorn, se [docs/KONTAKT-OCH-BOKNING.md](docs/KONTAKT-OCH-BOKNING.md).

If you encounter issues, try:
```bash
# Remove old containers and images
docker-compose down
docker system prune -f

# Rebuild from scratch
docker-compose build --no-cache
docker-compose up
```

#### Or build and run manually:

```bash
# Build the image
docker build -t norhill-website .

# Run the container (add -v för data: -v norhill-data:/app/data)
docker run -p 3000:80 norhill-website
```

The website will be available at `http://localhost:3000`. The container runs a Node server (not Nginx) that serves the SPA and the booking/contact API.

#### Troubleshooting Docker Issues:

1. **Build fails with "Cannot find module" errors:**
   - Ensure all dependencies are listed in `package.json`
   - Try: `docker-compose build --no-cache`

2. **Container starts but website doesn't load:**
   - Check if port 3000 is already in use: `netstat -ano | findstr :3000` (Windows) or `lsof -i :3000` (Mac/Linux)
   - Change the port in `docker-compose.yml` if needed

3. **TypeScript compilation errors:**
   - Fix TypeScript errors in the source code
   - The build will fail if there are TypeScript errors (by design)

4. **Permission errors:**
   - On Linux/Mac, you may need to use `sudo` or add your user to the docker group

## External Component Loading

The website supports loading external React components seamlessly (no iframes). To add external components:

1. **Create your component** as a React component and export it as default
2. **Bundle it as an ES module** (using Vite, Webpack, Rollup, etc.)
3. **Host it** on a CDN or server
4. **Register it** in the global registry when loaded:
```javascript
window.__EXTERNAL_COMPONENTS__ = window.__EXTERNAL_COMPONENTS__ || {};
window.__EXTERNAL_COMPONENTS__['component-id'] = YourComponent;
```

5. **Configure it** in `/public/external-components.json`:
```json
{
  "components": [
    {
      "id": "your-component-id",
      "name": "Component Name",
      "url": "https://your-cdn.com/component.js",
      "description": "Component description"
    }
  ]
}
```

### Example External Component

```typescript
// Your external component
import React from 'react';

const MyComponent = () => {
  return <div>Hello from external component!</div>;
};

// Register in global registry
if (typeof window !== 'undefined') {
  window.__EXTERNAL_COMPONENTS__ = window.__EXTERNAL_COMPONENTS__ || {};
  window.__EXTERNAL_COMPONENTS__['my-component'] = MyComponent;
}

export default MyComponent;
```

## Project Structure

```
website/
├── data/
│   ├── available-slots.example.json  # Exempel på tillgängliga tider
│   └── available-slots.json          # Faktiska tider (skapas vid behov)
├── docs/
│   └── KONTAKT-OCH-BOKNING.md       # Instruktioner bokning, meddelanden, reCAPTCHA
├── public/
│   ├── external-components.json
│   └── ...
├── server/
│   └── index.js                     # Express API (slots, contact, static)
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ExternalComponentLoader.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **Framer Motion**: Animations
- **Tailwind CSS**: Styling
- **Docker**: Containerization
- **Node.js + Express**: Production server (SPA + booking/contact API)
- **react-google-recaptcha**: reCAPTCHA på meddelandeformuläret

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Norhill AB. All rights reserved.

