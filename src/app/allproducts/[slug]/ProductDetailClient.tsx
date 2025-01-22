'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';


export default function ProductDetailClient({ product }: { product: any }) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  console.log('Product Sizes:', product.sizes);
console.log('Product Colors:', product.colors);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color before adding to cart.');
      return;
    }

    const cartUrl = `/cartpage?id=${product._id}&title=${encodeURIComponent(
      product.title
    )}&price=${product.price}&size=${encodeURIComponent(
      selectedSize
    )}&color=${encodeURIComponent(selectedColor)}`;

    router.push(cartUrl);
  };


  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Product Image */}
      <div className="flex-1">
        <Image
          src={urlFor(product.image).url()}
          alt={product.title || 'Product image'}
          width={500}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>

        {/* Sizes */}
        {product.sizes?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Size:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md text-sm font-medium ${
                    selectedSize === size ? 'bg-blue-600 text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {product.colors?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Color:</h3>
            <div className="flex gap-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-blue-600' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <Link href={"/cartpage"}>
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition"
        >
          Add to Cart
        </button>
        </Link>
      </div>
    </div>
  );
}

