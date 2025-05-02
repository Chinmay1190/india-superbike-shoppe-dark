
import React from 'react';
import Hero from '@/components/ui/Hero';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const sportBikes = getProductsByCategory('Sport').slice(0, 4);
  
  const categories = [
    {
      name: 'Sport',
      image: '/placeholder.svg',
      description: 'Race-inspired performance machines built for speed and agility',
      link: '/category/sport'
    },
    {
      name: 'Naked',
      image: '/placeholder.svg',
      description: 'Stripped-down bikes with upright riding position and powerful engines',
      link: '/category/naked'
    },
    {
      name: 'Adventure',
      image: '/placeholder.svg',
      description: 'Versatile motorcycles designed for both on and off-road riding',
      link: '/category/adventure'
    },
    {
      name: 'Cruiser',
      image: '/placeholder.svg',
      description: 'Comfortable bikes built for long-distance riding with style',
      link: '/category/cruiser'
    }
  ];
  
  const brands = [
    { name: 'Ducati', image: '/placeholder.svg', link: '/brand/ducati' },
    { name: 'BMW', image: '/placeholder.svg', link: '/brand/bmw' },
    { name: 'Kawasaki', image: '/placeholder.svg', link: '/brand/kawasaki' },
    { name: 'KTM', image: '/placeholder.svg', link: '/brand/ktm' },
    { name: 'Honda', image: '/placeholder.svg', link: '/brand/honda' },
    { name: 'Yamaha', image: '/placeholder.svg', link: '/brand/yamaha' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-racing mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              to={category.link} 
              key={category.name}
              className="group relative overflow-hidden rounded-lg card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-racing mb-2">{category.name}</h3>
                <p className="text-white/80 line-clamp-2 mb-3">{category.description}</p>
                <span className="text-primary font-semibold text-sm inline-block">
                  Explore {category.name} Bikes
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Sport Bikes Section */}
      <section className="bg-muted py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-racing">Sport Bikes</h2>
            <Link to="/category/sport">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <ProductGrid products={sportBikes} />
        </div>
      </section>
      
      {/* Top Brands Section */}
      <section className="container-custom py-16">
        <h2 className="text-4xl font-racing mb-8">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map(brand => (
            <Link 
              to={brand.link} 
              key={brand.name}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div className="w-20 h-20 p-2 mb-4 rounded-full bg-muted">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="font-medium">{brand.name}</span>
            </Link>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-black py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url('/placeholder.svg')`,
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-racing text-white mb-6">
            Ready to Own Your <span className="text-primary">Dream Bike</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore our collection of premium superbikes and find your perfect match.
            Professional advice, test rides, and easy financing available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Browse All Bikes
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
