"use client";

import { useState } from "react";

type SizeSelectorProps = {
  sizes: string[];
};

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted mb-3">Size</p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              selectedSize === size
                ? "bg-foreground text-background border-foreground"
                : "bg-white text-foreground border-border-subtle hover:border-foreground"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}