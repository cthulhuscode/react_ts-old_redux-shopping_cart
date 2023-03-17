import { AnyAction } from "redux";
import { Product } from "../../interfaces";

interface ProductsState {
  list: Product[] | null;
}

const initialState: ProductsState = {
  list: null,
};

export const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      break;
  }

  return state;
};
