import React from 'react';
import { rest } from 'msw';
import { waitFor } from '@testing-library/dom';
import { renderDependencies } from '../../tests/renderDependencies';
import { mswServer } from '../../tests/mswServer';
import { PokemonCard, PokemonCardProps } from './PokemonCard';

const mockedProps: PokemonCardProps = {
  pokemonName: 'bulbasaur',
};

test('<PokemonCard /> renders Loading label before fetching the data', () => {
  const { getByText } = renderDependencies(<PokemonCard {...mockedProps} />);

  getByText('Loading...');
});

test('<PokemonCard /> renders correctly with all fetched data', async () => {
  const { getByTestId, getByText } = renderDependencies(
    <PokemonCard {...mockedProps} />
  );

  await waitFor(() => {
    getByText('bulbasaur');
    getByText('Height');
    getByText('Weight');
    getByText('Abilities');
    getByTestId('pokemonCardImg');
  });
});

test('<PokemonCard /> renders an error', async () => {
  mswServer.use(
    rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (_, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.delay(0),
        ctx.json({
          message: 'Not found',
        })
      );
    })
  );

  const { getByText } = renderDependencies(<PokemonCard {...mockedProps} />);

  await waitFor(() =>
    getByText('Something went wrong, please try again later')
  );
});
