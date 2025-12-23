# My Next.js App

A modern Next.js application built with React 19 and Next.js 16, featuring a clean starting point for web development.

## Features

- **Next.js 16**: Latest version with App Router
- **React 19**: Modern React with concurrent features
- **Biome**: Fast linting and formatting
- **JavaScript**: Configured for JavaScript development
- **Optimized Fonts**: Uses Geist font family from Vercel

## Prerequisites

- Node.js 22 or later
- pnpm package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-nextjs-app
```

2. Install dependencies:
```bash
pnpm install
```

## Usage

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building

Build the application for production:

```bash
pnpm build
```

### Production

Start the production server:

```bash
pnpm start
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting with Biome
- `pnpm format` - Format code with Biome

## Project Structure

```
my-nextjs-app/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── page.module.css
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── package.json
├── next.config.mjs
├── jsconfig.json
├── biome.json
└── README.md
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

This is a standard Next.js application that can be deployed to any platform supporting Node.js:

- Netlify
- Railway
- Render
- AWS Amplify

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Biome Documentation](https://biomejs.dev)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm lint` and `pnpm format`
5. Submit a pull request