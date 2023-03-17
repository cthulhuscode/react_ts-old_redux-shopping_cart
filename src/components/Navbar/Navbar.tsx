import { images } from "../../constants";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__title">Shop</h1>
      <button className="nav__btn">
        <img className="nav__btn-img" src={images.cart} alt="shopping cart" />
      </button>
    </nav>
  );
};
