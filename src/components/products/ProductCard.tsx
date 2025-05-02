
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div className={`group card-hover ${className || ''}`}>
      <Link to={`/product/${product.id}`} className="block rounded-lg overflow-hidden">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105" 
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex justify-between items-end">
              <h3 className="text-white font-bold text-lg">{product.name}</h3>
              <p className="text-white font-medium text-right">{formatPrice(product.price)}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">{product.brand}</span>
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">{product.engine} | {product.power}</p>
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
