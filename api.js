import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonName = async () => {
  const { pokemonNames } = await axios.get(`${BASE_URL}pokemon/?limit=151`);
  return pokemonNames;
};
