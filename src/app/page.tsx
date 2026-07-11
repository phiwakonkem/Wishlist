import { prisma } from "@/lib/prisma";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const wishlistEntries = await prisma.wishlist.findMany({
    select: { productId: true },
  });

  const wishlistedIds = new Set(wishlistEntries.map((entry) => entry.productId));

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">New Arrivals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            initiallyWishlisted={wishlistedIds.has(product.id)}
          />
        ))}
      </div>
    </main>
  );
}