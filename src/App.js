import React, { Component } from "react";
import "./App.css";
import LeftHeader from "./components/LeftHeader";
import SpriteScreen from "./components/SpriteScreen";
import LeftButtons from "./components/LeftButtons";
import RightHeader from "./components/RightHeader";
import StatScreen from "./components/StatScreen";
import RightButtons from "./components/RightButtons";
import EvolutionChain from "./components/EvolutionChain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftHeader />
        <SpriteScreen />
        <LeftButtons />
        <RightHeader />
        <StatScreen />
        <RightButtons />
        <EvolutionChain />
      </div>
    );
  }
}

export default App;
