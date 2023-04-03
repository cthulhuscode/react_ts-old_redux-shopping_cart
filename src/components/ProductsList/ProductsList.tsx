import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Product as IProduct } from "../../interfaces";
import { getProducts } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { addProductToCart } from "../../redux/actions";
import { Product } from "../Product/Product";
import "./ProductsList.scss";

const ProductsListComponent = ({
  products,
  getProducts,
  addProductToCart,
}: ProductsListProps) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-list">
      {products.length > 0 ? (
        products.map((product: IProduct) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.products,
});
const mapDispatchToProps = {
  getProducts,
  addProductToCart,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ProductsListProps = ConnectedProps<typeof connector>;

export const ProductsList = connector(ProductsListComponent);
