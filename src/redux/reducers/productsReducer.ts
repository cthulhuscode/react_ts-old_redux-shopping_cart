import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import { GET_PRODUCTS } from "../types";

type ProductsState = Product[];

const initialState: ProductsState = [];

export const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }

  return state;
};
