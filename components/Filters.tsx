'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

export default function Filters() {
  const t = useTranslations('filters');
  const locale = useLocale();
  const isHebrew = locale === 'he';
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('discount');

  const categories = [
    { id: 'all', name: isHebrew ? 'הכל' : 'All' },
    { id: 'electronics', name: isHebrew ? 'אלקטרוניקה' : 'Electronics' },
    { id: 'fashion', name: isHebrew ? 'אופנה' : 'Fashion' },
    { id: 'home', name: isHebrew ? 'בית וגן' : 'Home & Garden' },
    { id: 'sports', name: isHebrew ? 'ספורט' : 'Sports' },
    { id: 'beauty', name: isHebrew ? 'טיפוח' : 'Beauty' },
  ];

  const sortOptions = [
    { id: 'discount', name: t('sortDiscount') },
    { id: 'priceLow', name: t('sortPriceLow') },
    { id: 'priceHigh', name: t('sortPriceHigh') },
    { id: 'rating', name: t('sortRating') },
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">{t('title')}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{t('category')}:</span>
              <div className="flex gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-orange-100 text-orange-700'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-500">{t('priceRange')}:</span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-32 accent-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">₪{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 hidden sm:inline">{t('sortBy')}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 text-sm font-medium focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none bg-white"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-700 block mb-2">{t('category')}</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700 block mb-2">{t('priceRange')}</span>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="text-center text-sm text-gray-600 mt-1">₪0 - ₪{priceRange[1]}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
