'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-gray-300" dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DealFinder</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {locale === 'he'
                ? 'הפלטפורמה המובילה למציאת הדילים הטובים ביותר באינטרנט. חסוך כסף בכל קניה.'
                : 'The leading platform for finding the best deals online. Save money on every purchase.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('about')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">{t('contact')}</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">{t('privacy')}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'he' ? 'קטגוריות' : 'Categories'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">
                {locale === 'he' ? 'אלקטרוניקה' : 'Electronics'}
              </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">
                {locale === 'he' ? 'אופנה' : 'Fashion'}
              </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">
                {locale === 'he' ? 'בית וגן' : 'Home & Garden'}
              </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">
                {locale === 'he' ? 'ספורט' : 'Sports'}
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>support@dealfinder.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>1-800-DEALS</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>{locale === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 DealFinder. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}
