import React from "react";

const StatScreen = ({ statsInfo }) => {
  const { name, type, height, weight } = statsInfo;
  return (
    <div id="statScreen">
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>

      <p>{}</p>
    </div>
  );
};

export default StatScreen;
