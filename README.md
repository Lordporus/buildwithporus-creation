# Porus' Portfolio: Engineering Premium Web Experiences

This is my personal portfolio—a showcase of high-performance web applications, SaaS platforms, and AI-driven solutions. I built this to reflect my design philosophy: **"Quiet Luxury."** Software should be powerful, scalable, and secure, but it should also be unobtrusive and elegant.

## The Vision
Most portfolios are either too loud or too generic. I wanted something that felt like a premium product. Every interaction, from the custom cursor to the subtle floral background overlays, is designed to provide a high-end, intentional user experience without distracting from the work itself.

## Core Tech Stack
I chose these tools for their speed, developer experience, and ability to deliver a polished final product:

*   **Frontend:** React 18 + Vite (for near-instant HMR and optimized builds).
*   **Styling:** Tailwind CSS (utility-first, keeping the bundle small and the design consistent).
*   **Animations:** Framer Motion (handling the heavy lifting for smooth, physics-based transitions).
*   **Backend:** Node.js + Express (serving as a lightweight proxy for contact form handling and API routes).
*   **Icons:** Lucide React (clean, consistent stroke-based iconography).

## Key Features
*   **Performance-First:** Lazy-loaded images, optimized assets, and a lean component structure.
*   **Secure Contact Flow:** Instead of exposing my email in the client, I built a custom `/api/contact` route on the Express backend to handle submissions securely.
*   **Responsive Design:** Fluid layouts that look just as good on a 4K monitor as they do on an iPhone.
*   **Custom Design System:** A cohesive visual language using Inter (sans-serif) for utility and Playfair Display (serif) for that editorial, high-end feel.

## Getting Started

### Local Development
1.  Clone the repo.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Spin up the dev server:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

### Building for Production
The project uses a full-stack setup. The server handles both the API routes and serves the static frontend assets.

1.  Build the frontend and the server:
    ```bash
    npm run build
    ```
2.  Start the production server:
    ```bash
    npm start
    ```

## Design Philosophy
I believe that code is a craft. Whether I'm building a fintech dashboard or a luxury e-commerce site, my focus is always on:
*   **Scalability:** Writing code that grows with the business.
*   **Intentionality:** Every pixel and every line of code must serve a purpose.
*   **Reliability:** Production-ready means it doesn't just work; it stays working.

---
*Built with intention by Purushottam Kumar.*
