export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-terracotta-400 to-gold-500 bg-clip-text text-transparent">
              Lippan Art
            </h3>
            <p className="text-gray-400 text-sm">
              Handcrafted wall art inspired by traditional Kutch mirror work. Bringing heritage to modern homes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-terracotta-400 transition-colors">All Artworks</a></li>
              <li><a href="/products?category=traditional" className="hover:text-terracotta-400 transition-colors">Traditional Kutch</a></li>
              <li><a href="/products?category=modern" className="hover:text-terracotta-400 transition-colors">Modern Fusion</a></li>
              <li><a href="/products?category=minimal" className="hover:text-terracotta-400 transition-colors">Minimalist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Etsy Shop</a></li>
              <li><a href="#" className="hover:text-terracotta-400 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Lippan Art. All rights reserved. Celebrating the heritage of Kutch, Gujarat.</p>
        </div>
      </div>
    </footer>
  );
}
