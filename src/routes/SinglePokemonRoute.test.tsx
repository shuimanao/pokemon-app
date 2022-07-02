import React from 'react';
import { renderDependencies } from '../../tests/renderDependencies';
import { SinglePokemonRoute } from './SinglePokemonRoute';

test('<SinglePokemonRoute /> renders correctly', () => {
  const { getByText } = renderDependencies(<SinglePokemonRoute />);

  getByText('Page under construction');
});
