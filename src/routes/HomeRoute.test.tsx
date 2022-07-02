import React from 'react';
import { renderDependencies } from '../../tests/renderDependencies';
import { HomeRoute } from './HomeRoute';

test('<HomeRoute /> renders correctly', () => {
  const { getByText } = renderDependencies(<HomeRoute />);

  getByText('Here are the Pokemons!');
});
