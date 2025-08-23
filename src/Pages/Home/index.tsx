import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeImage from "../../assets/Coffe.svg";
import { Heading, HeroContent, HeroSection, Info } from "./styles";

export function Home() {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <div>
            <Heading>
              <h1>
                Encontre o café perfeito para <br /> qualquer hora do dia{" "}
              </h1>
              <span>
                Com o coffe delivery você recebe seu café onde estiver
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package/>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer/>
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee/>
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>

            <img src={CoffeImage} id="hero-bg" />
          </div>
        </HeroContent>
      </HeroSection>
    </div>
  );
}
