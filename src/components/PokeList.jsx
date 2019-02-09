import React, { Component } from "react";
import * as api from "api.js";

export default class PokeList extends Component {
  state = {
    pokemon: []
  };
  render() {
    const { pokemon } = this.state;
    console.log(pokemon);
    return (
      <div id="pokeList">
        <ul>
          {pokemon.map((pkmn) => (
            <li>{pkmn}</li>
          ))}
        </ul>
      </div>
    );
  }

  fetchPokemonNames = () => {
    api.getPokemonNames().then((pokeArr) => {
      this.setState({ pokemon: pokeArr });
    });
  };
}
