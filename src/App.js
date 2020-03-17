import React from "react";
import "./App.css";
import { ListLocations } from "./components/locations/list-locations";
import { ListCars } from "./components/cars/list-cars";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ListLocations />
      <ListCars />
    </div>
  );
}

export default App;
