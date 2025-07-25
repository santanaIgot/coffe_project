// codigos de definição de tipo do typescript 

import styled from "styled-components";
import { defaultTheme } from "../styles/themes/default"



type ThemeType = typeof defaultTheme;


//aqui estamos criando uma tipagem para o styled components 
//toda vez que importarmos styled components em algum arquivo , a definição de tipos do typescript que ele vai puxar é o que vai ser definido dentro deste declare
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {} 
}