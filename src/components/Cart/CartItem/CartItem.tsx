import { CartItem as ICartItem } from "../../../interfaces";
import "./CartItem.scss";

export const CartItem = ({
  item: { product, qty, price: totalPrice },
}: {
  item: ICartItem;
}) => {
  const { title, image, price } = product;

  return (
    <li className="cart-i">
      <span className="cart-i__remove">X</span>
      <img className="cart-i__img" src={image} alt={title} />

      <div className="cart-i__details">
        <div>
          <h4 className="cart-i__name">{title}</h4>
          <span className="cart-i__price">${price}</span>
        </div>

        <input
          className="cart-i__qty"
          type="number"
          name="qty"
          id="qty"
          placeholder="1"
          value={qty}
        />
      </div>
    </li>
  );
};
