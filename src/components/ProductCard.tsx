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
        <div className="overflow-hidden rounded-md bg-white border border-border-subtle">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
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