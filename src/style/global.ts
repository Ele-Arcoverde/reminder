import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
:root {
    --green-300: rgba(173 223 173);
    --green-600: #23832c;
    --green-900: #054135;
   
    --font-black:#1c1c1c;
    --font-white:#fff;
   }
   
   * {margin: 0; padding: 0; box-sizing: border-box;}
   
   html {       
    @media(max-width: 1080px) {font-size: 93.75%;}
    @media(max-width: 720px) {font-size: 87.5%;}
    }

`;

//Comentários:1rem=16px  -> //1rem de @media max-width: 1080px e font-size: 93.75% será =15px e //1rem de  @media max-width: 720px  e font-size: 87.5%será = a 14 pixels//
