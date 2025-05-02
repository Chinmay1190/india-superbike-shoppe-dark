
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ChevronLeft, Check, IndianRupee } from 'lucide-react';
import ProductGrid from '@/components/products/ProductGrid';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const product = getProductById(parseInt(id || '0'));
  const relatedProducts = product ? getRelatedProducts(product) : [];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <Button onClick={() => navigate('/')}>Return to Home</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      description: `${product.name} added to cart`,
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="pt-24">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link 
            to={`/category/${product.category.toLowerCase()}`} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>{product.name}</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="flex items-center"
          >
            <ChevronLeft size={16} className="mr-1" /> Back
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2 flex items-center">
              <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                {product.brand}
              </span>
              <span className="ml-2 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl font-racing mb-2">{product.name}</h1>
            <p className="text-3xl font-racing text-primary mb-4">
              {formatPrice(product.price)}
            </p>

            <div className="my-6">
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Engine</h3>
                  <p>{product.engine}</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Power</h3>
                  <p>{product.power}</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Mileage</h3>
                  <p>{product.mileage}</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Top Speed</h3>
                  <p>{product.topSpeed}</p>
                </div>
              </div>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Available Colors</h3>
                  <div className="flex gap-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`
                          h-10 px-4 rounded-md border transition-all
                          ${selectedColor === color 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-border hover:border-primary/50'}
                        `}
                        aria-label={`Select color: ${color}`}
                      >
                        <span className="flex items-center">
                          {selectedColor === color && <Check size={16} className="mr-1 text-primary" />}
                          {color}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="bg-background border border-input rounded-md p-2 w-24"
                >
                  {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.stock} available
                </p>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Link to="/checkout" className="flex-1">
                  <Button 
                    className="w-full"
                    size="lg"
                    variant="outline"
                    disabled={product.stock === 0}
                  >
                    <IndianRupee size={18} className="mr-2" />
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="my-16">
            <h2 className="text-3xl font-racing mb-8">Similar Bikes</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
