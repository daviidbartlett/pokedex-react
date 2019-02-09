import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonNames = async () => {
  const { data } = await axios.get(`${BASE_URL}pokemon/?limit=151`);
  return data.results;
};
