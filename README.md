
# Pizza Dough Calculator

A comprehensive pizza dough calculator application that helps you create perfect pizza dough recipes with customizable hydration levels, fermentation methods, and more.

## Features

- **Multiple Pizza Styles**: Neapolitan and New York style pizza dough recipes
- **Advanced Fermentation Methods**: Direct, Poolish, and Biga methods
- **Real-time Calculation**: Live updates as you adjust parameters
- **Mobile-Friendly Design**: Responsive layout works on all devices
- **Progressive Web App (PWA)**: Install on your device and use offline
- **Accessibility**: WCAG 2.1 compliant

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pizza-dough-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build for web deployment
npm run build

# Preview the production build locally
npm run preview

# Build for mobile apps (Capacitor)
npm run build:capacitor
```

## Mobile App Development

This project uses Capacitor to create native mobile apps from the web codebase.

### Prerequisites

- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)

### Building Mobile Apps

```bash
# Install Capacitor dependencies
npm install @capacitor/core @capacitor/android @capacitor/ios

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add android
npx cap add ios

# Build the web app and sync with native projects
npm run build:capacitor

# Open in IDE
npx cap open android
npx cap open ios
```

### Submitting to App Stores

#### Android (Google Play Store)

1. Generate a signed APK/AAB:
   ```bash
   cd android
   ./gradlew bundleRelease
   ```
2. The AAB file will be in `android/app/build/outputs/bundle/release/`
3. Create a Google Play Developer account and follow the submission process

#### iOS (Apple App Store)

1. In Xcode, select a distribution certificate and provisioning profile
2. Select Product > Archive
3. After archiving, use the Organizer to upload to App Store Connect
4. Log in to App Store Connect to complete the submission

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_AD_CLIENT=ca-pub-yourpubid
VITE_AD_SLOT=1234567890
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Deployment

### Building for Production

```bash
npm run build
```

The build will be in the `dist` directory, which can be deployed to any static hosting service.

### Recommended Hosting Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Excellent for React applications with seamless deployment
- **Firebase Hosting**: Great for projects using Firebase services
- **GitHub Pages**: Free hosting for open-source projects

## License

This project is licensed under the MIT License - see the LICENSE file for details.
