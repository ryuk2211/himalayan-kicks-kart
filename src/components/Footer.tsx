
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">SneakerSpot Nepal</h3>
            <p className="text-gray-300 mb-4">
              Nepal's first premium sneaker destination, bringing authentic global brands to local sneaker enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('shop')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=men" className="text-gray-300 hover:text-white">
                  {t('menSneakers')}
                </Link>
              </li>
              <li>
                <Link to="/shop?category=women" className="text-gray-300 hover:text-white">
                  {t('womenSneakers')}
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=new" className="text-gray-300 hover:text-white">
                  {t('newArrivals')}
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestsellers" className="text-gray-300 hover:text-white">
                  {t('bestSellers')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  {t('ourStory')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <p className="text-gray-300 mb-2">
              Thamel, Kathmandu, Nepal
            </p>
            <p className="text-gray-300 mb-2">
              +977-9801234567
            </p>
            <p className="text-gray-300">
              info@sneakerspotnepal.com
            </p>
            <div className="mt-4">
              <p className="text-white font-medium">
                {t('freeDelivery')}
              </p>
              <p className="text-white font-medium">
                {t('cashOnDelivery')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} SneakerSpot Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
