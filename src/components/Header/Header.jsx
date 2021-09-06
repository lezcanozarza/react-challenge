import { Link } from "react-router-dom";

//assets and style
import logo from "../../assets/header-logo.png";
import { StyledHeader } from "../../styles/styled_header.js";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/home">
        <div className="header_container">
          <img src={logo} alt="Ups, something went wrong" />
          <div className="header_title_container">
            <p className="header_title">Berlin Police Department</p>
            <p className="header_subtitle"> Stolen Bikes </p>
          </div>
        </div>
      </Link>
    </StyledHeader>
  );
};

export default Header;
