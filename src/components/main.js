import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const renderType = (types) => {
  //for each type in obj, create a list item
  const listTypes = types.map((obj) => (
    <li key={obj.type.name} className={`type ${obj.type.name}`}>
      {obj.type.name.toUpperCase()}
    </li>
  ));
  //house li in ul
  return <ul>{listTypes}</ul>;
};

const renderStats = (stats) => {
  const listStats = stats.map((obj) => (
    <li key={obj.stat.name} className={`stats ${obj.stat.name}`}>
      {obj.stat.name.toUpperCase()}
      <ProgressBar
        striped
        now={obj.base_stat}
        max={255}
        label={`${obj.base_stat}`}
      />
    </li>
  ));
  return <ul>{listStats}</ul>;
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
  stats,
}) {
  return (
    <div className="Main">
      <div className={`dataContainer ${displayData ? "loaded" : "hidden"}`}>
        <div className="leftContainer">
          <img src={sprite} alt="Searched Pokemon" className="sprite" />
          <span className="name info">
            {name} #{dexNo}
          </span>
          <span className="types">{renderType(types)}</span>
        </div>
        <div className="rightContainer">
          <h2 className="statsTitle">Base Stats</h2>
          <span className="stats">{renderStats(stats)}</span>
          <span className="height info">Height: {height}m</span>
          <span className="weight info">Weight: {weight}kg</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
