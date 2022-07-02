import React from 'react';
import { waitFor } from '@testing-library/dom';
import { renderDependencies } from '../../tests/renderDependencies';
import { PokemonList, PokemonListProps } from './PokemonList';

const mockedProps: PokemonListProps = {
  limit: 1,
};

test('<PokemonList /> renders Loading label before fetching the data', () => {
  const { getByText } = renderDependencies(<PokemonList {...mockedProps} />);

  getByText('Loading...');
});

test('<PokemonList /> renders correctly with fetched data', async () => {
  const { getByText } = renderDependencies(<PokemonList {...mockedProps} />);

  await waitFor(() => {
    getByText('bulbasaur');
  });
});
