import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'de', 'it', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en',
});