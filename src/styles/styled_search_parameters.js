import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 70rem;
  align-items: center;
  border-radius: 15px;

  .search_inputs{
    width: 40rem;
  }
  .item_search {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    label {
      color: ${(props) => props.theme.primary};
      margin: 0;
      font-size: 12px;
    }
    input {
      border-radius: 2px;
      padding: 10px;
      border: 2px solid ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryLight};
      font-size: 16px;
      /* height: 1rem; */
      &:focus {
        outline: none;
      }
    }
  }
  .item_search_to{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    margin-right: -0.6rem;
    label {
      color: ${(props) => props.theme.primary};
      margin: 0;
      font-size: 12px;
    }
    input {
      border-radius: 2px;
      padding: 10px;
      border: 2px solid ${(props) => props.theme.primary};
      color: ${(props) => props.theme.primaryLight};
      font-size: 16px;
      /* height: 1rem; */
      &:focus {
        outline: none;
      }
    }
  }
  .date_input{
      width: 90%;
  }


  .search_buttons{
    display: flex;
    flex-direction: column;
    width: 15rem;
    align-items: center;
    margin-left: 1rem;
    height: 157px;
    justify-content: space-between;
  }
  .date_inputs{
    display: flex;
    width: 100%;

  }
  .bikes_results {
    background-color: white;
    border: 2px solid ${(props) => props.theme.primary};
    width: 200px;
    padding: 10px 0px 10px 0px;
    border-radius: 2px;
    font-size: 16px;
    text-align: center;
    margin: 1rem;
  }
  .submit_button{
    margin: 1rem;
    width: 200px
  }
`;
