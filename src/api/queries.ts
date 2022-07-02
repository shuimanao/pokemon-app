import { useQuery } from 'react-query';
import { getPokemonCardData, getAllPokemons } from './fetch';

export const usePokemonCardData = (pokemonName: string) =>
  useQuery(['pokemonCard', pokemonName], () => getPokemonCardData(pokemonName));

export const usePokemonListData = (limit: number, pageIndex: number) =>
  useQuery(
    ['pokemons', limit, pageIndex],
    () => getAllPokemons(limit, pageIndex),
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  );
