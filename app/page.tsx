import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-beige-50 via-terracotta-50 to-gold-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-terracotta-600 text-sm font-semibold tracking-wider uppercase">
              Traditional Kutch Mirror Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Handcrafted
              <span className="block bg-gradient-to-r from-terracotta-500 to-primary-600 bg-clip-text text-transparent">
                Lippan Art
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover exquisite wall hangings inspired by the rich heritage of Kutch, Gujarat. 
              Each piece blends traditional clay work with contemporary design.
            </p>
            <Link
              href="/products"
              className="inline-block bg-terracotta-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-terracotta-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artworks</h2>
          <p className="text-gray-600">Handpicked masterpieces for your home</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-terracotta-500 to-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Lippan Art?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-white">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Authentic Heritage</h3>
              <p className="text-terracotta-100">
                Inspired by UNESCO-recognized traditional Lippan Kaam from Kutch, Gujarat
              </p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Handcrafted Quality</h3>
              <p className="text-terracotta-100">
                Each piece features intricate clay work and mirror inlays with 3D texture
              </p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-terracotta-100">
                Enjoy free insured shipping on all orders over $100
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
