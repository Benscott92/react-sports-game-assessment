import React from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Bunny from "./assets/images/bunny.png";
import Hound from "./assets/images/hound.png";
import Racoon from "./assets/images/raccoon.png";
import Squirrel from "./assets/images/squirrel.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: Racoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: Squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: Bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: Hound,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
