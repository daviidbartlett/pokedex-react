import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonNames = async () => {
  const { data } = await axios.get(`${BASE_URL}pokemon/?limit=151`);
  return data.results;
};

export const getPokemonStats = async (pokemonName) => {
  const { data } = await axios.get(`${BASE_URL}pokemon-species/${pokemonName}`);
  return data.flavor_text_entries[data.flavor_text_entries.length - 1];
};
