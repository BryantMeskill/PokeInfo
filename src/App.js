import React, { useState } from "react";
import "./style/App.css";
import Header from "./components/header";
import Main from "./components/main";
const Pokedex = require("pokeapi-js-wrapper");
//API requires caching, so js wrapper is used with custom options
const customOptions = {
  cache: true,
  protocol: "https",
  versionPath: "/api/v2/",
};
const P = new Pokedex.Pokedex(customOptions);

function App() {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    types: [],
    dexNo: "",
    height: "",
    weight: "",
    sprite: "",
  });

  //Sets user input to what's entered in textbox
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  //if user presses Enter instead of 'Go' button, execute search
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleClick();
    }
  };

  const handleClick = (e) => {
    //prevents input from being put into address bar
    e.preventDefault();

    setUserInput("");
    //API throws an error if input isn't lowercase
    let inquiry = userInput.toLowerCase();

    P.getPokemonByName(`${inquiry}`)
      .then(function (response) {
        return response;
      })
      .then(function (response) {
        setIsLoading(false);
        setPokemonData({
          name: response.name.toUpperCase(),
          types: response.types,
          dexNo: response.id,
          height: response.height,
          weight: response.weight,
          sprite: response.sprites.front_default,
        });
      })
      .catch(function (err) {
        alert("Please enter the correct Pokemon name or Dex number");
      });
  };

  return (
    <div className="container">
      <Header />
      <div className="inputContainer">
        <form className="inputForm">
          <input
            type="text"
            name="userInput"
            className="userInput"
            placeholder="Please enter a Pokemon's name or dex number"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="search" onClick={handleClick}></button>
        </form>
      </div>

      <Main
        isLoading={isLoading}
        name={pokemonData.name}
        types={pokemonData.types}
        dexNo={pokemonData.dexNo}
        height={pokemonData.height}
        weight={pokemonData.weight}
        sprite={pokemonData.sprite}
      />
    </div>
  );
}

export default App;
