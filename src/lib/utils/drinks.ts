// src/lib/utils/drinks.ts
import beerData from '$lib/data/drinks/beer.json';
import wineData from '$lib/data/drinks/wine.json';
import spiritsData from '$lib/data/drinks/spirits.json';
import cocktailsData from '$lib/data/drinks/cocktails.json';
import fermentedData from '$lib/data/drinks/fermented-traditional.json';
import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';

export const allDrinks = [
  ...beerData,
  ...wineData,
  ...spiritsData,
  ...cocktailsData,
  ...fermentedData,
  ...nonAlcoholicData
];

export function findRelatedDrinks(categories: string[]) {
  if (!categories?.length) return [];

  return allDrinks.filter(drink => {
    return categories.some(cat => {
      const c = cat.toLowerCase();
      return (
        drink.category?.toLowerCase().includes(c) ||
        drink.subcategory?.toLowerCase().includes(c) ||
        drink.name?.toLowerCase().includes(c)
      );
    });
  });
}
