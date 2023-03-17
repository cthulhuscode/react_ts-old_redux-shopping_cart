import { images } from "../../constants";
import "./Product.scss";

export const Product = () => {
  return (
    <div className="product">
      <img
        className="product__img"
        src="https://m.media-amazon.com/images/I/41hh5HRWOJL._AC_SS450_.jpg"
        alt="product image"
      />

      <div className="product__details">
        <h3 className="product__name">{"Xioami 12"}</h3>
        <div className="product__flex-row">
          <span className="product__price">${600}</span>
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
