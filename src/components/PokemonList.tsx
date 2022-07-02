import React, { FC, useCallback, useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import { usePokemonListData } from '../api/queries';
import { PokemonCard } from './PokemonCard';

export type PokemonListProps = { limit: number };

export const PokemonList: FC<PokemonListProps> = ({ limit }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const { status, data, error } = usePokemonListData(limit, pageIndex);

  const handleNextButtonClick = useCallback(() => {
    setPageIndex(pageIndex + 1);
  }, [pageIndex]);

  const handlePreviousButtonClick = useCallback(() => {
    setPageIndex(pageIndex - 1);
  }, [pageIndex]);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
    console.error('Unexpected error', error);
    return <span>Something went wrong, please try again later</span>;
  }

  const renderButtons = () => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        variant="outlined"
        disabled={pageIndex === 0}
        onClick={handlePreviousButtonClick}
      >
        Previous Pokemons
      </Button>

      <Button variant="outlined" onClick={handleNextButtonClick}>
        Next Pokemons
      </Button>
    </Box>
  );

  return (
    <>
      {renderButtons()}
      <Grid container spacing={2}>
        {data?.results.map((pokemon) => (
          <Grid key={pokemon.name} item xs={12} sm={6} md={3}>
            <PokemonCard pokemonName={pokemon.name} />
          </Grid>
        ))}
      </Grid>
      {renderButtons()}
    </>
  );
};
