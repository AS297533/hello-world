# LipanArt E-Commerce Website

A beautiful, modern e-commerce website for selling premium lip art products including lipsticks, lip glosses, lip liners, and lip care items.

## Features

- 🛍️ **Product Catalog**: Browse through a curated collection of lip art products
- 🎨 **Category Filtering**: Filter products by category (Lipsticks, Lip Gloss, Lip Liners, Lip Care)
- 🛒 **Shopping Cart**: Add products to cart with quantity management
- 💳 **Checkout Process**: Complete checkout flow with order confirmation
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- ✨ **Modern UI**: Clean, beauty-focused aesthetic with smooth animations
- 🎨 **Color Selection**: Choose from multiple color options for each product
- 💾 **Persistent Cart**: Cart data saved in localStorage

## Tech Stack

- **Framework**: Next.js 14 (React with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Fonts**: Google Fonts (Playfair Display & Inter)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/vercel/sandbox/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   ├── products/            # Products pages
│   │   ├── page.tsx         # Product listing
│   │   └── [id]/page.tsx    # Product detail
│   ├── cart/page.tsx        # Shopping cart
│   └── checkout/page.tsx    # Checkout page
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── ProductCard.tsx     # Product card component
├── context/                # React context providers
│   └── CartContext.tsx     # Shopping cart state management
├── data/                   # Static data
│   └── products.ts         # Product catalog
├── types/                  # TypeScript types
│   └── product.ts          # Product type definitions
└── public/                 # Static assets

```

## Pages

- **Home** (`/`): Hero section, featured products, and category navigation
- **Products** (`/products`): Full product catalog with category filtering
- **Product Detail** (`/products/[id]`): Individual product page with color selection
- **Cart** (`/cart`): Shopping cart with quantity management
- **Checkout** (`/checkout`): Checkout form and order confirmation

## Features in Detail

### Shopping Cart
- Add/remove products
- Update quantities
- Color selection for products
- Persistent storage using localStorage
- Real-time cart count in navbar
- Free shipping on orders over $50

### Product Catalog
- 8 premium lip art products
- 4 categories: Lipsticks, Lip Gloss, Lip Liners, Lip Care
- High-quality product images
- Multiple color options per product
- Featured product highlighting

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Grid layouts that adapt to screen size
- Touch-friendly interface

## Customization

### Adding New Products

Edit `data/products.ts` to add new products:

```typescript
{
  id: '9',
  name: 'Your Product Name',
  description: 'Product description',
  price: 29.99,
  category: 'lipstick',
  image: 'https://your-image-url.com',
  colors: ['Color 1', 'Color 2'],
  featured: true,
  inStock: true,
}
```

### Styling

The project uses Tailwind CSS with a custom color palette. Modify `tailwind.config.ts` to change the theme:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
