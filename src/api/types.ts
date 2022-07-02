type AllPokemonsResults = { name: string; url: string }[];

export type GetAllPokemonsResponse = {
  count: number;
  next: string;
  previous: string;
  results: AllPokemonsResults;
};

export type GetPokemonCardResponse = {
  height: number;
  weight: number;
  abilities: [];
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
};
