'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, Shirt, Home, Dumbbell, Sparkles, Gamepad2, BookOpen, Car } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  shirt: Shirt,
  home: Home,
  dumbbell: Dumbbell,
  sparkles: Sparkles,
  gamepad: Gamepad2,
  book: BookOpen,
  car: Car,
};

const categories = [
  { id: 'electronics', name: 'אלקטרוניקה', nameEn: 'Electronics', icon: 'smartphone', color: 'bg-blue-100 text-blue-600' },
  { id: 'fashion', name: 'אופנה', nameEn: 'Fashion', icon: 'shirt', color: 'bg-pink-100 text-pink-600' },
  { id: 'home', name: 'בית וגן', nameEn: 'Home & Garden', icon: 'home', color: 'bg-green-100 text-green-600' },
  { id: 'sports', name: 'ספורט', nameEn: 'Sports', icon: 'dumbbell', color: 'bg-orange-100 text-orange-600' },
  { id: 'beauty', name: 'טיפוח', nameEn: 'Beauty', icon: 'sparkles', color: 'bg-purple-100 text-purple-600' },
  { id: 'toys', name: 'צעצועים', nameEn: 'Toys', icon: 'gamepad', color: 'bg-yellow-100 text-yellow-600' },
  { id: 'books', name: 'ספרים', nameEn: 'Books', icon: 'book', color: 'bg-indigo-100 text-indigo-600' },
  { id: 'automotive', name: 'רכב', nameEn: 'Automotive', icon: 'car', color: 'bg-red-100 text-red-600' },
];

export default function Categories() {
  const t = useTranslations('categories');
  const locale = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {locale === 'he' ? cat.name : cat.nameEn}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
