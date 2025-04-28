## Overview
This is a health management application built with React that helps users track their health metrics, exercise records, and dietary habits. The application features a modern, responsive design with a focus on user experience and data visualization.

## Development Notes
- **Development Time**: > **⏱️ The project was completed within a 6-hour timeframe.**
- **Design Implementation**: Due to time constraints, the implementation focuses on core functionality and main design elements rather than pixel-perfect reproduction.

> 🙏 **Thank you very much for taking the time to review this submission!**

- **Priority Areas**:
  - Core feature implementation
  - Responsive layout
  - Basic user interactions
  - Essential UI components
  - Basic error handling

## Features
- **Dashboard**: Visual representation of health metrics with interactive charts
- **Record Management**: Track exercise and dietary records
- **Notification System**: Real-time notifications for achievements and reminders
- **Challenge System**: Engage with health-related challenges
- **Column Section**: Access health-related articles and tips

## Technology Stack
- React 18
- React Router v6
- Tailwind CSS
- Chart.js (for data visualization)

## Typography
The application uses the following Google Fonts:
- **Noto Sans JP**: Primary font for Japanese text
  - Weights: 300, 400, 500, 700
  - [Font Link](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
- **Inter**: Primary font for Latin text and numbers
  - Weights: 300, 400, 500, 600, 700
  - [Font Link](https://fonts.google.com/specimen/Inter)

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── layouts/       # Layout components
├── hooks/         # Custom React hooks
├── data/          # Data management
├── contexts/      # React contexts
├── services/      # API services
├── utils/         # Utility functions
├── styles/        # CSS styles
│   └── fonts.css  # Font configurations
└── assets/        # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Building for Production
```bash
npm run build
# or
yarn build
```

## Code Style Guide
- Use functional components with hooks
- Follow the React component file structure:
  1. Imports
  2. Component definition
  3. Helper functions
  4. Exports
- Use TypeScript for type safety
- Follow Airbnb React/JSX Style Guide
- Use appropriate font classes:
  - `font-jp` for Japanese text
  - `font-latin` for Latin text and numbers
  - Font weight utilities: `font-light`, `font-regular`, `font-medium`, `font-semibold`, `font-bold`

## Testing
```bash
npm test
# or
yarn test
```

## License
[License Type]
