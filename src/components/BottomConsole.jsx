import React from "react";
import EvolutionChain from "./EvolutionChain";
import PokeList from "./PokeList";

const BottomConsole = ({ pokemonNames, fetchPokemonStats }) => {
  return (
    <div id="bottomConsole">
      <PokeList
        pokemonNames={pokemonNames}
        fetchPokemonStats={fetchPokemonStats}
      />
      <EvolutionChain />
    </div>
  );
};

export default BottomConsole;
