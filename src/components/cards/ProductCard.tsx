// components/shop/ProductGridCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";

export interface ShopProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  imageSrc: string;
  badge?: {
    text: string;
    type: "premium" | "organic" | "rare" | "topseller";
  };
}

export default function ProductGridCard({
  id,
  name,
  price,
  rating,
  reviewsCount,
  imageSrc,
  badge,
}: ShopProduct) {
  const badgeColors = {
    premium: "bg-[#e2f0d9] text-[#4a6b36]",
    organic: "bg-[#e2f0d9] text-[#4a6b36]",
    rare: "bg-[#fce4d6] text-[#c65911]",
    topseller: "bg-zinc-800 text-zinc-100",
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-zinc-100/60 transition-all duration-300 flex flex-col h-full">
      {/* Product Card Media Box */}
      <div className="relative w-full aspect-square bg-zinc-50 overflow-hidden">
        {badge && (
          <span
            className={`absolute top-3 left-3 z-10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider rounded-full uppercase shadow-xs ${badgeColors[badge.type]}`}
          >
            {badge.text}
          </span>
        )}
        <Image
          src={imageSrc}
          alt={`Premium organic variant of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
        />
      </div>

      {/* Descriptive Details Bottom Box */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        {/* Product Title Linked */}
        <Link href={`/product/${id}`} className="block mb-2">
          <h3 className="font-serif text-base sm:text-lg text-zinc-900 tracking-wide leading-tight group-hover:text-amber-900 transition-colors duration-200">
            {name}
          </h3>
        </Link>

        {/* Product Micro Stars Row */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
          <span className="text-[11px] font-medium text-zinc-800">
            {rating}
          </span>
          <span className="text-[11px] text-zinc-400 font-light">
            ({reviewsCount} reviews)
          </span>
        </div>

        {/* Pricing Layout Row with Embedded Action Cart Button */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-serif text-base sm:text-lg font-medium text-zinc-900">
            ${price.toFixed(2)}
          </span>
          <button
            aria-label={`Add ${name} to your local shopping basket`}
            className="p-2.5 bg-[#312117] text-white rounded-md hover:bg-[#473224] active:scale-95 transition-all duration-200 shadow-sm"
          >
            <Image src="/cart-icon.png" width={14} height={14} alt="Add to Cart"  />
          </button>
        </div>
      </div>
    </div>
  );
}
