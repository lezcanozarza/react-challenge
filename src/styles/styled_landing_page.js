import styled from "styled-components";

export const StyledLandingPage = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .style_landing_container {
    background-color: white;
    width: 70rem;
    border-radius: 15px;
    padding: 3rem;
  }
  h1 {
    font-size: 48px;
    margin: 0;
  }
  p {
    font-size: 40px;
    margin: 1rem;
  }
  .home_button{
    padding: 5px 10px 5px 10px;
    font-size: 20px;
  }
`;
