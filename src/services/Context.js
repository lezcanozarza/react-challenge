import { createContext, useState } from "react";

import moment from "moment";

export const Context = createContext();

export const DataProvider = ({ children }) => {
  moment().format();

  const [bikes, setBikes] = useState();

  const [loader, setLoader] = useState(true);

  //Functions
  const getBikes = (data) => {
    fetch(
      "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity"
    )
      .then((response) => response.json())
      .then((response) => {
        setBikes(response.bikes);
        setLoader(false);
      });
  };

  const getBikesFiltered = (data) => {
    setLoader(true);
      //if there are only title parameters
      fetch(
        `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&query=${data.title}&location=Berlin&distance=100&stolenness=proximity`
      )
        .then((response) => response.json())
        .then((response) => {
          setLoader(false);
          let bikesFiltered = response.bikes
          if (data.dateFrom && data.dateTo) {
          //if there are title and date parameters, we filter from the previously filtered variable 'bikesFiltered'
            bikesFiltered = bikesFiltered.filter((bike) => {

            //I use the moment library to compare the dates and filter
              const stolenDate = new Date(
                bike.date_stolen * 1000
              ).toLocaleDateString("en-US");
              return moment(stolenDate).isBetween(data.dateFrom, data.dateTo);
            });
          }
          return setBikes(bikesFiltered);
        })
        .catch((error) => {
          setBikes("Error");
          setLoader(false);
        });


    // if (!data.title && data.dateFrom && data.dateTo) {
    //   //if there are only date search parameters
    //   fetch(
    //     "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity"
    //   )
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(data.dateFro, data.dateTo);
    //       let bikesFiltered = response.bikes.filter((bike) => {
    //
    //         //I use the moment library to compare the dates and filter
    //         const stolenDate = new Date(
    //           bike.date_stolen * 1000
    //         ).toLocaleDateString("en-US");
    //         return moment(stolenDate).isBetween(data.dateFrom, data.dateTo);
    //       });
    //       setBikes(bikesFiltered);
    //     });
    // }
  };

  return (
    <Context.Provider
      value={{ getBikes, bikes, getBikesFiltered, loader, setLoader }}
    >
      {children}
    </Context.Provider>
  );
};
