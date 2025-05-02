
import React from 'react';
import { Product, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex py-4 border-b border-border last:border-0">
      {/* Product Image */}
      <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0">
        <Link to={`/product/${item.id}`}>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <Link to={`/product/${item.id}`}>
            <h3 className="font-medium hover:text-primary transition-colors">{item.name}</h3>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6" 
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            <X size={16} />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{item.brand} | {item.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center border rounded-md">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-r-none" 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-l-none" 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              disabled={item.quantity >= item.stock}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </Button>
          </div>
          <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
