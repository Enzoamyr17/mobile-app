'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  discount: number;
  onAddToCart: (name: string, price: number, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, discount, onAddToCart }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = price * (1 - discount / 100);

  const handleAddToCart = () => {
    onAddToCart(name, discountedPrice, quantity);
    setIsSelected(false);
    setQuantity(1);
  };

  return (
    <div className="relative w-[40vw]">

      <div 
        className={`m-auto flex flex-col bg-choco-card w-[40vw] aspect-[9/16] min-w-[175px] max-w-[200px] rounded-lg overflow-hidden cursor-pointer transition-all ${
          isSelected ? 'absolute ring-2 ring-choco-primary scale-105 aspect-auto h-auto z-50' : 'hover:shadow-lg'
        }`}
        onClick={() => setIsSelected(!isSelected)}
      >
        <div>
          <div className="w-full aspect-square bg-blue-300"/>
          <div className="absolute relative bottom-0 w-1/3 transform -translate-y-full left-0 pl-2 bg-choco-redbtn text-white rounded-tr-lg">-{discount}%</div>
        </div>
        <div className="my-auto flex flex-col p-2 gap-2 transform -translate-y-4">
          <h1 className="text-lg font-semibold tracking-tight w-full">{name}</h1>
          <p className="text-xs w-full line-through">₱{price.toFixed(2)}</p>
          <p className="w-full text-lg">₱{discountedPrice.toFixed(2)}</p>
          
          {isSelected && (
            <div className="flex flex-col gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-center items-center gap-2 bg-gray-200 rounded-full overflow-hidden w-fit mx-auto">
                <button 
                  className="text-xl h-full w-full font-bold px-3 py-1 bg-choco-primary/10 hover:bg-choco-primary/20 transition-colors" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  −
                </button>
                <input 
                  type="number" 
                  className="text-lg w-8 text-center border-none outline-none" 
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 1) {
                      setQuantity(value);
                    }
                  }}
                  min="1"
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  className="text-xl h-full w-full font-bold px-3 py-1 bg-choco-primary/10 hover:bg-choco-primary/20 transition-colors"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
              <button 
                className="flex items-center justify-center gap-2 bg-choco-greenbtn text-white py-2 rounded-lg hover:bg-choco-primary/90 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
