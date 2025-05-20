
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const { t, language } = useLanguage();
  
  // Shipping fee is free above Rs 10,000, otherwise Rs 350
  const shippingFee = subtotal > 10000 ? 0 : 350;
  
  const total = subtotal + shippingFee;

  return (
    <div>
      <PageHeader title={t('cart')} />
      
      <div className="container mx-auto px-4 py-8">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop">
              <Button className="bg-brand-blue hover:bg-opacity-90">
                {t('shopNow')}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header Row */}
                <div className="hidden md:grid md:grid-cols-6 bg-gray-50 p-4 font-medium text-gray-700">
                  <div className="md:col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-center">Total</div>
                </div>
                
                {/* Cart Items */}
                <div className="divide-y divide-gray-200">
                  {items.map(item => (
                    <div key={`${item.id}-${item.size}`} className="p-4 md:grid md:grid-cols-6 md:gap-4 md:items-center">
                      {/* Product Info */}
                      <div className="md:col-span-3 flex items-center mb-4 md:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-gray-500 text-sm">Size: {item.size}</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="text-center md:text-center mb-2 md:mb-0">
                        <span className="md:hidden text-gray-500 mr-2">Price:</span>
                        <span>{language === 'np' ? 'रू' : 'Rs'} {item.price.toLocaleString()}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="flex items-center justify-center mb-2 md:mb-0">
                        <button 
                          className="w-8 h-8 border border-gray-300 rounded-l-md flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          -
                        </button>
                        <div className="w-10 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <button 
                          className="w-8 h-8 border border-gray-300 rounded-r-md flex items-center justify-center"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Total & Remove */}
                      <div className="flex items-center justify-between md:justify-around">
                        <div>
                          <span className="md:hidden text-gray-500 mr-2">Total:</span>
                          <span className="font-medium">{language === 'np' ? 'रू' : 'Rs'} {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>{t('subtotal')}</span>
                    <span>{language === 'np' ? 'रू' : 'Rs'} {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('shipping')}</span>
                    <span>
                      {shippingFee === 0 
                        ? 'Free' 
                        : `${language === 'np' ? 'रू' : 'Rs'} ${shippingFee.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>{t('total')}</span>
                    <span>{language === 'np' ? 'रू' : 'Rs'} {total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full mt-6 bg-brand-red hover:bg-opacity-90">
                    {t('proceedToCheckout')}
                  </Button>
                </Link>
              </div>
              
              {/* Promo Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-4">
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
        )}
      </div>
    </div>
  );
};

export default Cart;
