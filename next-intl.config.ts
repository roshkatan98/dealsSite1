import { LocalePrefix } from 'next-intl/routing';

export const locales = ['he', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'he';
export const localePrefix: LocalePrefix = 'always';
