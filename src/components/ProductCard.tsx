
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t, language } = useLanguage();
  const { id, name, price, images, isNewArrival, isBestSeller, brand } = product;
  
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <div className="relative overflow-hidden">
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNewArrival && (
              <span className="badge badge-new">
                {t('newArrivals')}
              </span>
            )}
            {isBestSeller && (
              <span className="badge badge-best">
                {t('bestSellers')}
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
              <p className="text-gray-500 text-sm">{brand}</p>
            </div>
            <p className="font-bold text-brand-blue">
              {language === 'np' ? 'रू' : 'Rs'} {price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
