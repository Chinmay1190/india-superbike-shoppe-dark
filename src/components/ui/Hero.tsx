
import React from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-black h-[80vh] min-h-[500px] mt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/placeholder.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center container-custom">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-racing text-white mb-4">
            <span className="text-primary">Ultimate</span> Performance.
            <br />
            <span className="text-primary">Ultimate</span> Experience.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            India's premier destination for high-performance motorcycles.
            Discover your dream ride from the world's top manufacturers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Bikes
              </Button>
            </Link>
            <Link to="/category/sport">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                Sport Models
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slanted Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </div>
  );
};

export default Hero;
