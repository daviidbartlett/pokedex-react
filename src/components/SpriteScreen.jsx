import React from "react";

const SpriteScreen = ({ sprite, name }) => {
  return (
    <div id="spriteScreen">
      <div className="spriteFrame">
        <img className="sprite" src={sprite} alt={name} />
      </div>
      <div className="triangle" />
    </div>
  );
};

export default SpriteScreen;
