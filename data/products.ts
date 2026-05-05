export interface Product {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  categoryEn: string;
  rating: number;
  reviews: number;
  discount: number;
  inStock: boolean;
  badge?: string;
  badgeEn?: string;
}

export const categories = [
  { id: 'electronics', name: 'אלקטרוניקה', nameEn: 'Electronics', icon: 'smartphone' },
  { id: 'fashion', name: 'אופנה', nameEn: 'Fashion', icon: 'shirt' },
  { id: 'home', name: 'בית וגן', nameEn: 'Home & Garden', icon: 'home' },
  { id: 'sports', name: 'ספורט', nameEn: 'Sports', icon: 'dumbbell' },
  { id: 'beauty', name: 'טיפוח', nameEn: 'Beauty', icon: 'sparkles' },
  { id: 'toys', name: 'צעצועים', nameEn: 'Toys', icon: 'gamepad' },
  { id: 'books', name: 'ספרים', nameEn: 'Books', icon: 'book' },
  { id: 'automotive', name: 'רכב', nameEn: 'Automotive', icon: 'car' },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'אוזניות אלחוטיות פרימיום',
    titleEn: 'Premium Wireless Earbuds',
    description: 'אוזניות אלחוטיות עם סינון רעשים אקטיבי, סאונד מקצועי וסוללה ל-30 שעות. כולל תמיכה בבלוטות\' 5.3 וטעינה אלחוטית.',
    descriptionEn: 'Wireless earbuds with active noise cancellation, professional sound quality and 30-hour battery. Includes Bluetooth 5.3 and wireless charging support.',
    price: 199,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    category: 'electronics',
    categoryEn: 'Electronics',
    rating: 4.8,
    reviews: 2341,
    discount: 56,
    inStock: true,
    badge: 'מבצע חם',
    badgeEn: 'Hot Deal',
  },
  {
    id: '2',
    title: 'שעון חכם ספורט',
    titleEn: 'Smart Sport Watch',
    description: 'שעון חכם עם מעקב כושר מתקדם, מד דופק, GPS מובנה ומסך AMOLED צבעוני. עמיד במים עד 50 מטר.',
    descriptionEn: 'Smart watch with advanced fitness tracking, heart rate monitor, built-in GPS and colorful AMOLED display. Water resistant up to 50 meters.',
    price: 349,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'electronics',
    categoryEn: 'Electronics',
    rating: 4.6,
    reviews: 1892,
    discount: 50,
    inStock: true,
    badge: 'נמכר ביותר',
    badgeEn: 'Best Seller',
  },
  {
    id: '3',
    title: 'מכונת קפה אוטומטית',
    titleEn: 'Automatic Coffee Machine',
    description: 'מכונת קפה אוטומטית עם טוחן קפה מובנה, מערכת קצף חלב ו-12 תוכנות משקאות. תצוגת מגע צבעונית.',
    descriptionEn: 'Automatic coffee machine with built-in grinder, milk frothing system and 12 beverage programs. Colorful touch display.',
    price: 1299,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    category: 'home',
    categoryEn: 'Home & Garden',
    rating: 4.9,
    reviews: 876,
    discount: 48,
    inStock: true,
    badge: 'דיל היום',
    badgeEn: 'Deal of the Day',
  },
  {
    id: '4',
    title: 'מזוודה חכמה קשיחה',
    titleEn: 'Smart Hard Shell Suitcase',
    description: 'מזוודת פוליקרבונט קשיחה עם מנעול טרולי, מטען USB מובנה וגלגלים שקטים 360 מעלות. גודל 28 אינץ\'.',
    descriptionEn: 'Hard shell polycarbonate suitcase with TSA lock, built-in USB charger and 360-degree silent wheels. 28 inch size.',
    price: 279,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'fashion',
    categoryEn: 'Fashion',
    rating: 4.5,
    reviews: 654,
    discount: 53,
    inStock: true,
  },
  {
    id: '5',
    title: 'רובוט שואב אבק חכם',
    titleEn: 'Smart Robot Vacuum',
    description: 'רובוט שואב אבק עם מיפוי לייזר, ניווט חכם, שטיפה רטובה ותמיכה בקול של אלקסה וגוגל הום.',
    descriptionEn: 'Robot vacuum with laser mapping, smart navigation, wet mopping and Alexa & Google Home voice support.',
    price: 899,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6d54?w=400&h=400&fit=crop',
    category: 'home',
    categoryEn: 'Home & Garden',
    rating: 4.7,
    reviews: 3421,
    discount: 50,
    inStock: true,
    badge: 'מומלץ',
    badgeEn: 'Recommended',
  },
  {
    id: '6',
    title: 'מצלמת אבטחה WiFi',
    titleEn: 'WiFi Security Camera',
    description: 'מצלמת אבטחה אלחוטית עם ראיית לילה, זיהוי תנועה חכם, אודיו דו-כיווני ואחסון ענן. רזולוציה 2K.',
    descriptionEn: 'Wireless security camera with night vision, smart motion detection, two-way audio and cloud storage. 2K resolution.',
    price: 149,
    originalPrice: 329,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=400&fit=crop',
    category: 'electronics',
    categoryEn: 'Electronics',
    rating: 4.4,
    reviews: 1234,
    discount: 55,
    inStock: true,
  },
  {
    id: '7',
    title: 'נעלי ריצה אולטרה לייט',
    titleEn: 'Ultra Light Running Shoes',
    description: 'נעלי ריצה קלות במיוחד עם סוליית קצף אנרגטי, רשת נושמת ותמיכה בקשתית. מתאימות למרathons ואימונים.',
    descriptionEn: 'Ultra lightweight running shoes with energetic foam sole, breathable mesh and arch support. Suitable for marathons and training.',
    price: 189,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'sports',
    categoryEn: 'Sports',
    rating: 4.6,
    reviews: 987,
    discount: 53,
    inStock: true,
  },
  {
    id: '8',
    title: 'מנורת שולחן LED חכמה',
    titleEn: 'Smart LED Desk Lamp',
    description: 'מנורת שולחן חכמה עם שליטה בגוון ובעוצמה, טעינה אלחוטית מובנית וחיישן אור סביבתי. עיצוב מינימליסטי.',
    descriptionEn: 'Smart desk lamp with color and brightness control, built-in wireless charging and ambient light sensor. Minimalist design.',
    price: 89,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    category: 'home',
    categoryEn: 'Home & Garden',
    rating: 4.3,
    reviews: 543,
    discount: 55,
    inStock: true,
  },
  {
    id: '9',
    title: 'ערכת טיפוח פנים פרימיום',
    titleEn: 'Premium Face Care Set',
    description: 'ערכת טיפוח פנים מלאה הכוללת סרום ויטמין C, קרם לחות, מסכת פנים וסרום רטינול. מותג יוקרה.',
    descriptionEn: 'Complete face care set including Vitamin C serum, moisturizer, face mask and retinol serum. Luxury brand.',
    price: 159,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=400&fit=crop',
    category: 'beauty',
    categoryEn: 'Beauty',
    rating: 4.7,
    reviews: 765,
    discount: 54,
    inStock: true,
  },
  {
    id: '10',
    title: 'טאבלט 10 אינץ\' פרו',
    titleEn: '10-inch Pro Tablet',
    description: 'טאבלט 10 אינץ\' עם מסך 2K, מעבד 8 ליבות, 6GB RAM ו-128GB אחסון. כולל עט סטיילוס ומקלדת נשלפת.',
    descriptionEn: '10-inch tablet with 2K display, octa-core processor, 6GB RAM and 128GB storage. Includes stylus pen and detachable keyboard.',
    price: 599,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    category: 'electronics',
    categoryEn: 'Electronics',
    rating: 4.5,
    reviews: 1567,
    discount: 50,
    inStock: true,
    badge: 'חדש',
    badgeEn: 'New',
  },
  {
    id: '11',
    title: 'מצעי כותנה מצרית פרימיום',
    titleEn: 'Premium Egyptian Cotton Sheets',
    description: 'מצעי כותנה מצרית 100% אורגנית, צפיפות 1000 חוטים. סט מלא הכולל סדין, ציפה ו-2 ציפיות.',
    descriptionEn: '100% organic Egyptian cotton sheets, 1000 thread count. Full set including fitted sheet, duvet cover and 2 pillowcases.',
    price: 229,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop',
    category: 'home',
    categoryEn: 'Home & Garden',
    rating: 4.8,
    reviews: 432,
    discount: 54,
    inStock: true,
  },
  {
    id: '12',
    title: 'אופניים חשמליים מתקפלים',
    titleEn: 'Folding Electric Bike',
    description: 'אופניים חשמליים מתקפלים עם מנוע 250W, סוללה 36V, טווח 40 ק"מ ומהירות מקסימלית 25 קמ"ש. משקל 18 ק"ג.',
    descriptionEn: 'Folding electric bike with 250W motor, 36V battery, 40km range and max speed 25km/h. Weight 18kg.',
    price: 1899,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop',
    category: 'sports',
    categoryEn: 'Sports',
    rating: 4.6,
    reviews: 321,
    discount: 46,
    inStock: true,
    badge: 'מבצע מוגבל',
    badgeEn: 'Limited Offer',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedDeals(limit: number = 8): Product[] {
  return products
    .filter(p => p.discount >= 45)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
}
