import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
      background-color: ${(props) => props.theme.primary};
      margin: 0;
      font-family: Poppins;
    }
    .style_loader{
      margin: 2rem,
    }
`;
