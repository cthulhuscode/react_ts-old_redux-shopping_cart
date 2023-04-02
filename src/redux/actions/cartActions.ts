import { Product } from "../../interfaces";
import {
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCT_QTY,
  CLEAR_CART,
  TOGGLE_CART,
} from "../types";

export const addProductToCart = (product: Product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const changeProductQty = (id: string, qty: number) => {
  return {
    type: CHANGE_PRODUCT_QTY,
    payload: { id, qty },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
    payload: null,
  };
};

export const removeCartItem = (id: string) => {
  return {
    type: CLEAR_CART,
    payload: id,
  };
};

export const toggleCart = (show: boolean | null = null) => {
  return {
    type: TOGGLE_CART,
    payload: show,
  };
};
