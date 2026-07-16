export type Product = { id: string; brand: string; title: string; price: number; imageUrl: string; description: string; sizes: string[]; category: string; };

export const products: Product[] = [
  {
    id: "sneaker-1",
    brand: "Nike",
    title: "Pegasus 41s",
    price: 1600,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    description:
      "A low-profile runner built on a cushioned foam sole, finished in a worn-in suede and mesh upper. Designed for everyday wear, from the school run to weekend errands.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    category: "Shoes",
  },
  {
    id: "jacket-1",
    brand: "Zara",
    title: "Leather Jacket",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    description:
      "A lightweight leather jacket, cut for a slightly boxy fit.",
    sizes: ["S", "M", "L", "XL"],
    category: "Jackets",
  },
  {
    id: "watch-1",
    brand: "IWC",
    title: "Schaffhausen Automatic Chrono Watch",
    price: 8200,
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    description:
      "A self-winding chronograph with a stainless steel case and cream-white face. Water-resistant to 100m, with a genuine brown leather strap.",
    sizes: ["One Size"],
    category: "Watches",
  },
  {
    id: "tshirt-1",
    brand: "Basewear",
    title: "Plain White Tee",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description:
      "A boxy-fit tee — thick enough to hold its shape wash after wash. A wardrobe basic built to actually last.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
  },
];