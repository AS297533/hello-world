"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some beautiful Lippan Art pieces to get started!</p>
          <button
            onClick={() => router.push('/products')}
            className="bg-terracotta-500 text-white px-8 py-3 rounded-lg hover:bg-terracotta-600 transition-colors"
          >
            Explore Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize || 'default'}`} className="flex gap-4 p-6 border-b last:border-b-0">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  {item.selectedSize && (
                    <p className="text-sm text-gray-600 mb-2">Size: {item.selectedSize}&quot;</p>
                  )}
                  <p className="text-terracotta-600 font-bold">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded border border-gray-300 hover:border-gray-400 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded border border-gray-300 hover:border-gray-400 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-4 text-red-600 hover:text-red-700 font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{getCartTotal() >= 100 ? 'FREE' : '$9.99'}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>
                  ${(getCartTotal() + (getCartTotal() >= 100 ? 0 : 9.99) + getCartTotal() * 0.08).toFixed(2)}
                </span>
              </div>
            </div>

            {getCartTotal() < 100 && (
              <p className="text-sm text-gray-600 mb-4 bg-beige-100 p-3 rounded">
                Add ${(100 - getCartTotal()).toFixed(2)} more for free shipping!
              </p>
            )}

            <button
              onClick={() => router.push('/checkout')}
              className="w-full bg-terracotta-500 text-white py-3 rounded-lg font-semibold hover:bg-terracotta-600 transition-colors mb-3"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => router.push('/products')}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
