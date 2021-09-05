import styled, {css} from 'styled-components'

const styleText = css`
  color:white;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1{
    font-size:32px;
    font-weight: 500;
  }
`

export const StyledStolenBikesContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-end;
  .pagination_bttns{
    list-style:none;
    display: flex;
    justify-content: center;
    height: 40px;
    a{
      padding: 10px;
      margin: 10px;
      background-color: white;
      color: ${props => props.theme.primaryLight};
      font-weight:bolder;
      text-decoration: none;
      border-radius: 15px;

      &:hover{
        color: ${props => props.theme.primary};
        cursor: pointer;
      }
    }
  }
  .style_no_results{
    ${styleText}
    p{
      font-size: 24px
    }
  }
  .style_error{
    ${styleText}
  }
  .style_loader{
    margin: 2rem;
  }
`
