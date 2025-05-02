
import React from 'react';
import { getAllProducts } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

const Products = () => {
  const products = getAllProducts();

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-racing mb-8">All Bikes</h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Products;
