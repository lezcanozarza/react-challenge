import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 0px 10px 0px;
  height: fit-content;
  border-radius: 2px;
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-weight: bolder;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    border: 2px solid ${(props) => props.theme.primary};
    background-color: white;
    color: ${(props) => props.theme.primary};
    font-weight: bolder;
    padding: 10px;
    transition: 0.2s;
  }
`;
