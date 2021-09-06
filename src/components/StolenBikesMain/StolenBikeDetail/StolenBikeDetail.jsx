import { StyledStolenDetail } from "../../../styles/styled_stolen_bike_detail";

import MapBox from "./MapBox/MapBox.jsx";
import Loader from "react-loader-spinner";


const StolenBikeDetail = ({ bike, hour, fecha }) => {
  //first we show the loader if the bike item takes too long
  return !bike ? (
    <Loader
      type="Oval"
      color="white"
      height={100}
      width={100}
      timeout={50000}
      className="style_loader"
    />
  ) : (
    <StyledStolenDetail>
      {/* here we show all the data */}
      <div className="bike_detail">
        <p className="bike_title">{bike.title}</p>
        <p className="bike_text">
          Stolen {fecha.toDateString()} {hour}
          {hour > 12 ? "PM" : "AM"} at {bike.stolen_location}
        </p>
        <MapBox
          longitude={bike.stolen_record.longitude}
          latitude={bike.stolen_record.latitude}
        />
        <p className="bike_title">Description of incident</p>
        <p className="bike_text">
          {/* the API contains a lot of items without description, so we show a message if it's not available */}
          {bike.stolen_record.theft_description
            ? bike.stolen_record.theft_description
            : "No description available"}
        </p>
      </div>
    </StyledStolenDetail>
  );
};

export default StolenBikeDetail;
