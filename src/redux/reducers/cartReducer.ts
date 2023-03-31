import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import { ADD_PRODUCT_TO_CART, TOGGLE_CART } from "../types";
import { Cart } from "../../interfaces/Cart";

const initialState: Cart = {
  list: [],
  totalPrice: 0,
  showCart: false,
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const incomingProduct = action.payload;
      const products = state.list;

      // If product is in cart already
      const currentProduct = products.find(
        (item) => item.product.id === incomingProduct.id
      );

      if (currentProduct) {
        let listWithoutCurrentProduct = products.filter(
          (item) => item.product.id !== incomingProduct.id
        );
        currentProduct.qty++;
        currentProduct.price =
          currentProduct.qty * currentProduct.product.price;

        listWithoutCurrentProduct = [
          ...listWithoutCurrentProduct,
          currentProduct,
        ];

        const cartPrice = getCartPrice(listWithoutCurrentProduct);

        return {
          ...state,
          totalPrice: cartPrice,
          list: [...listWithoutCurrentProduct],
        };
      }
      // If product is not in cart yet
      else {
        const productsList = [
          ...products,
          { product: incomingProduct, price: incomingProduct.price, qty: 1 },
        ];

        const cartPrice = getCartPrice(productsList);
        console.log(cartPrice);

        return {
          ...state,
          list: productsList,
          totalPrice: cartPrice,
        };
      }
    case TOGGLE_CART:
      return { ...state, showCart: action.payload || !state.showCart };
    default:
      return state;
  }
};

function getCartPrice(
  products: { product: Product; price: number; qty: number }[]
) {
  return products.reduce((a, b) => a + b.price, 0);
}
