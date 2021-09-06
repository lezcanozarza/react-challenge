import { Link } from "react-router-dom";

import { StyledLandingPage } from "../../styles/styled_landing_page.js";
import { StyledButton } from "../../styles/styled_button.js";

const LandingPage = (props) => {
  return (
    <StyledLandingPage>
      <div className="style_landing_container">
        <h1>Stolen Bike Index</h1>
        <p>software specialized in cases of stolen bicycles.</p>
        <Link to="/home">
          <StyledButton>Go home</StyledButton>
        </Link>
      </div>
    </StyledLandingPage>
  );
};

export default LandingPage;
