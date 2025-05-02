
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/data/products';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard } from 'lucide-react';

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  
  const [formStep, setFormStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 2000);
  };

  const nextStep = () => setFormStep(prev => prev + 1);
  const prevStep = () => setFormStep(prev => prev - 1);

  const steps = [
    { name: 'Shipping', status: formStep === 0 ? 'current' : formStep > 0 ? 'complete' : 'upcoming' },
    { name: 'Payment', status: formStep === 1 ? 'current' : formStep > 1 ? 'complete' : 'upcoming' },
  ];

  return (
    <div className="container-custom pt-24 pb-16">
      <h1 className="text-4xl font-racing mb-8">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <ol className="flex items-center">
          {steps.map((step, index) => (
            <li 
              key={step.name} 
              className={`flex items-center ${
                index !== steps.length - 1 ? 'w-full' : ''
              }`}
            >
              <div className="flex items-center text-sm">
                <div className={`
                  flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full
                  ${step.status === 'complete' ? 'bg-primary' : 
                    step.status === 'current' ? 'bg-primary text-white border-2 border-primary' : 
                    'border-2 border-muted-foreground text-muted-foreground'}
                `}>
                  {step.status === 'complete' ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`ml-2 font-medium ${
                  step.status === 'complete' ? 'text-primary' : 
                  step.status === 'current' ? 'text-foreground' : 
                  'text-muted-foreground'
                }`}>
                  {step.name}
                </span>
              </div>
              {index !== steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className={`h-0.5 ${
                    step.status === 'complete' ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}></div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit}>
              {/* Shipping Details */}
              {formStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address1" className="block text-sm font-medium mb-1">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                      required
                      className="w-full border border-input rounded-md p-2 bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="address2" className="block text-sm font-medium mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                      className="w-full border border-input rounded-md p-2 bg-background"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button 
                      type="button"
                      className="bg-primary hover:bg-primary/90"
                      onClick={nextStep}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {/* Payment Details */}
              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-medium mb-4">Payment Information</h2>
                  
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="w-full border border-input rounded-md p-2 bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      placeholder="XXXX XXXX XXXX XXXX"
                      maxLength={19}
                      className="w-full border border-input rounded-md p-2 bg-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        placeholder="XXX"
                        maxLength={3}
                        className="w-full border border-input rounded-md p-2 bg-background"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-primary hover:bg-primary/90"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          <CreditCard size={18} className="mr-2" />
                          Complete Payment
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            {/* Order Items */}
            <div className="max-h-64 overflow-y-auto mb-4 pr-2">
              {items.map(item => (
                <div key={item.id} className="flex py-3 border-b border-border last:border-0">
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-grow">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                    <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cost Breakdown */}
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatPrice(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (18% GST)</span>
                <span>{formatPrice(cartTotal * 0.18)}</span>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(cartTotal + (cartTotal * 0.18))}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
