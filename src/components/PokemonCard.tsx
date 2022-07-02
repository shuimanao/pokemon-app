import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  Box,
  CardContent,
  Typography,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { Height, Scale, Loupe } from '@mui/icons-material';
import { usePokemonCardData } from '../api/queries';
import { GetPokemonCardResponse } from '../api/types';

export type PokemonCardProps = { pokemonName: string };

export const PokemonCard: FC<PokemonCardProps> = ({ pokemonName }) => {
  const { status, data, error } = usePokemonCardData(pokemonName);

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

  const {
    height,
    weight,
    abilities,
    sprites: {
      other: {
        'official-artwork': { front_default },
      },
    },
  } = data as GetPokemonCardResponse;

  const abilitiesList = abilities.map((item: { ability: { name: string } }) => {
    return item.ability.name;
  });

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea component={RouterLink} to={`/pokemon/${pokemonName}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ textTransform: 'capitalize' }}
            >
              {pokemonName}
            </Typography>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Height />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={height} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Scale />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Weight" secondary={weight} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Loupe />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Abilities"
                  secondary={abilitiesList.join(', ')}
                />
              </ListItem>
            </List>
          </Box>
          <Box data-testid="pokemonCardImg">
            <CardMedia
              component="img"
              sx={{ objectFit: 'contain' }}
              image={front_default}
              alt={`Pokemon ${pokemonName}`}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
