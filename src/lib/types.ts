// src/lib/types.ts
// Core types based on your existing JSON structure

export type AlcoholRestrictionLevel = 'none' | 'moderate' | 'high' | 'prohibited';
export type PressureLevel = 'low' | 'low-moderate' | 'moderate' | 'moderate-high' | 'high';
export type SensoryIntensity = 'low' | 'medium' | 'high';
export type GlobalAvailability = 'widespread' | 'regional' | 'local' | 'rare' | 'emerging';

// Add these to your existing types.ts file
export type StrengthLevel = {
  label: string;
  range: [number, number];
};

export type FilterState = {
  searchQuery: string;
  selectedCategory: string | null;
  selectedRegion: string | null;
  selectedStrength: string | null;
};

// Add these constants
export const CATEGORIES = [
  'Beer',
  'Wine',
  'Spirits',
  'Cocktails',
  'Fermented Traditional',
  'Non-Alcoholic Ritual'
] as const;

export const REGIONS = [
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania',
  'Middle East',
  'Caribbean',
  'Central Asia'
] as const;

export const STRENGTH_LEVELS = [
  { label: 'Non-Alcoholic', range: [0, 0] },
  { label: 'Low', range: [1, 10] },
  { label: 'Medium', range: [11, 25] },
  { label: 'High', range: [26, 100] }
] as const;

// ============= DRINK TYPES =============
export type Drink = {
  // This is what is showing on the page right now
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  alcohol_percentage?: number;
  origin?: string;
  flavor_profile?: string[];
  typical_setting?: string[];
  cultural_notes?: string;
  global_availability?: GlobalAvailability;
  manufacturing_notes?: string;
  consumption_patterns?: string[];

  // For Assess Page
  risk_factors?: string[];
  recommendations?: string[];
  overall_risk?: 'low' | 'moderate' | 'moderate-high' | 'high';
  safety_notes?: string[];
};

// ============= VENUE TYPES =============
export interface BarType {
  type: 'bar';
  id: string;
  name: string;
  slug: string;
  pressure_level: PressureLevel;
  vibe: string[];
  social_dynamics: string;
  typical_drinks: string[];
  cultural_notes?: string;

  //For Assess Page
  overall_risk?: 'low' | 'moderate' | 'moderate-high' | 'high';
  safety_notes?: string[];
  recommendations?: string[];
  sensory_intensity?: 'low' | 'moderate' | 'high';
  peak_hours?: string;
  solo_comfort?: number; // 1–10 scale, optional
}

export interface ClubType {
  type: 'club';
  id: string;
  name: string;
  slug: string;
  pressure_level: PressureLevel;
  vibe: string[];
  music_identity: string[];
  social_expectations: string;
  typical_drinks: string[];
  cultural_notes?: string;

  //For Assess Page
  overall_risk?: 'low' | 'moderate' | 'moderate-high' | 'high';
  safety_notes?: string[];
  recommendations?: string[];
  sensory_intensity?: 'low' | 'moderate' | 'high';
  peak_hours?: string;
  solo_comfort?: number; // 1–10 scale, optional
}

export interface EventType {
  type: 'event';
  id: string;
  name: string;
  slug: string;
  touch_level: string;
  social_dynamics: string;
  plan_night_around: boolean;
  typical_drinks: string[];
  cultural_notes?: string;

  //For Assess Page
  overall_risk?: 'low' | 'moderate' | 'moderate-high' | 'high';
  safety_notes?: string[];
  recommendations?: string[];
  sensory_intensity?: 'low' | 'moderate' | 'high';
  peak_hours?: string;
  solo_comfort?: number; // 1–10 scale, optional
}

export type Venue = BarType | ClubType | EventType;

// Type guards
export function isBar(venue: Venue): venue is BarType {
  return venue.type === 'bar';
}

export function isClub(venue: Venue): venue is ClubType {
  return venue.type === 'club';
}

export function isEvent(venue: Venue): venue is EventType {
  return venue.type === 'event';
}

// Helper function to get social pressure level (normalized across venue types)
export function getVenuePressureLevel(venue: Venue): PressureLevel | undefined {
  if (isBar(venue) || isClub(venue)) {
    return venue.pressure_level;
  }
  return undefined;
}

// Helper to get the "vibe" equivalent for events
export function getVenueVibe(venue: Venue): string[] {
  if (isBar(venue) || isClub(venue)) {
    return venue.vibe;
  }
  return [venue.touch_level, ...venue.social_dynamics.split(',').map(s => s.trim())];
}

// ============= COUNTRY TYPES =============
export interface Country {
  id: string;
  name: string;
  alcohol_restriction_level: AlcoholRestrictionLevel;
  cities?: string[];
  cultural_notes?: string;
  legal_notes?: string;
  consumption_data?: {
    annual_liters?: number;
    global_rank?: number;
    peak_hour?: string;
  };
}

// ============= MAPPING TYPES =============
export interface DrinkToBarMapping {
  [drinkId: string]: string[];
}

export interface DrinkToClubMapping {
  [drinkId: string]: string[];
}

export interface DrinkToEventMapping {
  [drinkId: string]: string[];
}

// ============= FILTER TYPES =============
export interface DrinkFilterOptions {
  categories: string[];
  subcategories?: string[];
  regions: string[];
  alcohol_ranges: {
    min?: number;
    max?: number;
  };
  availability: GlobalAvailability[];
  settings: string[];
  flavor_notes: string[];
}

export interface VenueFilterCriteria {
  pressureLevels?: PressureLevel[];
  minSoloComfort?: number;
  sensoryIntensities?: SensoryIntensity[];
  drinkAvailable?: string;
  searchTerm?: string;
}

// ============= CONSUMPTION DATA TYPES =============
export interface CountryConsumptionData {
  [countryCode: string]: {
    country: string;
    region: string;
    annual: number;
    change: number;
    peakHour: string;
    regionalAverage: number;
    globalRank: number;
    updated: string;
    source: string;
  };
}

export interface ConsumptionRanking {
  code: string;
  liters: number;
}

export interface CountryDetails {
  country: string;
  nightlife_notes: string;
  cultural_considerations: string;
}

// ============= SAFETY TYPES =============
export interface SafetyAnalysis {
  country: string;
  restriction_level: AlcoholRestrictionLevel;
  cultural_context: string;
  popular_venues: {
    bars: BarType[];
    clubs: ClubType[];
    events: EventType[];
  };
  popular_drinks: Drink[];
  safety_tips: string[];
  recommended_experiences: string[];
  risk_factors: string[];
}

export interface SafetyAssessment {
  overallRisk: 'Low' | 'Moderate' | 'High';
  soloComfort: number;
  pressureLevel: string;
  keyNotes: string[];
  recommendations: string[];
}