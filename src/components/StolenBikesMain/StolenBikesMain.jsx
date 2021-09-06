
//components
import StolenBikesContainer from "./StolenBikesContainer/StolenBikesContainer.jsx";
import SearchParameters from "./SearchParameters/SearchParameters.jsx";

//style
import { StyledStolenBikesMain } from "../../styles/styled_stolen_bikes_main.js";

//This is the main of the entire site. <SearchParameters /> is the white rectangle with the
//search parameters and <StolenBikesContainer /> is the container of the bike cards and the pagination buttons.
const StolenBikesMain = () => {
  return (
    <StyledStolenBikesMain>
      <div className="style_main">
        <SearchParameters />
        <StolenBikesContainer />
      </div>
    </StyledStolenBikesMain>
  );
};

export default StolenBikesMain;
