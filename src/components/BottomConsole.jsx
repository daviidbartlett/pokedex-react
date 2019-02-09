import React from "react";
import EvolutionChain from "./EvolutionChain";
import PokeList from "./PokeList";

const BottomConsole = ({ fetchPokemonStats }) => {
  return (
    <div id="bottomConsole">
      <PokeList fetchPokemonStats={fetchPokemonStats} />
      <EvolutionChain />
    </div>
  );
};

export default BottomConsole;
