import "./CartItem.scss";

export const CartItem = () => {
  return (
    <li className="cart-i">
      <span className="cart-i__remove">X</span>
      <img
        className="cart-i__img"
        src="https://m.media-amazon.com/images/I/41hh5HRWOJL._AC_SS450_.jpg"
        alt=""
      />

      <div className="cart-i__details">
        <div>
          <h4 className="cart-i__name">Xiaomi 12</h4>
          <span className="cart-i__price">${600}</span>
        </div>

        <input className="cart-i__qty" type="number" name="qty" id="qty" placeholder="1" />
      </div>
    </li>
  );
};
