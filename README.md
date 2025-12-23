# My Next.js App

A modern Next.js application built with React 19 and Next.js 16, featuring the React Compiler for optimized performance.

## Features

- **Next.js 16** - Latest version with App Router
- **React 19** - Latest React with improved performance
- **React Compiler** - Automatic optimization of React components
- **Biome** - Fast linter and formatter for code quality
- **CSS Modules** - Scoped styling with CSS Modules

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

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
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit files. The main page component is located at `app/page.js`.

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
npm run start
```

## Code Quality

### Linting

Check code quality with Biome:

```bash
pnpm lint
# or
npm run lint
```

### Formatting

Format code with Biome:

```bash
pnpm format
# or
npm run format
```

## Project Structure

```
my-nextjs-app/
├── app/                  # Next.js App Router directory
│   ├── favicon.ico      # Application favicon
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout component
│   ├── page.js          # Home page component
│   └── page.module.css  # Home page styles
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

This project uses the React Compiler for automatic optimization. The compiler is enabled in `next.config.mjs`:

```javascript
const nextConfig = {
  reactCompiler: true,
};
```

### Biome

Code quality is maintained using Biome, a fast alternative to ESLint and Prettier. Configuration is in `biome.json`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React
- [React Compiler](https://react.dev/learn/react-compiler) - Learn about the React Compiler
- [Biome](https://biomejs.dev) - Learn about Biome

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and not licensed for public use.
