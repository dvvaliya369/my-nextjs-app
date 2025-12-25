# My Next.js App

A modern Next.js application built with React 19 and Next.js 16, featuring the React Compiler for optimized performance.

## Features

- ⚡ **Next.js 16** - Latest version with App Router
- ⚛️ **React 19** - Latest React with improved performance
- 🔧 **React Compiler** - Automatic optimization of React components
- 🎨 **Biome** - Fast formatter and linter for code quality
- 📦 **pnpm** - Efficient package management

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-nextjs-app
```

2. Install dependencies:
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

The page auto-updates as you edit files in the `app/` directory.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## Project Structure

```
my-nextjs-app/
├── app/                  # Next.js App Router directory
│   ├── favicon.ico      # App favicon
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout component
│   ├── page.js          # Home page component
│   └── page.module.css  # Page-specific styles
├── public/              # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── biome.json           # Biome configuration
├── jsconfig.json        # JavaScript configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Project dependencies
```

## Configuration

### React Compiler

This project uses the React Compiler for automatic optimization. It's enabled in `next.config.mjs`:

```javascript
const nextConfig = {
  reactCompiler: true,
};
```

### Biome

Code formatting and linting is handled by Biome. Configuration can be found in `biome.json`.

## Building for Production

Create an optimized production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Next.js Learn](https://nextjs.org/learn) - Interactive Next.js tutorial
- [React Compiler](https://react.dev/learn/react-compiler) - Learn about React Compiler

## License

This project is private and not licensed for public use.
