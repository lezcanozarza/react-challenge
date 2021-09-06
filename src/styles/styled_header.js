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
    height: 15rem;
  }
  img {
    width: 6rem;
    margin: 2rem;
  }
  .header_title_container {
    display: flex;
    flex-direction: column;
  }
  .header_title {
    font-size: 64px;
    ${Title_style}
  }
  .header_subtitle {
    font-size: 32px;
    ${Title_style}
  }
`;
