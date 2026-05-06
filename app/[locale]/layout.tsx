import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as any) ? locale : 'he';

  const messages = await getMessages();

  return (
    <html lang={validLocale} dir={validLocale === 'he' ? 'rtl' : 'ltr'}>
      <body className="min-h-screen bg-white antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="w-full bg-lime-400 text-black text-center font-extrabold tracking-wide py-3 text-sm md:text-base border-b-4 border-black">
            SMART HOME FINDS - NEW VERSION
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
