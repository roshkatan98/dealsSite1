'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Sparkles, TrendingDown, Truck } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-10"
          >
            {t('subtitle')}
          </motion.p>

          {/* Main Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-5 pr-32 py-4 rounded-2xl border-2 border-gray-200 bg-white shadow-lg focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-base"
                dir={locale === 'he' ? 'rtl' : 'ltr'}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">{t('searchButton')}</span>
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: Sparkles, text: locale === 'he' ? 'מבצעים יומיים' : 'Daily Deals' },
              { icon: TrendingDown, text: locale === 'he' ? 'הנחות עד 70%' : 'Up to 70% Off' },
              { icon: Truck, text: locale === 'he' ? 'משלוח חינם' : 'Free Shipping' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
