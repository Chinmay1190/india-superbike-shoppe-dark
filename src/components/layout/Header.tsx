
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  IndianRupee,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { name: "Sport", href: "/category/sport" },
  { name: "Naked", href: "/category/naked" },
  { name: "Adventure", href: "/category/adventure" },
  { name: "Cruiser", href: "/category/cruiser" },
];

const brands = [
  { name: "Ducati", href: "/brand/ducati" },
  { name: "BMW", href: "/brand/bmw" },
  { name: "Kawasaki", href: "/brand/kawasaki" },
  { name: "KTM", href: "/brand/ktm" },
  { name: "Honda", href: "/brand/honda" },
  { name: "Yamaha", href: "/brand/yamaha" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/90 backdrop-blur-md shadow-md py-2" 
        : "bg-background py-4"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <IndianRupee size={28} className="text-primary mr-1" />
            <span className="text-2xl font-racing">SuperBike Shoppe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="group relative">
              <button className="font-medium hover:text-primary transition-colors flex items-center">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1 rounded-md bg-popover ring-1 ring-black ring-opacity-5">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <button className="font-medium hover:text-primary transition-colors flex items-center">
                Brands
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1 rounded-md bg-popover ring-1 ring-black ring-opacity-5">
                  {brands.map((brand) => (
                    <Link
                      key={brand.name}
                      to={brand.href}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative" 
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon" aria-label="User profile">
                <User size={22} />
              </Button>
            </Link>
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Search">
                <Search size={22} />
              </Button>
            </Link>
            <Button
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-4 animate-fade-in">
            <div className="space-y-3 flex flex-col">
              <Link 
                to="/" 
                className="px-2 py-1 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <details className="group">
                <summary className="px-2 py-1 hover:bg-muted rounded-md transition-colors list-none flex justify-between items-center cursor-pointer">
                  Categories
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block px-2 py-1 hover:bg-muted rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className="px-2 py-1 hover:bg-muted rounded-md transition-colors list-none flex justify-between items-center cursor-pointer">
                  Brands
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  {brands.map((brand) => (
                    <Link
                      key={brand.name}
                      to={brand.href}
                      className="block px-2 py-1 hover:bg-muted rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link 
                to="/about" 
                className="px-2 py-1 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="px-2 py-1 hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/search" 
                className="px-2 py-1 hover:bg-muted rounded-md transition-colors flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search size={18} className="mr-2" />
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
