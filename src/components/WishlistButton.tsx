"use client";

import { useState } from "react";

type WishlistButtonProps = {
  productId: string;
  initiallyWishlisted: boolean;
  size?: "sm" | "lg";
};

export default function WishlistButton({
  productId,
  initiallyWishlisted,
  size = "sm",
}: WishlistButtonProps) {
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
        body: JSON.stringify({ productId }),
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

  const iconSize = size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const buttonPadding = size === "lg" ? "p-3" : "p-2";

  return (
    <button
      onClick={toggleWishlist}
      disabled={isLoading}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      className={`${buttonPadding} rounded-full bg-white/90 shadow-sm hover:scale-110 transition-transform`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isWishlisted ? "var(--accent)" : "none"}
        stroke={isWishlisted ? "var(--accent)" : "black"}
        strokeWidth="1.5"
        className={iconSize}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}