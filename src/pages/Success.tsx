
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Success = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Generate a random order ID
  const orderId = `SBS${Math.floor(Math.random() * 10000).toString().padStart(5, '0')}`;
  
  useEffect(() => {
    // Show a success toast
    toast({
      title: "Order placed successfully",
      description: "Thank you for your purchase!",
      variant: "default",
    });
    
    // Redirect to homepage after 10 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [navigate, toast]);

  return (
    <div className="container-custom min-h-[80vh] pt-24 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full bg-card p-8 rounded-lg shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-500" />
        </div>
        
        <h1 className="text-3xl font-racing mb-4">Thank You!</h1>
        <p className="text-xl mb-2">Your order has been placed successfully</p>
        <p className="text-muted-foreground mb-6">
          We've sent a confirmation email with all the details.
        </p>
        
        <div className="bg-muted p-4 rounded-md mb-6">
          <p className="text-sm text-muted-foreground mb-1">Order ID</p>
          <p className="text-lg font-medium">{orderId}</p>
        </div>
        
        <p className="text-muted-foreground mb-8">
          You will be redirected to the homepage in a few seconds, or you can click the button below.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="outline" className="flex items-center">
              Track Order
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
