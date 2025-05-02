
import React from 'react';
import { Link } from 'react-router-dom';
import { IndianRupee, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center">
              <IndianRupee size={28} className="text-primary mr-1" />
              <span className="text-2xl font-racing">SuperBike Shoppe</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              India's premier destination for high-performance motorcycles. 
              We offer the best selection of superbikes from leading manufacturers worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/category/sport" className="text-muted-foreground hover:text-primary transition-colors">Sport Bikes</Link>
              </li>
              <li>
                <Link to="/category/naked" className="text-muted-foreground hover:text-primary transition-colors">Naked Bikes</Link>
              </li>
              <li>
                <Link to="/category/adventure" className="text-muted-foreground hover:text-primary transition-colors">Adventure Bikes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brand/ducati" className="text-muted-foreground hover:text-primary transition-colors">Ducati</Link>
              </li>
              <li>
                <Link to="/brand/bmw" className="text-muted-foreground hover:text-primary transition-colors">BMW</Link>
              </li>
              <li>
                <Link to="/brand/kawasaki" className="text-muted-foreground hover:text-primary transition-colors">Kawasaki</Link>
              </li>
              <li>
                <Link to="/brand/ktm" className="text-muted-foreground hover:text-primary transition-colors">KTM</Link>
              </li>
              <li>
                <Link to="/brand/honda" className="text-muted-foreground hover:text-primary transition-colors">Honda</Link>
              </li>
              <li>
                <Link to="/brand/yamaha" className="text-muted-foreground hover:text-primary transition-colors">Yamaha</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary min-w-[20px] mt-1" />
                <span className="text-muted-foreground">
                  123 Motorcycle Lane, 
                  <br />Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary" />
                <span className="text-muted-foreground">info@superbikeshoppe.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} SuperBike Shoppe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-primary transition-colors">Shipping</Link>
            <Link to="/returns" className="hover:text-primary transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
