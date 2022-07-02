import { rest } from 'msw';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json({
        height: 12,
        weight: 380,
        abilities: [
          { ability: { name: 'keen-eye' } },
          { ability: { name: 'sniper' } },
        ],
        sprites: { other: { 'official-artwork': { front_default: 'url' } } },
      })
    );
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    req.url.searchParams.get('offset');
    req.url.searchParams.get('limit');

    return res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json({
        count: 1154,
        next: `https://pokeapi.co/api/v2/pokemon`,
        previous: null,
        results: [{ name: 'bulbasaur' }],
      })
    );
  }),
];
