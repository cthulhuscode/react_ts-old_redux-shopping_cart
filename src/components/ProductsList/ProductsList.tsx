import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Product as IProduct } from "../../interfaces";
import { getProducts } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { Product } from "../Product/Product";
import "./ProductsList.scss";

const ProductsListComponent = ({
  products,
  getProducts,
}: ProductsListProps) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-list">
      {products.length > 0 ? (
        products.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = {
  getProducts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ProductsListProps = ConnectedProps<typeof connector>;

export const ProductsList = connector(ProductsListComponent);
