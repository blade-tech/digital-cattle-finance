# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server (runs on port 3000, opens automatically)
- `npm run build` - Build for production (outputs to `build/` directory)

## Project Overview

This is **Zeroh Desktop (Micro-finance version)**, a React-based web application for Islamic finance and cattle investment management. The project originated from a Figma design and has been converted to a functional React application.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 with SWC for fast compilation
- **UI Framework**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom CSS variables
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Theming**: next-themes for dark/light mode support

## Architecture & Code Organization

### Directory Structure

```
src/
├── assets/           # Static assets (images from Figma exports)
├── components/
│   ├── figma/       # Figma-generated components (ImageWithFallback.tsx)
│   ├── offerDetails/ # Investment offer-related components
│   └── ui/          # Radix UI component library (shadcn/ui style)
├── imports/         # Large Figma-generated dashboard components
├── styles/          # Global CSS with design system variables
└── guidelines/      # (directory exists but not explored)
```

### Key Architectural Patterns

1. **Component Composition**: Uses Radix UI as foundation with custom styling
2. **Design System**: CSS custom properties in `src/styles/globals.css` define the entire color palette and spacing system
3. **Figma Integration**: Heavy use of Figma asset imports with specialized alias mapping in `vite.config.ts`
4. **Islamic Finance Domain**: Specialized components for cattle investment pools with Mudarabah contracts

### Important Files

- `src/components/offerDetails/constants.ts` - Main data model for investment pools (cattle investment data, financial projections, farmer details)
- `src/components/offerDetails/InvestmentCalculator.tsx` - Interactive calculator for investment returns
- `src/imports/CustomerDashboardHome.tsx` - Main dashboard component (large, Figma-generated)
- `src/styles/globals.css` - Design system variables and Tailwind configuration

### Asset Management

The project uses a unique Figma asset import system:
- Assets are referenced as `figma:asset/[hash].png`
- Vite config maps these to actual file paths in `src/assets/`
- This preserves the connection to the original Figma design

### Component Patterns

- **UI Components**: Located in `src/components/ui/`, follow the shadcn/ui pattern with Radix primitives
- **Feature Components**: Domain-specific components in dedicated folders (e.g., `offerDetails/`)
- **Figma Components**: Auto-generated components in `src/imports/` and `src/components/figma/`

### Styling Approach

- Uses Tailwind CSS with extensive custom CSS variables
- Design system supports both light and dark themes
- Color scheme uses OKLCH color space for better color consistency
- Custom font: Quicksand (imported from Google Fonts)

## Development Notes

- **No TypeScript Configuration**: Project relies on Vite's default TypeScript handling
- **No Linting/Formatting**: No ESLint, Prettier, or other code quality tools configured
- **Asset Strategy**: Figma assets are pre-exported and mapped via Vite aliases
- **Islamic Finance Focus**: Components and data models are specialized for Halal investment products

## Domain Context

This application manages **cattle investment pools** following Islamic finance principles:
- **Mudarabah contracts** (profit-sharing agreements)
- **Shariah compliance** requirements
- **Risk assessment** and investment calculations
- **Farmer partnerships** and livestock management
- **Zakat eligibility** considerations

The main data model in `constants.ts` represents a complete cattle investment opportunity with financial projections, livestock details, farmer information, and timeline milestones.