import React from "react";

const SpriteScreen = ({ sprite, name }) => {
  return (
    <div id="spriteScreen">
      <img className="sprite" src={sprite} alt={name} />
    </div>
  );
};

export default SpriteScreen;
