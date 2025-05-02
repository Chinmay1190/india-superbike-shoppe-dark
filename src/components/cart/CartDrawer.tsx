
import React from 'react';
import { X, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartItem from './CartItem';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, cartTotal, cartCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-background shadow-xl overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center">
                <ShoppingCart className="mr-2" size={20} />
                Your Cart 
                <span className="ml-2 text-sm text-muted-foreground">
                  ({cartCount} {cartCount === 1 ? 'item' : 'items'})
                </span>
              </h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Cart Content */}
            <div className="flex-grow">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-4 py-12">
                  <ShoppingCart size={64} className="text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    Looks like you haven't added any bikes to your cart yet.
                  </p>
                  <Button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="px-4 py-2 divide-y divide-border">
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 bg-muted/50">
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 mb-2">
                    Checkout 
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsCartOpen(false)}>
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
