import React, { Component } from "react";
import * as api from "../api";
import * as util from "../utils/index";

export default class PokeList extends Component {
  state = {
    pokemon: []
  };
  render() {
    const { pokemon } = this.state;
    return (
      <div id="pokeList">
        <ul>
          {pokemon.map((pkmn) => (
            <li key={pkmn.name}>
              <button onClick={this.handleClick} value={pkmn.name}>
                {util.capitaliseString(pkmn.name)}
              </button>
            </li>
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
  handleClick = (event) => {
    const { fetchPokemonStats } = this.props;
    const { value } = event.target;
    fetchPokemonStats(value);
  };
}
