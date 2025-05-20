
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, Product } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const Shop = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique brands and sizes from products
  const allBrands = Array.from(new Set(products.map(product => product.brand)));
  const allSizes = Array.from(new Set(products.flatMap(product => product.sizes)));
  
  // Handle URL parameters for category and filter
  useEffect(() => {
    const category = searchParams.get('category');
    const filter = searchParams.get('filter');
    
    let filtered = [...products];
    
    // Filter by category (men, women)
    if (category === 'men') {
      filtered = filtered.filter(product => product.category === 'men');
    } else if (category === 'women') {
      filtered = filtered.filter(product => product.category === 'women');
    }
    
    // Filter by special filters (new, bestsellers)
    if (filter === 'new') {
      filtered = filtered.filter(product => product.isNewArrival);
    } else if (filter === 'bestsellers') {
      filtered = filtered.filter(product => product.isBestSeller);
    }
    
    setFilteredProducts(filtered);
  }, [searchParams]);
  
  // Handle filters
  const applyFilters = () => {
    let filtered = [...products];
    
    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.brand.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(filtered);
  };
  
  // When any filter changes, apply filters
  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedBrands, selectedSizes, searchTerm]);
  
  // Handle brand selection
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };
  
  // Handle size selection
  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => {
      if (prev.includes(size)) {
        return prev.filter(s => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };

  return (
    <div>
      <PageHeader 
        title={t('shop')} 
        subtitle="Find the perfect pair for your next adventure"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder={`${t('search')}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          {/* Filter button (mobile) */}
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            className="md:hidden flex items-center gap-2"
          >
            <Filter size={18} />
            {t('filter')}
          </Button>
          
          {/* Results count */}
          <div className="text-gray-600">
            {filteredProducts.length} products found
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className={`
            md:w-64 bg-white rounded-lg shadow-sm p-6 md:block
            ${showFilters ? 'fixed inset-0 z-50 bg-white overflow-auto' : 'hidden'}
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{t('filter')}</h2>
              {showFilters && (
                <Button variant="ghost" onClick={() => setShowFilters(false)} size="sm">
                  <X size={18} />
                </Button>
              )}
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">{t('price')}</h3>
              <Slider
                defaultValue={[0, 20000]}
                max={20000}
                step={500}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>Rs {priceRange[0].toLocaleString()}</span>
                <span>Rs {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            
            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">{t('brand')}</h3>
              <div className="space-y-2">
                {allBrands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.sort().map(size => (
                  <button
                    key={size}
                    className={`
                      w-10 h-10 rounded-md text-sm flex items-center justify-center border
                      ${selectedSizes.includes(size) 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'border-gray-300 hover:border-brand-blue'
                      }
                    `}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile apply button */}
            {showFilters && (
              <Button 
                className="w-full mt-4" 
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </Button>
            )}
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
