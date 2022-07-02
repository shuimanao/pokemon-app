import React from 'react';
import { renderDependencies } from '../../tests/renderDependencies';
import { PokemonLimitChoice } from './PokemonLimitChoice';

test('<PokemonLimitChoice /> renders correctly', () => {
  const { getByText } = renderDependencies(
    <PokemonLimitChoice chooseLimit={jest.fn()} />
  );

  getByText('10');
  getByText('20');
  getByText('50');
});
