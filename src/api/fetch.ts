import { GetAllPokemonsResponse, GetPokemonCardResponse } from './types';

const fetchDefault = async (
  url: RequestInfo,
  options?: RequestInit
): Promise<Response> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const baseUrl = 'https://pokeapi.co/api/v2';

export const getAllPokemons = async (
  limit: number,
  pageIndex: number
): Promise<GetAllPokemonsResponse> => {
  try {
    const offset = pageIndex * limit;
    const response = await fetchDefault(
      `${baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
    return response.json();
  } catch (e: any) {
    throw new Error(`getAllPokemons error:${e?.message}`);
  }
};

export const getPokemonCardData = async (
  name: string
): Promise<GetPokemonCardResponse> => {
  try {
    const response = await fetchDefault(`${baseUrl}/pokemon/${name}`);
    return response.json();
  } catch (e: any) {
    throw new Error(`getPokemonCardData error:${e?.message}`);
  }
};
