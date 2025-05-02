
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
  className?: string;
}

const ProductGrid = ({ products, title, className }: ProductGridProps) => {
  return (
    <div className={`${className || ''}`}>
      {title && (
        <h2 className="text-3xl font-racing mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
