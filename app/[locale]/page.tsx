import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Filters from '@/components/Filters';
import FeaturedDeals from '@/components/FeaturedDeals';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Filters />
      <FeaturedDeals />
    </>
  );
}
