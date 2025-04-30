
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const resources = {
  en: {
    translation: {
      calculator: {
        flour: 'Flour',
        hydration: 'Hydration',
        ingredients: {
          amountDescription: 'The total amount of flour in grams',
          hydrationDescription: 'The water to flour ratio percentage',
          yeastType: 'Yeast Type',
          yeastDescription: 'Select the type of yeast you are using',
          freshYeast: 'Fresh Yeast',
          dryYeast: 'Dry Yeast',
          ballWeight: 'Dough Ball Weight',
          ballWeightDescription: 'Weight of each individual dough ball',
          ballCountResult: 'Makes approximately {{count}} dough ball(s)'
        }
      },
      auth: {
        signIn: 'Welcome Back',
        signInToAccess: 'Sign in to access all features',
        continueWithGoogle: 'Continue with Google',
        signInFailed: 'Sign in failed',
        unexpectedError: 'An unexpected error occurred',
        unlockProFeatures: 'Sign in to unlock premium features',
        continueWith: 'Continue with',
        continueAsGuest: 'Continue as Guest',
        signInSuccess: 'Successfully signed in',
        redirecting: 'Redirecting you to homepage'
      },
      common: {
        pleaseWait: 'Please wait...',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information'
      }
    }
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
