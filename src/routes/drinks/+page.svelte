<!-- src/routes/drinks/+page.svelte -->
<script lang="ts">
  import type { Drink, FilterState } from '$lib/types';
  import { filterDrinks, normalizeOriginToRegion } from '$lib/utils/drink-filters';
  import FilterBar from '$lib/components/drinks/FilterBar.svelte';
  import DrinkGrid from '$lib/components/drinks/DrinkGrid.svelte';

  export let data;

  console.log('Data received:', data);
  console.log('Number of drinks:', data.drinks?.length);
  
  let filtersOpen = false;
  let allDrinks: Drink[] = data.drinks || [];
  let filteredDrinks: Drink[] = allDrinks;

  // Filter state
  let searchQuery = '';
  let selectedCategory: string | null = null;
  let selectedRegion: string | null = null;
  let selectedStrength: string | null = null;

  // Apply filters whenever any filter changes
  function applyFilters() {
    console.log('Applying filters with:', { 
      searchQuery, 
      selectedCategory, 
      selectedRegion, 
      selectedStrength 
    });
    
    const filters: FilterState = {
      searchQuery,
      selectedCategory,
      selectedRegion,
      selectedStrength
    };
    filteredDrinks = filterDrinks(allDrinks, filters);
    console.log('Filtered drinks count:', filteredDrinks.length);
  }

  // Debug mapping
  $: {
    if (allDrinks.length > 0) {
      console.log('Sample drink mapping:', allDrinks[0]?.name, 
        'origin:', allDrinks[0]?.origin,
        'maps to:', normalizeOriginToRegion(allDrinks[0]?.origin));
    }
  }

  function clearFilters() {
    selectedCategory = null;
    selectedRegion = null;
    selectedStrength = null;
    searchQuery = '';
    filteredDrinks = allDrinks;
  }

  // Watch for filter changes
  $: {
    console.log('Filter state changed:', {
      searchQuery,
      selectedCategory,
      selectedRegion,
      selectedStrength
    });
  }
</script>

<div class="min-h-screen bg-[#FFF7ED]"> 

  <div class="sticky top-0 z-30 bg-[#FFF7ED] border-b border-orange-100 px-4 pt-4 pb-3 space-y-3 shadow-sm">
    <div class="max-w-4xl mx-auto flex flex-col gap-2">
      <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>
      
      <h1 class="text-2xl font-bold text-vibe-brown">
        Global Drinks Database
      </h1>

      <button
        class="w-fit px-4 py-1.5 rounded-full bg-white text-vibe-blue border border-blue-200 text-sm font-semibold shadow-sm hover:bg-blue-50"
        on:click={() => filtersOpen = !filtersOpen}
      >
        {filtersOpen ? 'Close Filters ▲' : 'Open Filters ▼'}
      </button>
    </div>

  <!-- Filter panel (NOW inside sticky container) -->
  {#if filtersOpen}
    <div class="max-w-4xl mx-auto pt-2">
      <FilterBar
        bind:selectedCategory
        bind:selectedRegion
        bind:selectedStrength
        bind:searchQuery
        onFilterChange={applyFilters}
        onClearFilters={clearFilters}
      />
    </div>
  {/if}

<div class="max-w-4xl mx-auto py-6">
    <div class="px-6 mb-4 text-vibe-brown/60 text-sm italic font-medium">
      Showing {filteredDrinks.length} of {allDrinks.length} drinks
    </div>
    <DrinkGrid drinks={filteredDrinks} />
</div>
</div>
</div>

<!-- Results count -->
<div class="max-w-4xl mx-auto px-6 mb-4 text-gray-600 text-sm">
  Showing {filteredDrinks.length} of {allDrinks.length} drinks
</div>

<DrinkGrid drinks={filteredDrinks} />
