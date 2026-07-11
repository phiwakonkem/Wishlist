export type Product = { id: string; brand: string; title: string; price: number; imageUrl: string; };

export const products: Product[] = [
  {
    id: "sneaker-1",
    brand: "Nike",
    title: "Pegasus 41s",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: "jacket-1",
    brand: "ZARA",
    title: "Leather Jacket",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
  },
  {
    id: "watch-1",
    brand: "IWC",
    title: "Schaffhausen Automatic Chrono Watch",
    price: 8200,
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
  },
  {
    id: "tshirt-1",
    brand: "Basewear",
    title: "Plain White Tee",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
];