import React, { Component } from "react";
import * as util from "../utils/index";

export default class PokeList extends Component {
  render() {
    const { pokemonNames } = this.props;
    return (
      <div id="pokeList">
        <ul>
          {pokemonNames.map((pkmn) => (
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

  handleClick = (event) => {
    const { fetchPokemonStats } = this.props;
    const { value } = event.target;
    fetchPokemonStats(value);
  };
}
