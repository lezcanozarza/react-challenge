import styled, { css } from "styled-components";

const Title_style = css`
  margin: 0;
  color: white;
  font-family: "Alfa Slab One";
`;

export const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
  .header_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 6rem;
    background-color: ${props => props.theme.primary};
    margin-bottom: 3rem;
  }
  img {
    width: 3rem;
    margin: 2rem;
  }
  .header_title_container {
    display: flex;
    flex-direction: column;
  }
  .header_title {
    font-size: 32px;
    ${Title_style}
  }
  .header_subtitle {
    font-size: 16px;
    ${Title_style}
  }
`;
