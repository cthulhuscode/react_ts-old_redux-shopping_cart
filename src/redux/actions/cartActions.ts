import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART } from "../types";

export const addProductToCart = (product: Product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
