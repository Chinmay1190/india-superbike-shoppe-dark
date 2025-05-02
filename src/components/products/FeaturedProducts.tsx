
import React from 'react';
import { getFeaturedProducts } from '@/data/products';
import ProductGrid from './ProductGrid';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="container-custom py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-racing">Featured Bikes</h2>
        <Link to="/products">
          <Button variant="outline">View All</Button>
        </Link>
      </div>
      <ProductGrid products={featuredProducts} />
    </section>
  );
};

export default FeaturedProducts;
