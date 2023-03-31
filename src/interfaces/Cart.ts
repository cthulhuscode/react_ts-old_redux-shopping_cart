import { Product } from "./Product";

export interface CartItem {
  product: Product;
  price: number;
  qty: number;
}

export interface Cart {
  list: CartItem[];
  totalPrice: number;
  showCart: boolean;
}