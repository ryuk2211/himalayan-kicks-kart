
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart data:', e);
        localStorage.removeItem('cart');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  
  // Calculate total number of items in cart
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Add an item to the cart
  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        i => i.id === item.id && i.size === item.size
      );
      
      if (existingItemIndex > -1) {
        // Item already exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...currentItems, item];
      }
    });
  };
  
  // Remove an item from the cart
  const removeItem = (id: number, size: string) => {
    setItems(currentItems => 
      currentItems.filter(item => !(item.id === id && item.size === size))
    );
  };
  
  // Update quantity of an item
  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size);
      return;
    }
    
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id && item.size === size 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Clear the cart
  const clearCart = () => {
    setItems([]);
  };
  
  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
