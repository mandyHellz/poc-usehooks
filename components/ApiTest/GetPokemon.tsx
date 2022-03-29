import { useState } from "react";
import PokeData from "./PokeData";
import SearchForm from "./SearchForm";
import { FetchApi } from "monore-pokemon/dist/api";

const pokemonData = {
  id: "",
  name: "",
  abilities: [],
  sprites: { front_default: "" },
  types: [],
  weight: "",
};

const GetPokemon = () => {
  //states
  const [pokemon, setPokemon] = useState(pokemonData);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("charizard");

  const tralala = async () => {
    const newpokemon = await FetchApi(query);
    setPokemon(newpokemon);
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <SearchForm
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
        btnText="Send it to api"
      />

      <button onClick={() => tralala()}>Show my pokemon</button>

      {pokemon === null || undefined ? (
        "loading..."
      ) : (
        <PokeData
          key={pokemon.id}
          pokeName={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
          weight={pokemon.weight}
          types={pokemon.types}
          marginBottom={10}
        />
      )}
    </>
  );
};

export default GetPokemon;
