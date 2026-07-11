"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  initiallyWishlisted: boolean;
};

export default function ProductCard({ product, initiallyWishlisted }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(initiallyWishlisted);
  const [isLoading, setIsLoading] = useState(false);

  async function toggleWishlist() {
    setIsLoading(true);
    const previousState = isWishlisted;
    setIsWishlisted(!previousState); 

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to update wishlist");
      }
    } catch (error) {
      console.error(error);
      setIsWishlisted(previousState);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4">
      <button
        onClick={toggleWishlist}
        disabled={isLoading}
        aria-label="Toggle wishlist"
        className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-2 shadow-sm hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isWishlisted ? "black" : "none"} stroke="black" strokeWidth="1.5" className="w-5 h-5" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <img src={product.imageUrl} alt={product.title} className="w-full h-56 object-cover rounded-xl mb-3" />

      <p className="text-xs uppercase tracking-wide text-gray-500">{product.brand}</p>
      <h3 className="text-sm font-medium text-gray-900 mt-1">{product.title}</h3>
      <p className="text-sm font-semibold text-gray-900 mt-2">R{product.price.toLocaleString()}</p>
    </div>
  );
}