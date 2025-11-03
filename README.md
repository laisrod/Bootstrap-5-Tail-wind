# 🎓 Onboarding Tutorial App

Interactive React tutorial application with step-by-step navigation, developed to present learning tips in a dynamic and visually appealing way.

## Description

This project is an onboarding application that presents three learning tip stages:
- **Dedica moltes hores** - Time management
- **Programa projectes propis** - Personal projects
- **Procura descansar** - Rest and well-being

Each stage features a colorful illustration, title, description, and allows navigation between steps with smooth animations.

## Technologies Used

- **React** ^19.1.1 - UI library
- **TypeScript** ^5.9.3 - Static typing
- **Vite** ^7.1.7 - Build tool and dev server
- **ESLint** ^9.36.0 - Code quality linter

## Project Structure

```
src/
├── components/          # React components
│   ├── Card.tsx        # Main card container
│   ├── StepImage.tsx   # Image with directional animation
│   ├── StepContent.tsx # Title and description
│   ├── StepIndicator.tsx # Progress indicator (dots)
│   └── NavigationButtons.tsx # Navigation buttons
├── img/                # SVG images
├── App.tsx             # Main component (state and logic)
├── App.css             # Card styles and animations
├── index.css           # Global styles
├── main.tsx            # Entry point
└── types.ts            # Shared TypeScript types
```

## Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
git clone <repository-url>

# Install dependencies
npm install
```

### Run in development mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port indicated in the terminal).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linter

```bash
npm run lint
```

## Features

- Step navigation (next/previous)
- Clickable progress indicator
- Directional animations (image enters from left/right)
- Responsive layout
- Complete TypeScript typing
- Modular architecture (SRP - Single Responsibility Principle)

## Architecture

The project follows the **Single Responsibility Principle**, where each component has a single responsibility:

- **App.tsx**: Manages state (`currentStepIndex`, `direction`) and navigation handlers
- **Card.tsx**: Composes subcomponents
- **StepImage.tsx**: Renders image with direction-based animation
- **StepContent.tsx**: Displays title and description
- **StepIndicator.tsx**: Shows progress dots and allows direct navigation
- **NavigationButtons.tsx**: Circular navigation buttons (conditional)

## Data Flow

1. **App** maintains state (`currentStepIndex`, `direction`, `tutorialData`)
2. **App** selects current step and passes props to **Card**
3. **Card** composes **StepIndicator**, **StepImage**, **StepContent**, **NavigationButtons**
4. User interactions (clicks) update state in **App**
5. React re-renders with new data and CSS animations are applied

## 👤 Author

**Lais** - Developed for Sprint 5 of the IT Academy course

---

## Additional Documentation

For technical details about the implementation, refer to the code comments or each component's documentation.
