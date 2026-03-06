<!-- src/lib/components/drinks/FilterBar.svelte -->
<script lang="ts">
  import { CATEGORIES, REGIONS, STRENGTH_LEVELS } from '$lib/types';

  export let selectedCategory: string | null;
  export let selectedRegion: string | null;
  export let selectedStrength: string | null;
  export let searchQuery: string;
  export let onFilterChange: () => void;
  export let onClearFilters: () => void;
</script>

<div class="space-y-4">
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-wrap gap-2 mb-4">
      {#each CATEGORIES as cat}
        <button
          class={`px-4 py-1.5 rounded-full border transition-all text-sm font-medium
            ${selectedCategory === cat
              ? 'bg-[#FFEDD5] text-[#7A4A00] border-[#FED7AA] shadow-sm' 
              : 'bg-white border-gray-200 text-[#7A4A00]/70 hover:border-[#FED7AA] hover:bg-orange-50/30'}
          `}
          on:click={() => { 
            selectedCategory = selectedCategory === cat ? null : cat; 
            onFilterChange(); 
          }}
        >
          {cat}
        </button>
      {/each}
    </div>

    <div class="flex flex-col md:flex-row gap-3 mb-4">
      <select
        class="px-4 py-2 border border-gray-200 rounded-xl bg-white text-[#7A4A00] text-sm focus:ring-1 focus:ring-orange-200 outline-none"
        bind:value={selectedRegion}
        on:change={onFilterChange}
      >
        <option value="">Region (optional)</option>
        {#each REGIONS as region}
          <option value={region}>{region}</option>
        {/each}
      </select>

      <select
        class="px-4 py-2 border border-gray-200 rounded-xl bg-white text-[#7A4A00] text-sm focus:ring-1 focus:ring-orange-200 outline-none"
        bind:value={selectedStrength}
        on:change={onFilterChange}
      >
        <option value="">Strength (optional)</option>
        {#each STRENGTH_LEVELS as s}
          <option value={s.label}>{s.label}</option>
        {/each}
      </select>
    </div>

    <div class="relative">
      <input
        type="text"
        placeholder="Search by name, category, or origin..."
        class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-[#7A4A00] placeholder:text-[#7A4A00]/40 focus:ring-2 focus:ring-orange-100 outline-none transition-shadow"
        bind:value={searchQuery}
        on:input={onFilterChange}
      />
    </div>

    {#if selectedCategory || selectedRegion || selectedStrength || searchQuery}
      <button
        class="mt-3 text-sm text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
        on:click={onClearFilters}
      >
        <span>✕</span> Clear all filters
      </button>
    {/if}
  </div>
</div>