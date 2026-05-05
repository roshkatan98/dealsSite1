'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Share2, ArrowRight, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const locale = useLocale();
  const isHebrew = locale === 'he';

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const ArrowIcon = isHebrew ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 transition-colors"
          >
            <ArrowIcon className="w-4 h-4" />
            <span>{isHebrew ? 'חזרה לדילים' : 'Back to Deals'}</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={isHebrew ? product.title : product.titleEn}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  {isHebrew ? product.badge : product.badgeEn}
                </div>
              )}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                -{product.discount}%
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
            dir={isHebrew ? 'rtl' : 'ltr'}
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex-1">
              <div className="text-sm text-orange-600 font-medium mb-2">
                {isHebrew
                  ? product.category === 'electronics' ? 'אלקטרוניקה'
                  : product.category === 'fashion' ? 'אופנה'
                  : product.category === 'home' ? 'בית וגן'
                  : product.category === 'sports' ? 'ספורט'
                  : product.category === 'beauty' ? 'טיפוח'
                  : product.category === 'toys' ? 'צעצועים'
                  : product.category === 'books' ? 'ספרים'
                  : product.category === 'automotive' ? 'רכב'
                  : product.category
                  : product.categoryEn}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {isHebrew ? product.title : product.titleEn}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-gray-700">{product.rating}</span>
                <span className="text-gray-400">({product.reviews.toLocaleString()} {isHebrew ? 'ביקורות' : 'reviews'})</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-bold text-gray-900">₪{product.price}</span>
                <span className="text-xl text-gray-400 line-through">₪{product.originalPrice}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  {isHebrew ? 'חסכת' : 'Save'} ₪{product.originalPrice - product.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {isHebrew ? product.description : product.descriptionEn}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  {isHebrew ? 'קנה עכשיו' : 'Buy Now'}
                </button>
                <button className="w-14 h-14 border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 hover:text-blue-500 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <Truck className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-gray-600 text-center">
                    {isHebrew ? 'משלוח חינם' : 'Free Shipping'}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-gray-600 text-center">
                    {isHebrew ? 'אחריות שנה' : '1 Year Warranty'}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl">
                  <RotateCcw className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-gray-600 text-center">
                    {isHebrew ? 'החזר 30 יום' : '30 Day Return'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {isHebrew ? 'מוצרים דומים' : 'Related Products'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
