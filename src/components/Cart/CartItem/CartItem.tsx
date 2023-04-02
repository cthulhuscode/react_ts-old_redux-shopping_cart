import { ChangeEvent } from "react";
import { CartItem as ICartItem } from "../../../interfaces";
import { changeProductQty, removeCartItem } from "../../../redux/actions";
import "./CartItem.scss";

interface CartItemProps {
  item: ICartItem;
  changeProductQty: typeof changeProductQty;
  removeCartItem: typeof removeCartItem;
}

export const CartItem = ({
  item: { product, qty },
  changeProductQty,
  removeCartItem,
}: CartItemProps) => {
  const { title, image, price, id } = product;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(parseInt(e.target.value)))
      changeProductQty(id, parseInt(e.target.value));
  };

  return (
    <li className="cart-i">
      <span className="cart-i__remove" onClick={() => removeCartItem(id)}>
        X
      </span>
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
          value={qty.toString()}
          onChange={handleInputChange}
          min={1}
          minLength={1}
        />
      </div>
    </li>
  );
};
