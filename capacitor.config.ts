
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pizzadoughcalc.app',
  appName: 'Pizza Dough Calculator',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFFFFF",
      splashImmersive: true,
      androidSplashResourceName: "splash"
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
