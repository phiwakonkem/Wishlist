import { prisma } from "@/lib/prisma";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const wishlistEntries = await prisma.wishlist.findMany({
    select: { productId: true },
  });

  const wishlistedIds = new Set(wishlistEntries.map((entry) => entry.productId));

  return (
    <main>
      <section className="relative overflow-hidden bg-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-background/60 mb-4">
            New season, just in
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-background leading-[1.05] max-w-3xl">
            Dress for the <span className="text-accent">bold</span> moves ahead.
          </h1>
          <p className="text-sm md:text-base text-background/70 mt-6 max-w-md">
            A hand-picked edit of the pieces worth building a wardrobe around.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold text-foreground mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              initiallyWishlisted={wishlistedIds.has(product.id)}
            />
          ))}
        </div>
      </div>  
    </main>
  );
}