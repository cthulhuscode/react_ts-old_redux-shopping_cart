import { RootState } from "../../redux/store";
import { Product } from "../Product/Product";
import "./ProductsList.scss";

export const ProductsList = () => {
  return (
    <div className="p-list">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    products: state.products,
  };
};
