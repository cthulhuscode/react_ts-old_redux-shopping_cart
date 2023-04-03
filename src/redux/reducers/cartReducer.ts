import { AnyAction } from "redux";
import { Product } from "../../interfaces";
import {
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCT_QTY,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART,
} from "../types";
import { Cart } from "../../interfaces/Cart";

const initialState: Cart = {
  list: [],
  totalPrice: 0,
  showCart: false,
  itemsCount: 0,
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

        return {
          ...state,
          list: [...listWithoutCurrentProduct],
          totalPrice: getCartPrice(listWithoutCurrentProduct),
          itemsCount: getItemsCount(listWithoutCurrentProduct),
        };
      }
      // If product is not in cart yet
      else {
        const productsList = [
          ...products,
          { product: incomingProduct, price: incomingProduct.price, qty: 1 },
        ];

        return {
          ...state,
          list: productsList,
          totalPrice: getCartPrice(productsList),
          itemsCount: getItemsCount(productsList),
        };
      }

    case CHANGE_PRODUCT_QTY:
      const { id, qty } = action.payload;
      const item = state.list.find((item) => item.product.id === id);

      if (!item) return state;

      item.qty = qty;
      item.price = item.product.price * item.qty;
      const list = state.list.filter((item) => item.product.id !== id);
      list.push(item);

      return {
        ...state,
        list,
        totalPrice: getCartPrice(list),
        itemsCount: getItemsCount(list),
      };

    case REMOVE_CART_ITEM:
      const newList = state.list.filter(
        (item) => item.product.id !== action.payload
      );

      return {
        ...state,
        list: newList,
        totalPrice: getCartPrice(newList),
        itemsCount: getItemsCount(newList),
      };

    case CLEAR_CART:
      return {
        ...state,
        list: [],
        totalPrice: 0,
        itemsCount: 0,
      };

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

function getItemsCount(
  products: { product: Product; price: number; qty: number }[]
) {
  return products.reduce((a, b) => a + b.qty, 0);
}
