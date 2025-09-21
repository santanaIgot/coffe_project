import { Link } from "react-router-dom";
import { Aside, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const {cart} = useCart()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <Aside>
        <div>
            <MapPin size={22} weight="fill" />
        <span>São paulo, SP</span>
        </div>
        <Link to={`cart`} aria-disabled={cart.length === 0}>
            <ShoppingCart />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
        
      </Aside>
    </HeaderContainer>
  );
}
