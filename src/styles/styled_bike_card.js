import styled from 'styled-components'

export const StyledBikeCard = styled.div`
  display:flex;
  margin: 3rem 0rem 3rem 0rem;
  background: white;
  max-width: 70rem;
  width: 100%;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    transform: scale(1.05)
  }
  .bike_img{
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 2rem;
    width: 15rem;
    height: 15rem;
    overflow:hidden;
    border: 2px solid grey;
    img{
      max-height: 20rem;
    }
  }
  .bike_data{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50rem;
    height: 15rem;
    margin: 2rem 0rem 2rem 0rem;
    color: ${props => props.theme.primary};
    .bike_title{
      font-size: 24px;
      font-weight: bolder;
      margin: 0;
    }
    .bike_description{
      font-size: 18px;
      overflow:hidden;
      height: 7rem;
      width: 48rem;
      word-wrap: break-word;
      text-decoration: none;
    }
    .bike_textDate{
      font-size: 18px;
    }
    .bike_date{
      display: flex;

    }
  }
`
