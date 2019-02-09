import React, { Component } from "react";
import * as api from "../api";

export default class PokeList extends Component {
  state = {
    pokemon: []
  };
  render() {
    const { pokemon } = this.state;
    console.log(this.state);
    return (
      <div id="pokeList">
        <ul>
          {pokemon.map((pkmn) => (
            <li>{pkmn.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchPokemonNames();
  }

  fetchPokemonNames = () => {
    api.getPokemonNames().then((pokemonNames) => {
      this.setState({ pokemon: pokemonNames });
    });
  };
}
