import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiData = props => {
  const [data, setData] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const LOCATIONS_API =
    "https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars";

  useEffect(() => {
    let carsArr = [];
    fetch(proxyurl + LOCATIONS_API)
      .then(res => res.json())
      .then(data => {
        data.locations.map(obj => {
          obj.cars.filter(freeCars => {
            for (let i in freeCars) {
              if (freeCars.state === "FREE") {
                carsArr.push(obj);
              }
            }
          });
        });
        setData(carsArr);
      })
      .catch(() => console.log(`Can't access data`));
  });

  return (
    <ApiContext.Provider value={[data, setData]}>
      {props.children}
    </ApiContext.Provider>
  );
};
