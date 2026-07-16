import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function WishlistPage() {
  const wishlistEntries = await prisma.wishlist.findMany({
    select: { productId: true },
  });

  const wishlistedIds = new Set(wishlistEntries.map((entry) => entry.productId));
  const wishlistedProducts = products.filter((product) => wishlistedIds.has(product.id));

  if (wishlistedProducts.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-gray-500 mb-6">Your wishlist is empty.</p>
        <Link
          href="/"
          className="inline-block bg-foreground text-background text-sm px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistedProducts.map((product) => (
          <ProductCard key={product.id} product={product} initiallyWishlisted={true} />
        ))}
      </div>
    </main>
  );
}