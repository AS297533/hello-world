"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ArtSize } from '@/types/product';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<ArtSize | undefined>(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
        <button
          onClick={() => router.push('/products')}
          className="text-terracotta-600 hover:text-terracotta-700"
        >
          Back to Collection
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => router.back()}
        className="text-gray-600 hover:text-gray-900 mb-6 flex items-center"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-terracotta-600">
              ${product.price.toFixed(2)}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Size: {selectedSize}&quot;
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}&quot;
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center font-semibold"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              product.inStock
                ? 'bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>

          {product.materials && product.materials.length > 0 && (
            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Materials & Craftsmanship</h3>
              <ul className="space-y-2 text-gray-700">
                {product.materials.map((material, index) => (
                  <li key={index}>• {material}</li>
                ))}
              </ul>
            </div>
          )}

          {product.careInstructions && product.careInstructions.length > 0 && (
            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Care Instructions</h3>
              <ul className="space-y-2 text-gray-700">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index}>• {instruction}</li>
                ))}
              </ul>
            </div>
          )}

          {product.shippingInfo && (
            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Shipping Information</h3>
              <p className="text-gray-700">{product.shippingInfo}</p>
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                onClick={() => router.push(`/products/${relatedProduct.id}`)}
                className="cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-terracotta-600 font-bold">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
