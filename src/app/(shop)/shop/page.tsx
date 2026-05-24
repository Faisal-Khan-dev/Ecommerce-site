// app/shop/page.tsx
"use client";

import { useState } from "react";
import ShopSidebar from "@/components/sidebars/ShopSidebar";
import ProductGridCard, {
  ShopProduct,
} from "@/components/cards/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data matching your exact upload image grid items
const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "moroccan-olive-oil",
    name: "Cold Pressed Moroccan Olive Oil",
    price: 48.0,
    rating: 4.9,
    reviewsCount: 128,
    imageSrc: "/bestseller-4.png",
    badge: { text: "Premium", type: "premium" },
  },
  {
    id: "anatolian-figs",
    name: "Sun-Dried Anatolian Figs",
    price: 24.0,
    rating: 4.8,
    reviewsCount: 84,
    imageSrc: "/bestseller-4.png",
    badge: { text: "Organic", type: "organic" },
  },
  {
    id: "himalayan-shilajeet-rare",
    name: "Wild Harvested Himalayan Shilajeet",
    price: 120.0,
    rating: 5.0,
    reviewsCount: 212,
    imageSrc: "/bestseller-4.png",
    badge: { text: "Rare", type: "rare" },
  },
  {
    id: "eucalyptus-honey",
    name: "Raw Eucalyptus Honey",
    price: 32.0,
    rating: 4.7,
    reviewsCount: 56,
    imageSrc: "/bestseller-4.png",
  },
  {
    id: "kashmir-walnuts",
    name: "Shelled Kashmir Walnuts",
    price: 18.5,
    rating: 4.9,
    reviewsCount: 92,
    imageSrc: "/bestseller-4.png",
  },
  {
    id: "saffron-filaments",
    name: "Grade A Saffron Filaments",
    price: 85.0,
    rating: 5.0,
    reviewsCount: 340,
    imageSrc: "/bestseller-4.png",
    badge: { text: "Top Seller", type: "topseller" },
  },
];

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="w-full bg-white min-h-screen text-zinc-900 pb-16">
      {/* Header Banner */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 border-b-2 border-[#d7cbc4]">
        <h1 className="text-4xl font-serif tracking-wide mb-2 text-zinc-900">
          Organic Sourcing
        </h1>
        <p className="text-sm text-zinc-500 font-light max-w-2xl">
          Discover the purest expressions of nature, harvested from
          high-altitude estates and sun-drenched organic groves.
        </p>
      </header>

      {/* Main Content Layout Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row gap-8">
        {/* Left Side Filter Toolbar */}
        <aside className="w-full md:w-64 shrink-0">
          <ShopSidebar />
        </aside>

        {/* Right Side Control Bar & Grid Panel */}
        <main className="flex-grow">
          {/* Top Control Bar row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Showing 12 results
            </span>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#f5efe9] text-xs font-medium text-zinc-700 px-4 py-2.5 rounded border border-zinc-300/30 outline-none focus:border-zinc-400 cursor-pointer transition-colors"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Core Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOP_PRODUCTS.map((product) => (
              <ProductGridCard key={product.id} {...product} />
            ))}
          </div>

          {/* Clean Pagination Bar */}
          <nav
            className="flex justify-center items-center gap-2 mt-16"
            aria-label="Pagination"
          >
            <button className="p-2 border border-zinc-300 rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold bg-zinc-900 text-white">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-medium text-zinc-600 hover:bg-zinc-200/50">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-medium text-zinc-600 hover:bg-zinc-200/50">
              3
            </button>
            <button className="p-2 border border-zinc-300 rounded-full text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}
