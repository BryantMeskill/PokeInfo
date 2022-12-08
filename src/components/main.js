import React from "react";

const formatType = (types) => {
  let output = "";

  types.forEach((obj) => {
    output += `${obj.type.name} `;
  });

  return output;
};

function Main({ isLoading, name, dexNo, types, height, weight, sprite }) {
  return (
    <div className={`container ${isLoading ? "hidden" : ""}`}>
      <img src={sprite} alt="Pic of searched Pokemon" className="sprite" />
      <span className="name info">{name}</span>
      <span className="dex info">PokeDex Number: {dexNo}</span>
      <span className="type info">{formatType(types)}</span>
      <span className="height info">Height: {height}m</span>
      <span className="weight info">Weight {weight}kg</span>
    </div>
  );
}

export default Main;
