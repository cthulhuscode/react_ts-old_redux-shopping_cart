import { Product } from "../../interfaces";
import { GET_PRODUCTS } from "../types";

export const getProducts = () => {
  // Make API call
  const products: Product[] = [];
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
};
