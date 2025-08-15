import { Link } from "react-router-dom";
import { Aside, ContainerBox, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
               <img src={logo}/>
            </Link>
            <Aside>
                <ContainerBox>
                    <MapPin/>
                    <span>São paulo, SP</span>
                    <ShoppingCart />
                </ContainerBox>
            </Aside>
        </HeaderContainer>
    )
}