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
- 🔄 **RTL/LTR Direction Support** - Automatic layout direction based on language

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
