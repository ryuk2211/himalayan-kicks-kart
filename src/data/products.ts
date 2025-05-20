
// Sample product data for our sneaker e-commerce store
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  images: string[];
  sizes: string[];
  description: string;
  category: 'men' | 'women';
  tags: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    price: 15999,
    images: [
      "https://images.unsplash.com/photo-1588099768531-a72d4a198538?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Introducing the Nike Air Max Pulse—a bold new silhouette designed with running-inspired aesthetics and details that channel the raw, honest energy of city streets. The textile-wrapped midsole and torch-inspired design nod to the creative, do-it-yourself spirit of London's music scene.",
    category: "men",
    tags: ["running", "lifestyle"],
    isNewArrival: true
  },
  {
    id: 2,
    name: "Ultraboost 5.0",
    brand: "Adidas",
    price: 18999,
    images: [
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Comfort and responsive energy return define these running shoes. They have a breathable, flexible adidas Primeknit upper that adapts to the changing shape of your foot as you run. Boost cushioning delivers incredible energy return while the Linear Energy Push system enhances stability.",
    category: "men",
    tags: ["running", "premium"],
    isBestSeller: true
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Reebok",
    price: 9999,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800",
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Originally designed for running, these vintage-inspired trainers have a soft leather upper and a die-cut EVA midsole for lightweight cushioning. A molded sockliner adds support, while the high-abrasion rubber outsole provides durable traction.",
    category: "men",
    tags: ["classic", "lifestyle"],
    isBestSeller: true
  },
  {
    id: 4,
    name: "Zoom Fly 5",
    brand: "Nike",
    price: 17999,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10", "11"],
    description: "The Nike Zoom Fly 5 gives you a secure, comfortable fit that you can wear every day. It's great for circling the track or neighborhood before sunrise or sunset thanks to the reflective design details that help you stand out. Plus, it's been updated with softer, lighter and more responsive foam.",
    category: "men",
    tags: ["running", "performance"],
    isNewArrival: true
  },
  {
    id: 5,
    name: "Run Star Hike",
    brand: "Converse",
    price: 11999,
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14c9e1e538a?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800",
    ],
    sizes: ["5", "6", "7", "8", "9"],
    description: "The Converse Run Star Hike features a chunky platform with woodgrain-inspired detailing and a rugged, jagged rubber sole. The canvas upper retains a classic look while hiking-inspired eyelets and oversized pull tabs add utilitarian style details.",
    category: "women",
    tags: ["casual", "platform"],
    isNewArrival: true
  },
  {
    id: 6,
    name: "RS-X³ Puzzle",
    brand: "Puma",
    price: 13999,
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=800",
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "The RS-X³ Puzzle celebrates the massive comeback of chunky silhouettes in the world of sneakers. Featuring an enhanced triple-dimensional sole with RS technology and a mesh textile upper with colorful leather and suede overlays.",
    category: "women",
    tags: ["casual", "chunky"],
    isBestSeller: true
  },
  {
    id: 7,
    name: "Ozweego",
    brand: "Adidas",
    price: 16999,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10"],
    description: "The adidas Ozweego is inspired by the '90s flagship Feet You Wear line, with a sculpted design that combines retro style with modern technology. Features adiPRENE and adiPRENE+ cushioning for superior comfort.",
    category: "men",
    tags: ["lifestyle", "retro"],
    isNewArrival: true
  },
  {
    id: 8,
    name: "Air Force 1 Shadow",
    brand: "Nike",
    price: 14999,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800",
    ],
    sizes: ["5", "6", "7", "8", "9"],
    description: "The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design. Using a layered approach, double the branding and exaggerated features, it highlights AF1 DNA with a bold, new look.",
    category: "women",
    tags: ["lifestyle", "platform"],
    isBestSeller: true
  },
  {
    id: 9,
    name: "Old Skool",
    brand: "Vans",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1604000403608-ff76ece0c6ef?auto=format&fit=crop&w=800",
    ],
    sizes: ["6", "7", "8", "9", "10", "11"],
    description: "The Old Skool, Vans' classic skate shoe and the first to feature the iconic side stripe, is a low-top lace-up with a durable suede and canvas upper, re-enforced toe caps to withstand repeated wear, a padded collar for support and flexibility, and the signature rubber waffle outsole.",
    category: "men",
    tags: ["skateboarding", "classic"],
    isBestSeller: true
  },
  {
    id: 10,
    name: "Chuck 70",
    brand: "Converse",
    price: 8999,
    images: [
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=800",
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    description: "Premium materials and construction elevate the Chuck 70 beyond the original Chuck Taylor All Star. A higher rubber foxing and a cushioned footbed provide comfort, while the premium cotton canvas upper only gets better with age.",
    category: "women",
    tags: ["classic", "casual"],
    isNewArrival: true
  },
  {
    id: 11,
    name: "Nepal Special Mountain Trek",
    brand: "Yeti",
    price: 12999,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800",
    ],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Designed specifically for Nepalese terrain, these trekking shoes provide excellent grip on varied mountain paths. Features water-resistant exterior and reinforced toe cap for protection on rocky trails.",
    category: "men",
    tags: ["trekking", "nepal-exclusive"],
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: 12,
    name: "Himalayan Runner",
    brand: "Sherpa",
    price: 11999,
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800",
    ],
    sizes: ["6", "7", "8", "9", "10"],
    description: "Inspired by traditional Nepali craftsmanship with modern athletic technology. These runners feature locally-sourced materials and designs inspired by Himalayan landscapes.",
    category: "women",
    tags: ["running", "nepal-exclusive"],
    isNewArrival: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

export const getMenProducts = (): Product[] => {
  return products.filter(product => product.category === 'men');
};

export const getWomenProducts = (): Product[] => {
  return products.filter(product => product.category === 'women');
};
