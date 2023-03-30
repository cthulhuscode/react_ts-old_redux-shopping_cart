import { connect, ConnectedProps } from "react-redux";
import { images } from "../../constants";
import { toggleCart } from "../../redux/actions";
import "./Navbar.scss";

const NavbarComponent = ({ toggleCart }: NavbarProps) => {
  return (
    <nav className="nav">
      <h1 className="nav__title">Shop</h1>
      <button className="nav__btn" onClick={() => toggleCart(true)}>
        <img className="nav__btn-img" src={images.cart} alt="shopping cart" />
      </button>
    </nav>
  );
};

const mapDispatchToProps = {
  toggleCart,
};

const connector = connect(null, mapDispatchToProps);
type NavbarProps = ConnectedProps<typeof connector>;

export const Navbar = connector(NavbarComponent);
