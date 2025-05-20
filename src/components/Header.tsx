
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const { itemCount } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-blue">SneakerSpot</span>
            <span className="np-flag ml-1 mt-0.5"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">
              {t('home')}
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-brand-blue font-medium">
              {t('shop')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium">
              {t('about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium">
              {t('contact')}
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button 
              onClick={toggleLanguage} 
              variant="ghost" 
              className="text-sm font-medium"
            >
              {language === 'en' ? 'NP' : 'EN'}
            </Button>
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('shop')}
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-blue font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
