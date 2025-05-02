
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/cart/CartItem';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';
import { formatPrice } from '@/data/products';

const Cart = () => {
  const { items, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-custom min-h-[60vh] pt-24 flex flex-col items-center justify-center">
        <ShoppingCart size={64} className="text-muted-foreground mb-6" />
        <h1 className="text-3xl font-racing mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any bikes to your cart yet. Browse our collection to find your dream ride.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom pt-24 pb-16">
      <h1 className="text-4xl font-racing mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="font-medium">Cart Items ({items.length})</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearCart}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={16} className="mr-2" />
                Clear Cart
              </Button>
            </div>
            <div className="divide-y divide-border">
              {items.map(item => (
                <div key={item.id} className="p-4">
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(cartTotal)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link to="/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Proceed to Checkout
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
