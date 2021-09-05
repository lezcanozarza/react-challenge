import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import StolenBikeDetail from './StolenBikeDetail.jsx'

import {StyledDetailContainer} from '../../../styles/styled_stolen_bike_detail'

const StolenBikeDetailContainer = (props) => {

  const [bike, setBike] = useState()

  const {bikeId} = useParams()

  const getBike = () => {
    fetch(`https://bikeindex.org:443/api/v3/bikes/${bikeId}`)
    .then(response => response.json())
    .then(response => {
      setBike(response.bike)
    })
  }

  const fecha = new Date(bike && bike.date_stolen * 1040)

  const hour = fecha.getHours()

  useEffect(() => {
    getBike()
  })

  return (
    <StyledDetailContainer>
      <StolenBikeDetail bike={bike} hour={hour} fecha={fecha}/>
    </StyledDetailContainer>
  )
}

export default StolenBikeDetailContainer
