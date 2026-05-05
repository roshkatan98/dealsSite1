import { getRequestConfig } from 'next-intl/server';

const locales = ['he', 'en'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async (params) => {
  const locale = (params.locale as string) || 'he';
  const validLocale = locales.includes(locale as Locale) ? locale : 'he';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
    timeZone: 'Asia/Jerusalem',
  } as any;
});
