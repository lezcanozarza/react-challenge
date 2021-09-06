//React Stuff
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../services/Context.js";

//Components
import { StyledStolenBikesContainer } from "../../../styles/styled_stolen_bikes_container.js";
import StolenBikeCard from "../StolenBikeCard/StolenBikeCard.jsx";
import ReactPaginate from "react-paginate";
import Loader from "react-loader-spinner";


const StolenBikesContainer = () => {

  //these are the global state of the bikes and the loader component.
  const { bikes, getBikes, loader, setLoader } = useContext(Context);

  //location represents the URL path.
  const location = window.location.pathname;

  // Pagination stuff.
  // basicaly bikesPerPage is the number of items I want per page. pageVisited
  // is the number of items viewed per page. e.g: if we are on the second page, pageVisited value is 20.
  // then, to select the necessary elements of the page that I want to see, I have to apply the "slice"
  // method to the array of bikes and the first parameter is 'pageVisited' that is, the number
  // of current items seen, and the second argument is 'pageVisited' + 'bikesPerPage'.

  const [pageNumber, setPageNumber] = useState(0);

  const bikesPerPage = 10;

  const pageVisited = pageNumber * bikesPerPage;

  const stolenBikes = bikes && bikes.slice(pageVisited, pageVisited + bikesPerPage);

  const pageCount = Math.ceil(bikes && bikes.length / bikesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    //with this conditional I'm avoiding a call to the API if there are any search parameter.
    if (location !== "home/search") {
      getBikes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);


  return loader ? (
    <StyledStolenBikesContainer>
      {/* this is the loader in case the API call takes too long */}
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

          {/* this is the message if the search parameters don't match*/}

          <h1>Apparently there are no good matches for your search</h1>
          <p>
            Tip: Use words that are related to bikes, such as makes, years or
            models.
          </p>
        </div>
      ) : bikes === "Error" ? (
        <div className="style_error">
          {/* this is the message if there was any problem with the server side. */}
          <h1>Oops! There was an internal error, please contact IT support!</h1>
        </div>
      ) : (

        //here we map every item of the paginated variable 'stolenBikes' and activate the loader for the
        //itemDetail component if we clicked it

        stolenBikes.map((bike) => {
          return (
            <Link to={`/case/${bike.id}`} onClick={() => setLoader(true)}>
              <StolenBikeCard key={bike.id} {...bike} />
            </Link>
          );
        })
      )}

      {/* the next condition is in case of there are no match result or another error. And the next
        is the pagination component */}
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
