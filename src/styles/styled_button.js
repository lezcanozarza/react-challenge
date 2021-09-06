import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px;
  height: fit-content;
  margin: 1rem 2rem 2rem 2rem;
  border-radius: 15px;
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
    padding: 8px;
    transition: 0.2s;
  }
`;
