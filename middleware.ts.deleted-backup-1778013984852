import createMiddleware from 'next-intl/middleware';

const locales = ['he', 'en'] as const;
const defaultLocale = 'he' as const;

export default createMiddleware({
  locales: ['he', 'en'],
  defaultLocale: 'he',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
