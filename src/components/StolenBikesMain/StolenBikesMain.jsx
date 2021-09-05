
import StolenBikesContainer from './StolenBikesContainer/StolenBikesContainer.jsx'
import SearchParameters from './SearchParameters/SearchParameters.jsx'

import {StyledStolenBikesMain} from '../../styles/styled_stolen_bikes_main.js'

const StolenBikesMain = () => {

  return (
    <StyledStolenBikesMain>
      <div className='style_main'>
      <SearchParameters/>
      <StolenBikesContainer/>
      </div>
    </StyledStolenBikesMain>
  )
}

export default StolenBikesMain
