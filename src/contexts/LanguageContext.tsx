
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'np';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// English and Nepali translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    shop: "Shop",
    about: "About Us",
    contact: "Contact",
    cart: "Cart",
    menSneakers: "Men's Sneakers",
    womenSneakers: "Women's Sneakers",
    newArrivals: "New Arrivals",
    bestSellers: "Best Sellers",
    freeDelivery: "Free Delivery in Kathmandu",
    cashOnDelivery: "Cash on Delivery Available",
    shopNow: "Shop Now",
    welcomeMessage: "Nepal's Premium Sneaker Destination",
    exploreCollection: "Explore Collection",
    size: "Size",
    addToCart: "Add to Cart",
    description: "Description",
    proceedToCheckout: "Proceed to Checkout",
    quantity: "Quantity",
    remove: "Remove",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    placeOrder: "Place Order",
    ourStory: "Our Story",
    contactUs: "Contact Us",
    message: "Message",
    send: "Send",
    followUs: "Follow Us",
    nippleseRupee: "Rs",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    price: "Price",
    brand: "Brand",
    color: "Color"
  },
  np: {
    home: "होम",
    shop: "सामानहरू",
    about: "हाम्रो बारेमा",
    contact: "सम्पर्क",
    cart: "कार्ट",
    menSneakers: "पुरुष जुत्ता",
    womenSneakers: "महिला जुत्ता",
    newArrivals: "नयाँ सामानहरू",
    bestSellers: "लोकप्रिय सामानहरू",
    freeDelivery: "काठमाडौंमा नि:शुल्क डेलिभरी",
    cashOnDelivery: "क्यास अन डेलिभरी उपलब्ध",
    shopNow: "अहिले किन्नुहोस्",
    welcomeMessage: "नेपालको प्रिमियम स्निकर डेस्टिनेशन",
    exploreCollection: "संग्रह हेर्नुहोस्",
    size: "साइज",
    addToCart: "कार्टमा राख्नुहोस्",
    description: "विवरण",
    proceedToCheckout: "चेकआउट गर्नुहोस्",
    quantity: "मात्रा",
    remove: "हटाउनुहोस्",
    subtotal: "सबटोटल",
    shipping: "शिपिंग",
    total: "कुल",
    placeOrder: "अर्डर गर्नुहोस्",
    ourStory: "हाम्रो कथा",
    contactUs: "सम्पर्क गर्नुहोस्",
    message: "सन्देश",
    send: "पठाउनुहोस्",
    followUs: "फलो गर्नुहोस्",
    nippleseRupee: "रू",
    search: "खोज्नुहोस्",
    filter: "फिल्टर",
    sort: "क्रमबद्ध",
    price: "मूल्य",
    brand: "ब्रान्ड",
    color: "रंग"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'np')) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  // Toggle between English and Nepali
  const toggleLanguage = () => {
    setLanguage(current => (current === 'en' ? 'np' : 'en'));
  };
  
  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
