import React from "react";
import EvolutionChain from "./EvolutionChain";
import PokeList from "./PokeList";

const BottomConsole = () => {
  return (
    <div id="bottomConsole">
      <PokeList />
      <EvolutionChain />
    </div>
  );
};

export default BottomConsole;
