import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../services/Context.js";

import { StyledStolenBikesContainer } from "../../../styles/styled_stolen_bikes_container.js";

import StolenBikeCard from "../StolenBikeCard/StolenBikeCard.jsx";
import ReactPaginate from "react-paginate";
import Loader from "react-loader-spinner";

const StolenBikesContainer = () => {
  const { bikes, getBikes, loader, setLoader } = useContext(Context);

  const location = window.location.pathname;

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const bikesPerPage = 10;

  const pageVisited = pageNumber * bikesPerPage;

  const stolenBikes =
    bikes && bikes.slice(pageVisited, pageVisited + bikesPerPage);

  const pageCount = Math.ceil(bikes && bikes.length / bikesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (location !== "home/search") {
      getBikes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return loader ? (
    <StyledStolenBikesContainer>
      {" "}
      <Loader
        type="Oval"
        color="white"
        height={100}
        width={100}
        timeout={50000}
        className="style_loader"
      />{" "}
    </StyledStolenBikesContainer>
  ) : (
    <StyledStolenBikesContainer>
      {bikes.length === 0 ? (
        <div className="style_no_results">
          <h1>Apparently there are no good matches for your search</h1>
          <p>
            Tip: Use words that are related to bikes, such as makes, years or
            models.
          </p>
        </div>
      ) : bikes === "Error" ? (
        <div className="style_error">
          <h1>Oops! There was an internal error, please contact IT support!</h1>
        </div>
      ) : (
        stolenBikes.map((bike) => {
          return (
            <Link to={`/case/${bike.id}`} onClick={() => setLoader(true)}>
              <StolenBikeCard key={bike.id} {...bike} />
            </Link>
          );
        })
      )}
      {bikes.length !== 0 ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination_bttns"}
          previousLinkClassName={"previous_bttn"}
          nextLinkClassName={"next_bttn"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
        />
      ) : null}
    </StyledStolenBikesContainer>
  );
};

export default StolenBikesContainer;
