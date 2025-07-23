# next-qr-code-generator 🚀

This app was built as a learning project following a design provided by [BeCoder](https://becoder.dev/en/app), a platform that helps developers learn and sharpen their skills.

## ✨ Features

- ✅ Create QR codes from any URL
- 🎨 Choose between custom colors, sizes, and formats (SVG, PNG)
- ⚙️ QR code generation is handled **server-side**
- 📎 Copy the generated QR code link to share it
- ⬇️ Or download it directly to your device

## 🧱 Tech Stack

### Frontend:

- **Next.js** – App directory routing, SSR/CSR mix
- **React** – Core UI library
- **react-hook-form** – Minimal and performant form state management
- **Redux Toolkit** – Global state management
- **RTK Query** – Data fetching and caching
- **Axios** – Used for HTTP requests and configured as RTK Query's base query
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **Emotion** – CSS-in-JS for dynamic styles
- **Sass** – Used for global styling and design tokens

### Backend:

- **Fastify** – High-performance Node.js web framework
- **qrcode** — Library used to generate qr-code dynamically

### Frontend && Backend

- **TypeScript** – Full type safety across the stack
- **Zod** – Runtime validation for inputs and schemas (schemas shared between client and server via the `packages/` folder)

### DevOps & Infrastructure

- **Docker** – Containerized development and deployment
  - Backend and client run in isolated containers
- **GitHub Actions** – CI/CD pipelines
  - Runs linting and type-checking on every push or merge to `main` (CI)
  - Deploys both client and server to Fly.io automatically on success (CD)
- **Nginx** – Reverse proxy local development
- **Fly.io** – Deployment platform for both frontend and backend (Docker-based)

### Tooling

- **Turborepo** – Monorepo management
- **Yarn Berry (with node_modules linker)** – Package manager

## Final notes 🧐

I hope you find project interesting, if not the app does not have a refund policy 💰
Any kind of advice or suggestion is welcome to improve some parts of app or just my coding approach in general
