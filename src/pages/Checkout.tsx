
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { nepalCities } from '@/data/cities';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kathmandu',
    zipCode: '',
    paymentMethod: 'cash',
  });
  
  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Shipping fee is free above Rs 10,000, otherwise Rs 350
  const shippingFee = subtotal > 10000 ? 0 : 350;
  
  const total = subtotal + shippingFee;
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Normally this would send data to a backend API
    // Here we're just simulating a successful order
    
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. We'll contact you shortly.",
    });
    
    // Clear the cart
    clearCart();
    
    // Redirect to home page
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div>
      <PageHeader title="Checkout" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              
              <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="e.g. 98XXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                {/* Address Fields */}
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-1">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                    >
                      {nepalCities.map(city => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-gray-700 mb-1">
                      Zip/Postal Code (Optional)
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="cash" className="flex-grow font-medium">
                      Cash on Delivery
                    </label>
                    <span className="text-2xl">💵</span>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-opacity-90"
                >
                  {t('placeOrder')}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Items ({items.length})</h3>
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 object-cover rounded-md mr-2"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500">Size: {item.size} x {item.quantity}</p>
                        </div>
                      </div>
                      <p>{language === 'np' ? 'रू' : 'Rs'} {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Order Totals */}
              <div className="border-t pt-4 space-y-2">
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
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>{t('total')}</span>
                  <span>{language === 'np' ? 'रू' : 'Rs'} {total.toLocaleString()}</span>
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
