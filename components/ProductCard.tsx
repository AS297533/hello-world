"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden bg-beige-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-terracotta-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Featured
            </span>
          )}
          {product.customizable && (
            <span className="absolute top-2 left-2 bg-gold-500 text-gray-900 text-xs px-3 py-1 rounded-full font-semibold">
              Custom
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-terracotta-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {product.sizes.slice(0, 3).map((size, index) => (
                <span
                  key={index}
                  className="text-xs bg-beige-100 text-gray-700 px-2 py-1 rounded border border-beige-300"
                >
                  {size}&quot;
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-terracotta-600">
              ${product.price.toFixed(2)}
            </span>
            
            <button
              onClick={handleAddToCart}
              className="bg-terracotta-500 text-white px-4 py-2 rounded-lg hover:bg-terracotta-600 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
