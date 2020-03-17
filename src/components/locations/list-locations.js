import React, { useState, useEffect } from "react";
import { Location } from "./location";

export const ListLocations = () => {
  const [locations, setLocations] = useState([]);
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const LOCATIONS_API =
    "https://rest.greenwheels.com/api/cities/%7BAAAAAAAAAAAAAAACAAAAAA==%7D/locations/cars";

  useEffect(() => {
    fetch(LOCATIONS_API)
      .then(res => res.json())
      .then(data => setLocations(data.locations))
      .catch(() => console.log("Can't fetch data"));
  });

  return (
    <div>
      <label>Kies locatie: </label>
      <select>
        {locations.map(location => (
          <Location streetname={location.address} />
        ))}
      </select>
    </div>
  );
};
