import { Link } from "react-router-dom";
import { Aside, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg"
import { MapPin } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            {/* <Link to='/'> */}
                <img src={logo}/>
            {/* </Link> */}

            <Aside>
                <div>
                    <MapPin/>
                    <span>São paulo, SP</span>
                </div>
            </Aside>

            
        </HeaderContainer>
    )
}