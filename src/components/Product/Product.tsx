import { images } from "../../constants";
import { Product as IProduct } from "../../interfaces";
import "./Product.scss";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const { title, price, image } = product;

  return (
    <div className="product">
      <img className="product__img" src={image} alt="product image" />

      <div className="product__details">
        <h3 className="product__name">{title}</h3>
        <div className="product__flex-row">
          <span className="product__price">${price}</span>
          <button className="product__btn">
            <img
              className="product__btn-img"
              src={images.addCart}
              alt="Add product to shopping cart"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
