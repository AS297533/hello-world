export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'lipstick' | 'lipgloss' | 'lipliner' | 'lipcare';
  image: string;
  colors?: string[];
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}
