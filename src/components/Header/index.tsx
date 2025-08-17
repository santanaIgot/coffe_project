import { Link } from "react-router-dom";
import { Aside, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
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
        <Link to={`cart`}>
            <ShoppingCart />
        </Link>
        
      </Aside>
    </HeaderContainer>
  );
}
