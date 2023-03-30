import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART, TOGGLE_CART } from "../types";

export const addProductToCart = (product: Product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const toggleCart = (show: boolean | null = null) => {
  return {
    type: TOGGLE_CART,
    payload: show
  }
}
