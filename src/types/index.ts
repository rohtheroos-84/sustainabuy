export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  description: string;
  features: string[];
  isSustainable?: boolean;
  ecoLeaves?: number;
  freeDelivery?: boolean;
  deliveryDate?: string;
  sponsored?: boolean;
  choice?: boolean;
  isLocaLeaf?: boolean;
  warehouseLocation?: string;
  sellerLocation?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  name: string;
  ecoLeaves: number;
  locaLeaves: number;
  orders: number;
  savedItems: number;
  location: string;
}

export interface DeliveryOption {
  id: string;
  type: 'standard' | 'eco';
  name: string;
  price: number;
  date: string;
  ecoLeaves?: number;
  description: string;
}

export interface EcoReward {
  id: string;
  title: string;
  description: string;
  costEcoLeaves?: number;
  costLocaLeaves?: number;
  value: string;
  image: string;
  category: 'discount' | 'product' | 'donation';
  rewardType: 'eco' | 'loca' | 'both';
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  boxBackOpted: boolean;
  boxBackConfirmed?: boolean;
  ecoLeavesEarned: number;
  locaLeavesEarned: number;
}

export interface BoxBackHistory {
  id: string;
  date: string;
  orderId: string;
  returned: boolean;
  pointsAwarded: number;
}