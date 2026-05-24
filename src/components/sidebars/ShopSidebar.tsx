// components/shop/ShopSidebar.tsx
"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function ShopSidebar() {
  const [priceRange, setPriceRange] = useState<number>(500);
  const categories = [
    "Raw Shilajeet",
    "Cold Pressed Oils",
    "Sun-Dried Fruits",
    "Artisanal Honey",
  ];

  return (
    <div className="space-y-8 sticky top-6">
      {/* Categories Multi-Checkboxes */}
      <div>
        <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-4">
          Categories
        </h4>
        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <label
              key={idx}
              className="flex items-center gap-3 text-xs font-medium text-zinc-700 cursor-pointer select-none group"
            >
              <input
                type="checkbox"
                defaultChecked={idx === 1} // Setting 'Cold Pressed Oils' checked by default like the mockup
                className="w-4 h-4 rounded border-zinc-300 bg-white text-emerald-600 focus:ring-0 accent-emerald-700 cursor-pointer"
              />
              <span className="group-hover:text-zinc-900 transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Slider Tool */}
      <div>
        <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-4">
          Price Range
        </h4>
        <input
          type="range"
          min="20"
          max="500"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-800"
        />
        <div className="flex justify-between items-center text-[11px] text-zinc-500 font-medium mt-2">
          <span>$20</span>
          <span>${priceRange}+</span>
        </div>
      </div>

      {/* Minimum Star Rating Selection */}
      <div>
        <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-3">
          Minimum Rating
        </h4>
        <button className="flex items-center gap-1 text-xs text-zinc-700 hover:text-zinc-900 transition-colors group py-1">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400"
            />
          ))}
          <Star className="w-3.5 h-3.5 fill-zinc-200 stroke-zinc-300" />
          <span className="text-[11px] text-zinc-500 ml-1 group-hover:text-zinc-800 transition-colors">
            & Up
          </span>
        </button>
      </div>
    </div>
  );
}
