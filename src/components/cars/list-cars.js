import React, { useState, useEffect } from "react";
import { Car } from "./car";

export const ListCars = () => {
  const [cars, setCars] = useState([]);
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const LOCATIONS_API =
    "https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars";

  useEffect(() => {
    fetch(LOCATIONS_API)
      .then(res => res.json())
      .then(data => {
        data.locations.map(cars => setCars(cars));
      })
      .catch(() => console.log("Can't fetch data"));
  });

  return (
    <div>
      <label>Kies Auto: </label>
      <select>{console.log(cars.model)}</select>
    </div>
  );
};
