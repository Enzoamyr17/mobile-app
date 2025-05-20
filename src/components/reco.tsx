'use client';

interface RecommendationCardProps {
  name: string;
  price: number;
  discount: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ name, price, discount }) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className="flex bg-choco-card h-full lg:h-24 min-w-[250px] max-w-[280px] rounded-lg overflow-hidden">
      <div className="h-full aspect-square bg-blue-300"/>
      <div className="my-auto flex flex-col p-2 gap-2">
        <h1 className="w-full">{name}</h1>
        <p className="text-xs w-full line-through">₱{price.toFixed(2)}</p>
        <p className="w-full">₱{discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export { RecommendationCard };
