import { notFound } from 'next/navigation';
import { getProductById, products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
