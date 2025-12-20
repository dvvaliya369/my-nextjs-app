# My Next.js App

A modern web application built with Next.js, React, and TypeScript.

## Description

This is a Next.js project bootstrapped with `create-next-app`. It provides a solid foundation for building fast, scalable web applications with React and Next.js.

## Prerequisites

- Node.js 22 or later
- pnpm (recommended) or npm

## Installation

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

## Usage

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building

Build the application for production:

```bash
pnpm build
# or
npm run build
```

### Starting Production Server

Start the production server:

```bash
pnpm start
# or
npm run start
```

## Scripts

- `dev`: Start the development server
- `build`: Build the application for production
- `start`: Start the production server
- `lint`: Run linting with Biome
- `format`: Format code with Biome

## Technologies Used

- **Next.js** 16.0.7 - React framework for production
- **React** 19.2.0 - UI library
- **Biome** - Linting and formatting tool
- **Babel Plugin React Compiler** - React compiler plugin

## Project Structure

```
my-nextjs-app/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout
│   ├── page.js          # Home page
│   └── page.module.css  # Page-specific styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── next.config.mjs      # Next.js configuration
├── biome.json           # Biome configuration
└── jsconfig.json        # JavaScript configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm lint`
5. Format code: `pnpm format`
6. Submit a pull request

## License

This project is private.