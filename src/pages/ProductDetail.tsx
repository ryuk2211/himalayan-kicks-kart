
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ProductGallery from '@/components/ProductGallery';
import { ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const product = getProductById(Number(id));
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
      quantity,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <button onClick={() => navigate('/')} className="hover:text-brand-blue">
          {t('home')}
        </button>
        <ChevronRight size={16} className="mx-1" />
        <button onClick={() => navigate('/shop')} className="hover:text-brand-blue">
          {t('shop')}
        </button>
        <ChevronRight size={16} className="mx-1" />
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div>
          <ProductGallery images={product.images} name={product.name} />
        </div>
        
        {/* Right: Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.brand}</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-brand-blue">
                {language === 'np' ? 'रू' : 'Rs'} {product.price.toLocaleString()}
              </p>
              
              {/* Tags */}
              <div className="ml-4 flex gap-2">
                {product.isNewArrival && (
                  <span className="badge badge-new">
                    {t('newArrivals')}
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="badge badge-best">
                    {t('bestSellers')}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              {t('size')}
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`
                    w-12 h-12 rounded-md flex items-center justify-center border
                    ${selectedSize === size 
                      ? 'bg-brand-blue text-white border-brand-blue' 
                      : 'border-gray-300 hover:border-brand-blue'
                    }
                  `}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              {t('quantity')}
            </label>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                {quantity}
              </div>
              <button 
                className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full py-3 bg-brand-red hover:bg-opacity-90 mb-6"
          >
            {t('addToCart')}
          </Button>
          
          {/* Product Description */}
          <div>
            <h2 className="text-xl font-bold mb-3">{t('description')}</h2>
            <p className="text-gray-700">{product.description}</p>
            
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Delivery Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="mr-3 text-xl">🚚</div>
                <div>
                  <p className="font-medium">{t('freeDelivery')}</p>
                  <p className="text-sm text-gray-500">Orders over Rs 10,000</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-xl">💵</div>
                <div>
                  <p className="font-medium">{t('cashOnDelivery')}</p>
                  <p className="text-sm text-gray-500">Pay when you receive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
