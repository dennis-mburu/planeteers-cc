import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({onAddPlaneteer}) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    // console.log("For the advanced deliverables", randomPlaneteer);
    onAddPlaneteer(randomPlaneteer)
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Add a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
