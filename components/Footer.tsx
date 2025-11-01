export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              LipanArt
            </h3>
            <p className="text-gray-400 text-sm">
              Premium lip art products for the modern beauty enthusiast.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-primary-400 transition-colors">All Products</a></li>
              <li><a href="/products?category=lipstick" className="hover:text-primary-400 transition-colors">Lipsticks</a></li>
              <li><a href="/products?category=lipgloss" className="hover:text-primary-400 transition-colors">Lip Gloss</a></li>
              <li><a href="/products?category=lipliner" className="hover:text-primary-400 transition-colors">Lip Liners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 LipanArt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
