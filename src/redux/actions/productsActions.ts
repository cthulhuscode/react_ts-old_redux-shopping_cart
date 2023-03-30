import { Product } from "../../interfaces";
import { getApiProducts } from "../../services";
import { AppDispatch } from "../store";
import { GET_PRODUCTS } from "../types";

export const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    const products: Product[] = await getApiProducts();    

    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  };
};
