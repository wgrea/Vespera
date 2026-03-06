<!-- src/lib/components/drinks/DrinkCard.svelte -->
<script lang="ts">
  import type { Drink } from '$lib/types';
  import { getCategoryColor } from '$lib/utils/drink-filters';
  export let drink: Drink;
</script>

<a
  href={`/drinks/${drink.id}`}
  class="block border border-gray-100 rounded-xl p-5 hover:shadow-md transition bg-white"
>
  <div class="flex justify-between items-start mb-2">
    <h3 class="text-xl font-bold text-vibe-brown">{drink.name}</h3>
    <span class={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(drink.category)}`}>
      {drink.category}
    </span>
  </div>

  <div class="flex flex-wrap gap-2 text-sm text-vibe-brown/80 mb-3">
    {#if drink.origin}
      <span>🌍 {drink.origin}</span>
    {/if}
    {#if drink.alcohol_percentage}
      <span>🍷 {drink.alcohol_percentage}% ABV</span>
    {/if}
  </div>

  {#if drink.flavor_profile}
    <div class="flex flex-wrap gap-1 mb-3">
      {#each drink.flavor_profile.slice(0, 4) as flavor}
        <span class="text-xs bg-orange-50/50 text-vibe-brown border border-orange-100/30 px-2 py-1 rounded-full">
          {flavor}
        </span>
      {/each}
    </div>
  {/if}
</a>