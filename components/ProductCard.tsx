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
      <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.featured && (
            <span className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1 mb-3">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200"
                  style={{
                    background: color.toLowerCase().includes('red') ? '#dc2626' :
                               color.toLowerCase().includes('pink') ? '#ec4899' :
                               color.toLowerCase().includes('nude') || color.toLowerCase().includes('beige') ? '#d4a574' :
                               color.toLowerCase().includes('berry') || color.toLowerCase().includes('wine') ? '#831843' :
                               color.toLowerCase().includes('coral') ? '#fb7185' :
                               color.toLowerCase().includes('peach') ? '#fda4af' :
                               color.toLowerCase().includes('plum') ? '#9333ea' :
                               color.toLowerCase().includes('mauve') ? '#c084fc' :
                               color.toLowerCase().includes('burgundy') ? '#7f1d1d' :
                               color.toLowerCase().includes('mocha') ? '#92400e' :
                               '#e5e7eb'
                  }}
                  title={color}
                />
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary-600">
              ${product.price.toFixed(2)}
            </span>
            
            <button
              onClick={handleAddToCart}
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
