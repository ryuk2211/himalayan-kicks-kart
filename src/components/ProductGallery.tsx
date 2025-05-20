
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative overflow-hidden bg-gray-100 rounded-lg">
        <img 
          src={images[activeImage]} 
          alt={name}
          className="w-full h-full object-contain aspect-square"
        />
      </div>
      
      {/* Thumbnail images */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button 
              key={index} 
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                activeImage === index ? 'border-brand-blue' : 'border-transparent'
              }`}
            >
              <img 
                src={image} 
                alt={`${name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
