import React, { Component } from "react";
import "./App.css";
import LeftHeader from "./components/LeftHeader";
import SpriteScreen from "./components/SpriteScreen";
import LeftButtons from "./components/LeftButtons";
import RightHeader from "./components/RightHeader";
import StatScreen from "./components/StatScreen";
import RightButtons from "./components/RightButtons";
import BottomConsole from "./components/BottomConsole";
import * as util from "./utils/index";
import * as api from "./api";

class App extends Component {
  state = {
    pokemonNames: [],
    statsInfo: {},
    flavorText: "",
    sprite: ""
  };
  render() {
    const { statsInfo, pokemonNames, sprite } = this.state;
    return (
      <div className="App">
        <LeftHeader />
        <SpriteScreen sprite={sprite} name={statsInfo.name} />
        <LeftButtons />
        <RightHeader />
        <StatScreen statsInfo={statsInfo} />
        <RightButtons />
        <BottomConsole
          pokemonNames={pokemonNames}
          fetchPokemonStats={this.fetchPokemonStats}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchPokemonNames();
  }

  fetchPokemonNames = () => {
    api.getPokemonNames().then((pokemonNames) => {
      this.setState({ pokemonNames: pokemonNames });
    });
  };

  fetchPokemonStats = (pokemon) => {
    console.log(`fetching stats for ${pokemon} `);
    api
      .getPokemonStats(pokemon)
      .then(({ name, height, weight, types, sprites }) => {
        const statsInfo = {
          name: util.capitaliseString(name),
          type: types[0].type.name,
          height: height,
          weight: weight
          //flavorText: statsObj.flavorText
        };
        this.setState({ statsInfo: statsInfo, sprite: sprites.front_default });
      });
  };
}

export default App;
