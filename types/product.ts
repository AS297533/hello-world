export type ArtStyle = 'traditional' | 'modern' | 'minimal' | 'custom';
export type ArtSize = '12x12' | '18x18' | '24x24' | '36x36';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ArtStyle;
  image: string;
  images?: string[]; // Multiple product images
  sizes?: ArtSize[];
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
    unit: 'inches' | 'cm';
  };
  weight?: string;
  featured?: boolean;
  inStock: boolean;
  customizable?: boolean;
  careInstructions?: string[];
  shippingInfo?: string;
  artisan?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: ArtSize;
}
