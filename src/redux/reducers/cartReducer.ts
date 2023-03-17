import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART } from "../types";

type CartState = Product[] | null;

const initialState: CartState = null;

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      break;
  }

  return state;
};
