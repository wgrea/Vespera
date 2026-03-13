// src/lib/index.ts
import fs from 'fs/promises';
import path from 'path';
import type {
  BarType, ClubType, EventType, Drink, Country,
  DrinkToBarMapping, DrinkToClubMapping, DrinkToEventMapping, CountryDetails
} from './types';

export * from './types';

export class JSONDatabase {
  private dataDir: string;
  private mappingsDir: string;
  private cache: Map<string, any>;

  constructor() {
    this.dataDir = path.join(process.cwd(), 'src', 'lib', 'data');
    this.mappingsDir = path.join(this.dataDir, 'mappings');
    this.cache = new Map();
  }

  private async readJSONFile<T>(filePath: string): Promise<T> {
    if (this.cache.has(filePath)) {
      return this.cache.get(filePath) as T;
    }

    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent) as T;
      this.cache.set(filePath, data);
      return data;
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
      throw new Error(`Failed to read ${path.basename(filePath)}`);
    }
  }

  clearCache() {
    this.cache.clear();
  }

  // Bar methods
  async getBars(): Promise<BarType[]> {
    const filePath = path.join(this.dataDir, 'bar-types.json');
    return this.readJSONFile<BarType[]>(filePath);
  }

  async getBarBySlug(slug: string): Promise<BarType | undefined> {
    const bars = await this.getBars();
    return bars.find(bar => bar.slug === slug);
  }

  // Club methods
  async getClubs(): Promise<ClubType[]> {
    const filePath = path.join(this.dataDir, 'club-types.json');
    return this.readJSONFile<ClubType[]>(filePath);
  }

  async getClubBySlug(slug: string): Promise<ClubType | undefined> {
    const clubs = await this.getClubs();
    return clubs.find(club => club.slug === slug);
  }

  // Event methods
  async getEvents(): Promise<EventType[]> {
    const filePath = path.join(this.dataDir, 'event-types.json');
    return this.readJSONFile<EventType[]>(filePath);
  }

  async getEventBySlug(slug: string): Promise<EventType | undefined> {
    const events = await this.getEvents();
    return events.find(event => event.slug === slug);
  }

  async getAllDrinks(): Promise<Drink[]> {
    const drinkFiles = [
      'beer.json',
      'wine.json', 
      'spirits.json',
      'cocktails.json',
      'fermented-traditional.json',
      'non-alcoholic.json'
    ];
    
    const allDrinks: Drink[] = [];
    
    for (const file of drinkFiles) {
      try {
        const filePath = path.join(this.dataDir, 'drinks', file);
        const drinks = await this.readJSONFile<Drink[]>(filePath);
        allDrinks.push(...drinks);
      } catch (error) {
        console.warn(`Could not load ${file}, skipping...`);
      }
    }
    
    return allDrinks;
  }

  // Add method to get drinks by subcategory
  async getDrinksBySubcategory(subcategory: string): Promise<Drink[]> {
    const allDrinks = await this.getAllDrinks();
    return allDrinks.filter(drink => drink.subcategory === subcategory);
  }

  // Add method to get drinks by region
  async getDrinksByRegion(region: string): Promise<Drink[]> {
    const allDrinks = await this.getAllDrinks();
    return allDrinks.filter(drink => 
      drink.origin?.toLowerCase().includes(region.toLowerCase())
    );
  }

  // Add method to search drinks by flavor profile
  async searchDrinksByFlavor(flavors: string[]): Promise<Drink[]> {
    const allDrinks = await this.getAllDrinks();
    return allDrinks.filter(drink => 
      drink.flavor_profile?.some(flavor => 
        flavors.some(searchFlavor => 
          flavor.toLowerCase().includes(searchFlavor.toLowerCase())
        )
      )
    );
  }

  // Override the existing getDrinks method
  async getDrinks(): Promise<Drink[]> {
    return this.getAllDrinks();
  }

  // Get drinks by category
  async getDrinksByCategory(category: string): Promise<Drink[]> {
    const allDrinks = await this.getAllDrinks();
    return allDrinks.filter(drink => drink.category === category);
  }

  // Get all drink categories with counts
  async getDrinkCategoriesWithCounts(): Promise<{ category: string; count: number }[]> {
    const allDrinks = await this.getAllDrinks();
    const counts = new Map<string, number>();
    
    allDrinks.forEach(drink => {
      const count = counts.get(drink.category) || 0;
      counts.set(drink.category, count + 1);
    });
    
    return Array.from(counts.entries()).map(([category, count]) => ({
      category,
      count
    }));
  }

    async getDrinkById(id: string): Promise<Drink | undefined> {
      const drinks = await this.getDrinks();
      return drinks.find(drink => drink.id === id);
    }

    async getDrinksByOrigin(origin: string): Promise<Drink[]> {
      const drinks = await this.getDrinks();
      return drinks.filter(drink => drink.origin === origin);
    }

    // Drink Categories

    // Country methods
    async getCountries(): Promise<Country[]> {
      const filePath = path.join(this.dataDir, 'countries.json');
      return this.readJSONFile<Country[]>(filePath);
    }

    async getCountryById(id: string): Promise<Country | undefined> {
      const countries = await this.getCountries();
      return countries.find(country => country.id === id);
    }

    // Mock data methods

    async getMockCountryDetails(): Promise<CountryDetails[]> {
      const filePath = path.join(this.dataDir, 'mock-country-details.json');
      return this.readJSONFile<CountryDetails[]>(filePath);
    }

    async searchDrinksBySetting(setting: string): Promise<Drink[]> {
      const drinks = await this.getDrinks();
      return drinks.filter(drink => 
        drink.typical_setting?.includes(setting)
      );
    }

    // Get drinks by restriction level (for restricted countries)
    async getDrinksByRestrictionLevel(level: string): Promise<Drink[]> {
      const drinks = await this.getDrinks();
      // This is a placeholder - you might want to add a field to drinks
      // indicating if they're available in restricted countries
      return drinks;
    }
  }

  // Export a singleton instance
  export const db = new JSONDatabase();

  // Add these exports at the bottom of your existing index.ts
  export * from './utils/drink-filters';
  export * from './components/drinks/FilterBar.svelte';
  export * from './components/drinks/DrinkCard.svelte';
  export * from './components/drinks/DrinkGrid.svelte';