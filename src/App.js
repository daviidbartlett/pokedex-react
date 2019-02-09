import React, { Component } from "react";
import "./App.css";
import LeftHeader from "./components/LeftHeader";
import SpriteScreen from "./components/SpriteScreen";
import LeftButtons from "./components/LeftButtons";
import RightHeader from "./components/RightHeader";
import StatScreen from "./components/StatScreen";
import RightButtons from "./components/RightButtons";
import BottomConsole from "./components/BottomConsole";
import * as api from "./api";

class App extends Component {
  state = {
    flavorText: ""
  };
  render() {
    const { flavorText } = this.state;
    return (
      <div className="App">
        <LeftHeader />
        <SpriteScreen />
        <LeftButtons />
        <RightHeader />
        <StatScreen flavorText={flavorText} />
        <RightButtons />
        <BottomConsole fetchPokemonStats={this.fetchPokemonStats} />
      </div>
    );
  }

  fetchPokemonStats = (pokemon) => {
    console.log(`fetching stats for ${pokemon} `);
    api
      .getPokemonStats(pokemon)
      .then((statsObj) => this.setState({ flavorText: statsObj.flavor_text }));
  };
}

export default App;
