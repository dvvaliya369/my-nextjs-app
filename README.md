# My Next.js App

A modern Next.js application built with React 19 and Next.js 16.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Create a production build:

```bash
pnpm build
```

### Production

Start the production server:

```bash
pnpm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |

## Tech Stack

- **Framework:** Next.js 16.0.7
- **UI Library:** React 19.2.0
- **Linting/Formatting:** Biome 2.2.0
- **Compiler:** React Compiler (Babel plugin)

## Project Structure

```
/vercel/sandbox/
├── app/              # Next.js App Router
│   ├── layout.js     # Root layout
│   ├── page.js       # Home page
│   └── globals.css   # Global styles
├── public/           # Static assets
├── package.json      # Dependencies
└── next.config.mjs   # Next.js configuration
```

## Features

- ⚡ Next.js 16 with App Router
- ⚛️ React 19 with React Compiler
- 🎨 Modern styling setup
- 🔍 Biome for linting and formatting
- 📦 Optimized for production

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Biome Documentation](https://biomejs.dev)
