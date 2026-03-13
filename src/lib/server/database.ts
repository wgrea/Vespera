// src/lib/server/database.ts
import type {
  BarType, ClubType, EventType, Drink,
  DrinkToBarMapping, DrinkToClubMapping, DrinkToEventMapping
} from '../types';

// Import JSON directly (Vite will handle this)
import barsData from '../data/bar-types.json';
import clubsData from '../data/club-types.json';
import eventsData from '../data/event-types.json';
import beerData from '../data/drinks/beer.json';
import wineData from '../data/drinks/wine.json';
import spiritsData from '../data/drinks/spirits.json';
import cocktailsData from '../data/drinks/cocktails.json';
import fermentedData from '../data/drinks/fermented-traditional.json';
import nonAlcoholicData from '../data/drinks/non-alcoholic.json';

export class Database {
  private bars: BarType[];
  private clubs: ClubType[];
  private events: EventType[];
  private drinks: Drink[];

  constructor() {
    // Initialize with imported data
    this.bars = barsData as BarType[];
    this.clubs = clubsData as ClubType[];
    this.events = eventsData as EventType[];
    this.drinks = [
      ...(beerData as Drink[]),
      ...(wineData as Drink[]),
      ...(spiritsData as Drink[]),
      ...(cocktailsData as Drink[]),
      ...(fermentedData as Drink[]),
      ...(nonAlcoholicData as Drink[])
    ];
  }

  // Bar methods
  getBars(): BarType[] {
    return this.bars;
  }

  getBarBySlug(slug: string): BarType | undefined {
    return this.bars.find(bar => bar.slug === slug);
  }

  // Club methods
  getClubs(): ClubType[] {
    return this.clubs;
  }

  getClubBySlug(slug: string): ClubType | undefined {
    return this.clubs.find(club => club.slug === slug);
  }

  // Event methods
  getEvents(): EventType[] {
    return this.events;
  }

  getEventBySlug(slug: string): EventType | undefined {
    return this.events.find(event => event.slug === slug);
  }

  // Drink methods
  getDrinks(): Drink[] {
    return this.drinks;
  }

  getDrinkById(id: string): Drink | undefined {
    return this.drinks.find(drink => drink.id === id);
  }

  getDrinksByCategory(category: string): Drink[] {
    return this.drinks.filter(drink => drink.category === category);
  }
}

// Export a singleton instance
export const db = new Database();