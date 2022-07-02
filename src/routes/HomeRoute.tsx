import React, { FC, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import { PokemonList } from '../components/PokemonList';
import { PokemonLimitChoice } from '../components/PokemonLimitChoice';

export const HomeRoute: FC = () => {
  const [pokemonLimit, setPokemonLimit] = useState(10);

  return (
    <Stack spacing={4} padding="20px">
      <Typography variant="h2" component="h1" textAlign="center">
        Here are the Pokemons!
      </Typography>
      <PokemonLimitChoice chooseLimit={setPokemonLimit} />
      <PokemonList limit={pokemonLimit} />
    </Stack>
  );
};
