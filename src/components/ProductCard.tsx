import Link from "next/link";
import type { Product } from "@/lib/products";
import WishlistButton from "./WishlistButton";

type ProductCardProps = {
  product: Product;
  initiallyWishlisted: boolean;
};

export default function ProductCard({ product, initiallyWishlisted }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="absolute top-3 right-3 z-10">
        <WishlistButton productId={product.id} initiallyWishlisted={initiallyWishlisted} />
      </div>

      <Link href={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-md bg-white border border-border-subtle">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-xs uppercase tracking-wide text-background/70">{product.category}</p>
            <p className="text-sm text-background leading-snug mt-2 line-clamp-3">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-3">
              {product.sizes.map((size) => (
                <span key={size} className="text-[11px] px-2 py-0.5 rounded-full border border-background/40 text-background">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-3">
          <p className="text-xs uppercase tracking-wide text-muted">{product.brand}</p>
          <h3 className="text-sm text-foreground mt-1">{product.title}</h3>
          <p className="text-sm font-semibold text-foreground mt-1">
            R{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
}