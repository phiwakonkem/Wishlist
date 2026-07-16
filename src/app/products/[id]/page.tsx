import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { products } from "@/lib/products";
import WishlistButton from "@/components/WishlistButton";
import SizeSelector from "@/components/SizeSelector";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const wishlistEntry = await prisma.wishlist.findUnique({
    where: { productId: product.id },
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <nav className="text-xs text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-md overflow-hidden bg-white border border-border-subtle">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-[520px] object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-muted">{product.brand}</p>
          <h1 className="text-2xl font-semibold text-foreground mt-1">{product.title}</h1>
          <p className="text-xl font-semibold text-accent mt-3">
            R{product.price.toLocaleString()}
          </p>

          <p className="text-sm text-muted leading-relaxed mt-6">{product.description}</p>

          <div className="mt-8">
            <SizeSelector sizes={product.sizes} />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <button className="flex-1 bg-foreground text-background text-sm font-medium py-3 rounded-md hover:opacity-90 transition-opacity">
              Add to Bag
            </button>
            <WishlistButton
              productId={product.id}
              initiallyWishlisted={Boolean(wishlistEntry)}
              size="lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}