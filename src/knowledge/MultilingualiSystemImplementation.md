# Multilingual System Implementation with i18next

## Overview
DoughLab Pro is fully multilingual, supporting English, Portuguese, and Spanish languages. The implementation uses i18next, a powerful internationalization framework for JavaScript.

## Core Components

1. **Translation Files**
   - `src/locales/en.ts` - English translations
   - `src/locales/pt.ts` - Portuguese translations  
   - `src/locales/es.ts` - Spanish translations

2. **LanguageContext**
   - Manages the current language state
   - Persists language preference in localStorage
   - Provides the language switching functionality
   - Contains list of available languages

3. **LanguageSelector Component**
   - UI for switching between available languages
   - Shows current language code (EN, PT, ES)
   - Expands to show language options in their native names

## Translation Structure

The translations follow a nested structure for organization:

```typescript
{
  translation: {
    common: {
      // Common UI elements like buttons, headers, etc.
    },
    calculator: {
      // Calculator-specific terms
    },
    recipe: {
      // Recipe-related terminology
    },
    seo: {
      // SEO-related content for different pages
    }
    // Other sections...
  }
}
```

## Implementation Details

1. **i18next Configuration**
   - Browser language detection
   - Fallback to English when translations are missing
   - React integration with react-i18next

2. **Usage in Components**
   - Access translations with the `useTranslation` hook
   - Use the `t` function to retrieve translations
   - Format: `t('section.subsection.key', defaultValue)`

3. **Language Switching**
   - Language preference is stored in localStorage
   - When language changes, all translated content updates immediately
   - URL and content remain the same, only the language changes

4. **Language-Specific Content**
   - Recipe steps are stored in language-specific functions
   - Language parameter is passed to content retrieval functions
   - All UI elements use translation keys instead of hardcoded text

## SEO Considerations

1. **HTML Lang Attribute**
   - Updated dynamically based on selected language

2. **Alternate Language Links**
   - Provided in page head for search engines

3. **Translated Metadata**
   - Page titles, descriptions, and keywords are translated

## Best Practices Implemented

1. **Separation of Concerns**
   - Translation files separate from components
   - Language logic encapsulated in context

2. **Namespacing**
   - Structured translation keys prevent conflicts
   - Logical organization of translation content

3. **Default Values**
   - Fallback text provided when translations are missing

4. **Consistent Format**
   - Standard patterns for accessing translations
   - Consistent naming conventions for keys
