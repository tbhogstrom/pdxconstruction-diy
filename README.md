# PDX Construction DIY

A comprehensive construction resource platform for the Portland area, providing DIY project guides, cost calculators, and contractor connections.

## Overview

PDX Construction DIY serves as Portland's hub for home improvement and construction projects, offering:

- Detailed project guides with risk assessments
- Interactive cost calculators
- Permit requirement wizards
- Local contractor directory
- Educational resources and blog content

## Project Structure

```
/
├── src/
│   ├── components/     # UI components (RiskMeter, CostCalculator, etc.)
│   ├── content/        # MDX content files
│   │   ├── blog/       # Construction advice articles
│   │   ├── projects/   # Detailed project guides
│   │   └── directory/  # Contractor listings
│   ├── layouts/        # Page layouts and templates
│   └── pages/          # Route pages
└── public/            # Static assets
```

## Features

### Project Guides
Each project guide includes:
- Risk level assessment (1-5)
- Cost per square foot estimates
- Time estimates per square foot
- Required tools and materials
- Relevant building codes
- DIY recommendation
- Step-by-step instructions

### Interactive Tools
- Cost Calculator: Estimates project costs based on square footage
- Risk Assessment Meter: Visual indicator of project complexity
- Permit Wizard: Guidance on required permits

### Content Types
- Construction Project Guides
- Educational Blog Posts
- Resource Guides
- Local Contractor Directory

## Technical Stack

- **Framework**: Astro
- **Content**: MDX
- **Styling**: Tailwind CSS
- **Deployment**: [Your deployment platform]

## Development

1. Clone the repository:
```sh
git clone [your-repo-url]
```

2. Install dependencies:
```sh
npm install
```

3. Start development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Content Structure

### Project Schema
```typescript
{
  title: string
  risk_level: number (1-5)
  hours_per_sqft: number
  cost_per_sqft: number
  tools: string[]
  codes: string[]
  diy_recommended: boolean
  publishDate: date
  featured: boolean
}
```

### Blog Post Schema
```typescript
{
  title: string
  description: string
  publishDate: date
  author: string
  tags: string[]
  image?: string
}
```

### Directory Schema
```typescript
{
  name: string
  type: 'contractor' | 'supplier' | 'consultant'
  services: string[]
  location: string
  rating?: number (1-5)
  contact: {
    phone: string
    email: string
    website?: string
  }
  verified: boolean
}
```

## License

[Add your license information]

## Contributing

[Add contribution guidelines]

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
