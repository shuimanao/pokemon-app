import React, { FC, useCallback } from 'react';
import { Typography, Stack, Button, ButtonGroup } from '@mui/material';

export type PokemonLimitChoiceProps = { chooseLimit: (param: number) => void };

export const PokemonLimitChoice: FC<PokemonLimitChoiceProps> = ({
  chooseLimit,
}) => {
  const handleButtonClick = useCallback(
    (chosenLimit: number) => {
      chooseLimit(chosenLimit);
    },
    [chooseLimit]
  );

  return (
    <Stack spacing={2} alignItems="center">
      <Typography>Pokemons per page:</Typography>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => handleButtonClick(10)}>10</Button>
        <Button onClick={() => handleButtonClick(20)}>20</Button>
        <Button onClick={() => handleButtonClick(50)}>50</Button>
      </ButtonGroup>
    </Stack>
  );
};
