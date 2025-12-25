# My Next.js App

A modern Next.js application built with React 19 and Next.js 16, featuring the React Compiler for optimized performance and Biome for fast linting and formatting.

## Features

- **Next.js 16.0.7** - The latest version of the React framework
- **React 19.2.0** - Latest React with concurrent features
- **React Compiler** - Automatic optimization of React components
- **Biome** - Fast, modern linting and formatting tool
- **App Router** - Using Next.js App Router architecture
- **CSS Modules** - Component-scoped styling

## Prerequisites

- Node.js 22 or later
- pnpm (recommended package manager)

## Getting Started

### Installation

First, install the dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

### Build

Build the application for production:

```bash
pnpm build
```

### Production

Start the production server:

```bash
pnpm start
```

### Code Quality

#### Linting

Run Biome linting checks:

```bash
pnpm lint
```

#### Formatting

Format code with Biome:

```bash
pnpm format
```

## Project Structure

```
├── app/                  # Next.js App Router directory
│   ├── layout.js        # Root layout component
│   ├── page.js          # Home page
│   ├── globals.css      # Global styles
│   └── page.module.css  # Page-specific styles
├── public/              # Static assets
├── biome.json           # Biome configuration
├── next.config.mjs      # Next.js configuration
├── jsconfig.json        # JavaScript configuration
└── package.json         # Project dependencies
```

## Configuration

### React Compiler

This project uses the React Compiler (enabled in `next.config.mjs`) which automatically optimizes React components for better performance by reducing unnecessary re-renders.

### Biome

Biome is configured with:
- 2-space indentation
- Recommended rules for React and Next.js
- Auto-organize imports
- Git integration for VCS

Configuration can be modified in `biome.json`.

## Environment Variables

Set environment variables by creating a `.env.local` file:

```bash
NEXT_PUBLIC_URL=your-url-here
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React
- [Biome Documentation](https://biomejs.dev) - Learn about Biome
- [React Compiler](https://react.dev/learn/react-compiler) - Learn about React Compiler

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private.
