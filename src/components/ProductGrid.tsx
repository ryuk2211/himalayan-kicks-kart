
import { useState } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const { t } = useLanguage();
  const [sortOption, setSortOption] = useState<string>('');
  
  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    } else if (sortOption === 'price-desc') {
      return b.price - a.price;
    } else if (sortOption === 'newest') {
      // For this demo, we'll just randomly sort for "newest" since we don't have a date field
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
        
        {/* Sort options */}
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700">
            {t('sort')}:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
