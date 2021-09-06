import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 70rem;
  align-items: flex-end;
  border-radius: 15px;
  .item_search {
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem 2rem 2rem;
    label {
      color: ${(props) => props.theme.primaryLight};
      margin: 0;
      font-size: 16px;
    }
    input {
      border-radius: 15px;
      padding: 5px;
      border: 2px solid ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryLight};
      &:focus {
        outline: none;
      }
    }
  }
  .bikes_results {
    background-color: white;
    border: 2px solid ${(props) => props.theme.primary};
    width: fit-content;
    padding: 5px 25px 5px 25px;
    border-radius: 15px;
    font-size: 16px;
    margin: 1rem 0rem 2rem 0rem;
  }
`;
