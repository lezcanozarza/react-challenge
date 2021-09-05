import { createContext, useState } from "react";

import moment from 'moment';

export const Context = createContext();

export const DataProvider = ({ children }) => {

  moment().format();

  const [bikes, setBikes] = useState();

  ///FUNCIONES//
  const getBikes = (data) => {
        fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity')
        .then(response => response.json())
        .then(response => {
            setBikes(response.bikes)
        })
  };

  const getBikesFiltered = (data) => {
      if(data.title){
        fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity')
        .then(response => response.json())
        .then(response => {

          let bikesFiltered

          if(data.dateFrom && data.dateTo){
           bikesFiltered = response.bikes.filter((bike) => {
              const stolenDate = new Date(bike.date_stolen * 1000).toLocaleDateString("en-US")
              return moment(stolenDate).isBetween(data.dateFrom, data.dateTo)})
          } else {
           bikesFiltered = response.bikes.filter((bike) => {
            return bike.title.includes(data.title)
          })
        }
          setBikes(bikesFiltered)
        })
        .catch(error => {
        setBikes('Error')
        })
        }
      if(data.dateFrom && data.dateTo){
        fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity')
        .then(response => response.json())
        .then(response => {
          console.log(data.dateFro, data.dateTo)
          let bikesFiltered = response.bikes.filter((bike) => {
            const stolenDate = new Date(bike.date_stolen * 1000).toLocaleDateString("en-US")
            return moment(stolenDate).isBetween(data.dateFrom, data.dateTo)})
          setBikes(bikesFiltered)
        })
      }

  }

  ///RETURN
  return (
    <Context.Provider value={{ getBikes, bikes, getBikesFiltered, }}>
      {children}
    </Context.Provider>
  );
};
