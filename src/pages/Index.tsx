
import { Link } from 'react-router-dom';
import { getNewArrivals, getBestSellers, getMenProducts, getWomenProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useLanguage();
  
  const newArrivals = getNewArrivals().slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative">
        <div className="h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t('welcomeMessage')}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Find your perfect pair from our curated collection of authentic sneakers
              </p>
              <Link to="/shop">
                <Button className="bg-brand-red hover:bg-opacity-90 text-white font-semibold py-2 px-8 text-lg">
                  {t('shopNow')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Banner */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('exploreCollection')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Men's Category */}
            <Link to="/shop?category=men" className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1527010154944-f2241763d806?auto=format&fit=crop&w=800&q=80" 
                alt="Men's Sneakers"
                className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{t('menSneakers')}</h3>
                  <span className="inline-block border-b-2 border-white px-2 pb-1">
                    {t('shopNow')}
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Women's Category */}
            <Link to="/shop?category=women" className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80" 
                alt="Women's Sneakers"
                className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{t('womenSneakers')}</h3>
                  <span className="inline-block border-b-2 border-white px-2 pb-1">
                    {t('shopNow')}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* New Arrivals Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">{t('newArrivals')}</h2>
            <p className="text-gray-600 mt-2">Check out our latest drops</p>
          </div>
          
          <ProductGrid products={newArrivals} />
          
          <div className="text-center mt-8">
            <Link to="/shop?filter=new">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                View All New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Promo Banner */}
      <div className="bg-brand-blue py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center">
              <div className="mr-3 text-3xl">🚚</div>
              <div className="text-left">
                <h3 className="font-semibold text-xl">{t('freeDelivery')}</h3>
                <p className="text-sm text-gray-200">Orders over Rs 10,000</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3 text-3xl">💵</div>
              <div className="text-left">
                <h3 className="font-semibold text-xl">{t('cashOnDelivery')}</h3>
                <p className="text-sm text-gray-200">Pay when you receive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Best Sellers Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">{t('bestSellers')}</h2>
            <p className="text-gray-600 mt-2">Our most popular styles</p>
          </div>
          
          <ProductGrid products={bestSellers} />
          
          <div className="text-center mt-8">
            <Link to="/shop?filter=bestsellers">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                View All Best Sellers
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Nepal Special Banner */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              <div className="np-flag mb-4 h-8 w-8"></div>
              <h2 className="text-3xl font-bold mb-4">Made for Nepali Adventures</h2>
              <p className="text-gray-700 mb-6">
                Discover our exclusive collection designed specifically for Nepali terrain. From city streets to mountain trails, our sneakers are tested and proven for local conditions.
              </p>
              <Link to="/shop">
                <Button className="bg-brand-blue hover:bg-opacity-90 text-white">
                  Explore Nepal Collection
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
                alt="Nepal Special Collection"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
