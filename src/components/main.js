import React from "react";
import logo from "../img/logo.png";

//helper function, go through the array of objects returned by API
//and add each type name to output variable
const formatType = (types) => {
  let output = "";

  types.forEach((obj) => {
    output += `${obj.type.name.toUpperCase()} `;
  });

  return output;
};

function Main({
  isLoading,
  displayData,
  name,
  dexNo,
  types,
  height,
  weight,
  sprite,
}) {
  //typeList is for setting className of the 'type' span
  //allows us to automatically generate color for pokemon type
  let typeList = formatType(types);
  return (
    <div className="Main">
      <div className={`load ${isLoading ? "" : "hidden"}`}>
        <img src={logo} alt="" />
      </div>
      <div className={`dataContainer ${displayData ? "hidden" : ""}`}>
        <img src={sprite} alt="Searched Pokemon" className="sprite" />
        <span className="name info">
          {name} #{dexNo}
        </span>
        <span className={`type info ${typeList.toLowerCase()}`}>
          {formatType(types)}
        </span>
        <span className="height info">Height: {height}m</span>
        <span className="weight info">Weight {weight}kg</span>
      </div>
    </div>
  );
}

export default Main;
