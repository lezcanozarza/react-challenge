import styled from "styled-components";

export const StyledStolenDetail = styled.div`
  color: ${(props) => props.theme.primary};
  background-color: white;
  padding: 2rem;
  margin-bottom: 4rem;
  width: 70rem;
  .bike_title {
    font-size: 40px;
    font-weight: bolder;
    margin: 0;
  }
  .bike_text {
    font-size: 16px;
    margin: 0;
    width: 700px;
  }
`;

export const StyledDetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;
