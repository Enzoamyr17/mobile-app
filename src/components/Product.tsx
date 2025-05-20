'use client';

interface ProductCardProps {
  name: string;
  price: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, discount }) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className="m-auto flex flex-col bg-choco-card w-[40vw] aspect-[9/16] min-w-[175px] max-w-[200px] rounded-lg overflow-hidden">
        <div>
            <div className="w-full aspect-square bg-blue-300"/>
            <div className="absolute relative bottom-0 w-1/3 transform -translate-y-full left-0 pl-2 bg-choco-redbtn text-white rounded-tr-lg">-{discount}%</div>
        </div>
        <div className="my-auto flex flex-col p-2 gap-2 transform -translate-y-4">
            <h1 className="text-lg font-semibold tracking-tight w-full">{name}</h1>
            <p className="text-xs w-full line-through">₱{price.toFixed(2)}</p>
            <p className="w-full text-lg">₱{discountedPrice.toFixed(2)}</p>
        </div>
    </div>
  );
};

export { ProductCard };
