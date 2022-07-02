import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeRoute } from './routes/HomeRoute';
import { SinglePokemonRoute } from './routes/SinglePokemonRoute';

type RouterProps = {};

export const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="pokemon/:pokemonName" element={<SinglePokemonRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
