'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-slate-950 text-slate-300" dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Smart Home Finds</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {locale === 'he'
                ? 'Smart Home Finds - פלטפורמה חכמה לדילים נבחרים לבית החכם.'
                : 'Smart Home Finds - a curated platform for smart home deals and alerts.'}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('about')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{t('contact')}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{t('privacy')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'he' ? 'קטגוריות' : 'Categories'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{locale === 'he' ? 'בית חכם' : 'Smart Home'}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{locale === 'he' ? 'אבטחה' : 'Security'}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{locale === 'he' ? 'תאורה' : 'Lighting'}</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">{locale === 'he' ? 'אוטומציה' : 'Automation'}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>support@smarthomefinds.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>1-800-SMART-HOME</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{locale === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          © 2025 Smart Home Finds. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}
