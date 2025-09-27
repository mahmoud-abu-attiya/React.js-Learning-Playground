# React Multiple Languages (i18n)

This project demonstrates how to implement **multi-language support** in a React application using **i18next**.  
The user can switch between **English** and **Arabic** with a toggle button, and the language preference is saved in `localStorage`.

---
![React Multiple Languages (i18n) gif](https://i.postimg.cc/2yth8Nnv/React-Multiple-Languagesi18n-ezgif-com-video-to-gif-converter.gif)
---

## Features
- 🌐 Language switcher button (English ↔ Arabic)
- 💾 Store selected language in `localStorage`
- 🔄 Automatic language detection from browser settings
- 📱 Responsive UI styled with TailwindCSS
- 🎨 Beautiful toggle switch with language indicators
- ⚡ TypeScript support for type safety
- 🔧 Comprehensive comments explaining the implementation
- 🔄 **RTL/LTR Direction Support** - Automatic layout direction based on language
- 🎯 **Smart Layout Adaptation - Components automatically adjust for RTL/Arabic

---

## Tech Stack
- **React.js** (latest version)
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **i18next** for internationalization
- **react-i18next** for React integration
- **i18next-browser-languagedetector** for language detection

---

## Project Structure
```
src/
├── i18n/
│   ├── index.ts              # i18next configuration
│   └── locales/
│       ├── en.json           # English translations
│       └── ar.json           # Arabic translations
├── components/
│   ├── LanguageSwitcher.tsx  # Language toggle component
│   └── Home.tsx              # Main content with translations
├── hooks/
│   └── useDirection.ts       # RTL/LTR direction management hook
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # TailwindCSS imports + RTL styles
```

---

## Key Implementation Details

### 1. i18next Setup (`src/i18n/index.ts`)
- Configures i18next with English and Arabic languages
- Sets up language detection from localStorage and browser
- Defines fallback language (English)
- Configures React integration

### 2. Translation Files (`src/i18n/locales/`)
- **en.json**: English translations
- **ar.json**: Arabic translations
- Structured JSON with nested objects for organization

### 3. LanguageSwitcher Component (`src/components/LanguageSwitcher.tsx`)
- Toggle button to switch between languages
- Visual indicators for current language
- Automatic localStorage persistence
- Accessible with proper ARIA labels

### 4. Home Component (`src/components/Home.tsx`)
- Demonstrates translation usage with `useTranslation` hook
- Displays translated content dynamically
- Responsive design with TailwindCSS

### 5. RTL/LTR Direction Support (`src/hooks/useDirection.ts`)
- **Automatic Direction Detection**: Detects language and sets appropriate direction
- **HTML Document Updates**: Updates `dir` and `lang` attributes on document
- **Body Class Management**: Adds/removes RTL/LTR classes for styling
- **Dynamic Updates**: Responds to language changes in real-time
- **TypeScript Support**: Fully typed direction management

### 6. localStorage Persistence
- Language selection automatically saved to localStorage
- Restored on app reload
- Key: `i18nextLng`

---

## Installation & Usage
### Download folder as a zip file
Get Tailwind Dark Mode Switch [click here](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fmahmoud-abu-attiya%2FReact.js-Learning-Playground%2Ftree%2Fmain%2Freact-multiple-languages)

### Run after Extract the folder

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
---

## How It Works

1. **Language Detection**: The app detects the user's preferred language from:
   - localStorage (if previously set)
   - Browser language settings
   - Falls back to English

2. **Translation Loading**: i18next loads the appropriate translation file based on the detected language

3. **Language Switching**: Users can toggle between English and Arabic using the switch button

4. **Persistence**: The selected language is automatically saved to localStorage and restored on subsequent visits

5. **Dynamic Updates**: All text content updates immediately when the language is switched

6. **RTL/LTR Support**: Layout direction automatically changes based on language:
   - **English**: LTR (Left-to-Right) layout
   - **Arabic**: RTL (Right-to-Left) layout
   - **Automatic**: HTML `dir` attribute and body classes update dynamically

---

## Code Comments

The codebase includes comprehensive comments explaining:
- i18next configuration and setup
- Translation file structure
- LanguageSwitcher component logic
- localStorage persistence mechanism
- useTranslation hook usage
- Component architecture and design decisions
- **RTL/LTR direction management**
- **Dynamic layout adaptation**
- **HTML document direction handling**

---

## Customization

### Adding New Languages
1. Create a new JSON file in `src/i18n/locales/` (e.g., `fr.json` for French)
2. Add the language code to the `supportedLngs` array in `src/i18n/index.ts`
3. Add the language resource to the `resources` object
4. Update the LanguageSwitcher component to handle the new language

### Adding New Translations
1. Add new keys to the translation JSON files
2. Use the `t()` function in components to access translations
3. The translations will automatically update when the language is switched

---

## Browser Support
- Modern browsers with ES6+ support
- localStorage support for language persistence
- CSS Grid and Flexbox support for responsive design
- **RTL Support**: Full RTL layout support for Arabic language
- **Direction Attributes**: HTML `dir` attribute support

---

## RTL/LTR Features

### 🎯 **Automatic Direction Detection**
- Detects language and automatically sets appropriate direction
- Updates HTML document `dir` and `lang` attributes
- Manages body classes for RTL/LTR styling

### 🔄 **Dynamic Layout Adaptation**
- Components automatically adjust layout based on language
- Text alignment changes (left ↔ right)
- Flexbox direction reverses for RTL
- Spacing and margins adjust appropriately

### 🎨 **RTL-Specific Styling**
- Custom CSS rules for RTL layouts
- TailwindCSS RTL utilities
- Proper text direction handling
- Icon and image positioning

### 📱 **Responsive RTL Support**
- Mobile-friendly RTL layouts
- Touch-friendly RTL interactions
- Proper spacing and alignment on all devices
