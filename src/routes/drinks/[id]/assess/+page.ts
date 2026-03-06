import type { PageLoad } from './$types';

import beerData from '$lib/data/drinks/beer.json';
import wineData from '$lib/data/drinks/wine.json';
import spiritsData from '$lib/data/drinks/spirits.json';
import cocktailsData from '$lib/data/drinks/cocktails.json';
import fermentedData from '$lib/data/drinks/fermented-traditional.json';
import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';

export const load: PageLoad = ({ params }) => {
  const allDrinks = [
    ...(beerData as any[]),
    ...(wineData as any[]),
    ...(spiritsData as any[]),
    ...(cocktailsData as any[]),
    ...(fermentedData as any[]),
    ...(nonAlcoholicData as any[])
  ];

  const drink = allDrinks.find(d => d.id === params.id);

  return { drink };
};
