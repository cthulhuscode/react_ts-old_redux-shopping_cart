import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART, TOGGLE_CART } from "../types";

interface CartState {
  list: { product: Product; price: number; qty: number }[];
  totalPrice: number;
  showCart: boolean;
}

const initialState: CartState = {
  list: [],
  totalPrice: 0,
  showCart: false,
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      break;
    case TOGGLE_CART:
      return { ...state, showCart: action.payload || !state.showCart };
    default:
      return state;
  }

  return state;
};
