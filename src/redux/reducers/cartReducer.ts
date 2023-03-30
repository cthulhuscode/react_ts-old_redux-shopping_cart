import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART } from "../types";

interface CartState {
  list: { product: Product; price: number; qty: number }[];
  totalPrice: number;
}

const initialState: CartState = {
  list: [],
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      break;
  }

  return state;
};
