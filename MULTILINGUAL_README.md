# Multilingual Support Implementation

This Next.js SaaS template now includes comprehensive multilingual support with English ↔ Arabic language switching and RTL/LTR direction support.

## Features

✅ **i18next Integration**: Complete i18next setup with react-i18next
✅ **Language Switcher**: Dropdown component with flag icons
✅ **RTL/LTR Support**: Automatic direction switching for Arabic
✅ **localStorage Persistence**: Language choice persists across sessions
✅ **SSR Compatible**: Works with Next.js App Router and server-side rendering
✅ **Comprehensive Translations**: Complete translation files for both languages
✅ **Mobile Support**: Language switcher available in mobile menu

## File Structure

```
src/
├── i18n/
│   ├── index.ts                 # i18next configuration
│   └── locales/
│       ├── en.json              # English translations
│       └── ar.json              # Arabic translations
├── hooks/
│   └── useLanguage.ts           # Custom hook for language management
├── components/
│   ├── shared/
│   │   ├── LanguageSwitcher.tsx # Language switcher component
│   │   └── I18nProvider.tsx     # i18n provider wrapper
│   └── examples/
│       └── TranslatedExample.tsx # Example usage component
└── app/
    ├── layout.tsx               # Updated root layout
    ├── globals.css              # RTL/LTR styles
    └── translation-demo/        # Demo page
        └── page.tsx
```

## Usage

### 1. Basic Translation Usage

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### 2. Using the Language Hook

```tsx
import { useLanguage } from '@/hooks/useLanguage';

function MyComponent() {
  const { currentLanguage, isRTL, changeLanguage } = useLanguage();
  
  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage('ar')}>
        Switch to Arabic
      </button>
    </div>
  );
}
```

### 3. Adding the Language Switcher

The LanguageSwitcher component is already integrated into:
- Desktop navigation (NavbarOne)
- Mobile menu

To add it to other components:

```tsx
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

function MyHeader() {
  return (
    <header>
      <nav>
        {/* Your navigation items */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
```

## Translation Keys Structure

The translation files are organized hierarchically:

```json
{
  "common": {
    "home": "Home",
    "about": "About"
  },
  "hero": {
    "title": "Smart Companies Choose SUMU",
    "subtitle": "Transform your business...",
    "cta": "Start Your Free Trial"
  },
  "features": {
    "title": "Powerful Features",
    "feature1": {
      "title": "Advanced Analytics",
      "description": "Get deep insights..."
    }
  }
}
```

## RTL/LTR Support

The system automatically handles:

1. **Document Direction**: Updates `document.documentElement.dir`
2. **Language Attribute**: Updates `document.documentElement.lang`
3. **Body Classes**: Adds `rtl` or `ltr` classes to body
4. **CSS Styles**: Comprehensive RTL-specific styles in `globals.css`

### RTL-Specific CSS Classes

```css
.rtl .text-left { text-align: right; }
.rtl .text-right { text-align: left; }
.rtl .ml-auto { margin-left: 0; margin-right: auto; }
.rtl .flex-row { flex-direction: row-reverse; }
```

## Adding New Translations

### 1. Add to Translation Files

**English (en.json):**
```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}
```

**Arabic (ar.json):**
```json
{
  "newSection": {
    "title": "عنوان القسم الجديد",
    "description": "وصف القسم الجديد"
  }
}
```

### 2. Use in Components

```tsx
const { t } = useTranslation();
return <h2>{t('newSection.title')}</h2>;
```

## Configuration

### i18next Configuration

The main configuration is in `src/i18n/index.ts`:

```typescript
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    // ... other options
  });
```

### Supported Languages

Currently supported:
- **English (en)**: LTR
- **Arabic (ar)**: RTL

To add more languages:
1. Add language files in `src/i18n/locales/`
2. Update the `languages` array in `LanguageSwitcher.tsx`
3. Add RTL languages to the `rtlLanguages` array in `useLanguage.ts`

## Demo Page

Visit `/translation-demo` to see the multilingual system in action with:
- Language switching
- RTL/LTR direction changes
- Form elements
- Text alignment
- Complete UI examples

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Translations are loaded on-demand
- Language detection is cached in localStorage
- RTL/LTR switching is optimized with CSS classes
- No impact on initial page load

## Troubleshooting

### Language Not Switching
- Check browser console for errors
- Verify translation files are properly imported
- Ensure I18nProvider wraps your app

### RTL Styles Not Applied
- Check if `rtl` class is added to body
- Verify CSS is properly loaded
- Check for conflicting styles

### Translations Not Loading
- Verify file paths in i18n configuration
- Check JSON syntax in translation files
- Ensure proper import statements

## Best Practices

1. **Use Semantic Keys**: Organize translations by feature/page
2. **Consistent Naming**: Use consistent naming conventions
3. **Context-Aware**: Consider context when translating
4. **Test Both Languages**: Always test in both languages
5. **RTL Testing**: Test RTL layout thoroughly
6. **Performance**: Use lazy loading for large translation files

## Contributing

When adding new features:
1. Add translations to both language files
2. Test RTL/LTR switching
3. Update this documentation
4. Test on mobile devices

---

**Note**: This implementation replaces the previous next-intl setup with a more robust i18next solution that provides better RTL support and easier maintenance.
