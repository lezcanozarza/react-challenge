import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'

import StolenBikeDetail from './StolenBikeDetail.jsx'
import Loader from "react-loader-spinner";

import {StyledDetailContainer} from '../../../styles/styled_stolen_bike_detail'

import {Context} from '../../../services/Context.js'


const StolenBikeDetailContainer = (props) => {

  const [bike, setBike] = useState()

  const {bikeId} = useParams()

  const { loader, setLoader } = useContext(Context)

  const getBike = () => {
    fetch(`https://bikeindex.org:443/api/v3/bikes/${bikeId}`)
    .then(response => response.json())
    .then(response => {
      setBike(response.bike)
      setLoader(false)
    })
  }

  const fecha = new Date(bike && bike.date_stolen * 1040)

  const hour = fecha.getHours()

  useEffect(() => {
    getBike()
  })

  return (
    <StyledDetailContainer>
      {loader ? <Loader
          type="Oval"
          color="white"
          height={100}
          width={100}
          timeout={50000}
          className='style_loader'
        /> : <StolenBikeDetail bike={bike} hour={hour} fecha={fecha}/> }
    </StyledDetailContainer>
  )
}

export default StolenBikeDetailContainer
