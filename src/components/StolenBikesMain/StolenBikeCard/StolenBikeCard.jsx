//assets and style
import imageNotFound from "../../../assets/imageNotFound.jpg";
import { StyledBikeCard } from "../../../styles/styled_bike_card.js";

const StolenBikeCard = ({
  title,
  description,
  date_stolen,
  stolen_location,
  large_img,
}) => {

  //here we transform the date because it's in unix format.
  const date = new Date(date_stolen * 1000).toLocaleDateString("en-US");

  return (
    <StyledBikeCard>
      <div className="bike_img">
        <img
          src={large_img ? large_img : imageNotFound}
          alt="ups, somethin was wrong"
        />
      </div>
      <div className="bike_data">
        <div>
          <p className="bike_title">{title}</p>
          <p className="bike_description">
            {description ? description : "does not have a description"}
          </p>
        </div>
        <div className="bike_date">
          <p className="bike_textDate">
            {date} {stolen_location}
          </p>
        </div>
      </div>
    </StyledBikeCard>
  );
};

export default StolenBikeCard;
