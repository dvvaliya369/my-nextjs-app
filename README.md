# My Next.js App

A modern Next.js application built with React 19 and powered by the React Compiler for enhanced performance.

## Features

- **Next.js 16.0.7** - Latest Next.js framework with App Router
- **React 19.2.0** - Latest React with improved features and performance
- **React Compiler** - Automatic optimization of React components
- **Biome** - Fast, modern linting and formatting toolchain
- **Modern Styling** - CSS Modules for component-scoped styles

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for production
- [React](https://react.dev) - JavaScript library for building user interfaces
- [Biome](https://biomejs.dev) - Toolchain for linting and formatting
- [React Compiler](https://react.dev/learn/react-compiler) - Automatic React optimization

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended), npm, yarn, or bun

### Installation

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.js`.

### Building for Production

Build the application for production:

```bash
pnpm build
# or
npm run build
```

Start the production server:

```bash
pnpm start
# or
npm start
```

## Code Quality

This project uses Biome for code quality and formatting.

### Linting

Check for code issues:

```bash
pnpm lint
# or
npm run lint
```

### Formatting

Format code automatically:

```bash
pnpm format
# or
npm run format
```

## Project Structure

```
my-nextjs-app/
├── app/              # Next.js App Router directory
│   ├── page.js       # Home page component
│   ├── layout.js     # Root layout
│   ├── globals.css   # Global styles
│   └── page.module.css # Page-specific styles
├── public/           # Static assets
├── biome.json        # Biome configuration
├── next.config.mjs   # Next.js configuration
├── jsconfig.json     # JavaScript configuration
└── package.json      # Project dependencies
```

## Configuration

### React Compiler

This project has the React Compiler enabled in `next.config.mjs`, which automatically optimizes React components for better performance.

### Biome

Biome is configured with:
- Recommended rules for JavaScript, React, and Next.js
- 2-space indentation
- Automatic import organization
- Git integration for VCS-aware linting

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React features
- [React Compiler](https://react.dev/learn/react-compiler) - Learn about automatic React optimization
- [Biome Documentation](https://biomejs.dev) - Learn about the Biome toolchain

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- AWS
- Google Cloud
- Azure
- Railway
- Render
- DigitalOcean

## License

This project is private.
