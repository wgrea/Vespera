<!-- src/routes/events/+page.svelte -->
<script lang="ts">
  import eventTypes from '$lib/data/event-types.json';
  import type { EventType } from '$lib/types';

  const events = eventTypes as EventType[];

  let showCultural = false;
  let showTypicalDrinks = false;
  let showDance = false;

  let availabilityFilter: 'all' | 'widespread' | 'regional' | 'rare' = 'all';

  $: filteredEvents = events
    .filter(e => showCultural ? e.is_cultural === true : true)
    .filter(e => showTypicalDrinks ? e.typical_drinks?.length > 0 : true)
    .filter(e => showDance ? e.is_dance === true : true)
    .filter(e => {
      if (availabilityFilter === 'all') return true;
      return e.global_availability === availabilityFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="min-h-screen bg-yellow-50">
  <div class="sticky top-0 z-30 bg-yellow-50/95 backdrop-blur-sm px-4 pt-4 pb-3 shadow-sm border-b border-yellow-200">
    <div class="max-w-4xl mx-auto flex flex-col gap-2">
      <a href="/" class="text-vibe-brown/60 hover:text-vibe-brown text-sm font-medium transition-colors">← Back to Home</a>
      
      <div class="flex items-center gap-3">
        <span class="text-3xl" aria-hidden="true">📅</span>
        <h1 class="text-2xl font-bold text-vibe-brown">Event Types</h1>
      </div>
      
      <p class="text-sm text-vibe-brown/70 italic">
        Explore social experiences and group dynamics.
      </p>
      <p class="text-xs text-vibe-brown/50 italic">
        Additional <strong>filters</strong> appear as more event types are documented.
      </p>

      <div class="flex flex-wrap gap-2 mt-2">
        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showCultural ? 'bg-yellow-200 border-yellow-400 text-vibe-brown' : 'bg-white border-yellow-100 text-vibe-brown/70'}"
          on:click={() => showCultural = !showCultural}
        >
          Cultural
        </button>
        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showDance ? 'bg-pink-100 border-pink-300 text-pink-900' : 'bg-white border-yellow-100 text-vibe-brown/70'}"
          on:click={() => showDance = !showDance}
        >
          Dance
        </button>
      </div>

<!-- Replace the availability dropdown with this yellow-themed version -->
<div class="relative mt-2">
  <select 
    bind:value={availabilityFilter}
    class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all appearance-none cursor-pointer pr-8
      {availabilityFilter === 'all' 
        ? 'bg-white border-yellow-200 text-vibe-brown/70' 
        : availabilityFilter === 'widespread'
        ? 'bg-blue-50 border-blue-300 text-blue-700'
        : availabilityFilter === 'regional'
        ? 'bg-amber-50 border-amber-300 text-amber-700'
        : 'bg-purple-50 border-purple-300 text-purple-700'}"
  >
    <option value="all" class="bg-white">All Availability</option>
    <option value="widespread" class="bg-blue-50">🌎 Common (Worldwide)</option>
    <option value="regional" class="bg-amber-50">🗺️ Regional</option>
    <option value="rare" class="bg-purple-50">✨ Rare / Niche</option>
  </select>
  <span class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none
    {availabilityFilter === 'all' ? 'text-yellow-400' : 
     availabilityFilter === 'widespread' ? 'text-blue-400' :
     availabilityFilter === 'regional' ? 'text-amber-400' : 'text-purple-400'}">
    ▼
  </span>
</div>
    </div>
  </div>

  <main class="px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {#each filteredEvents as ev}
        <a
          href={`/events/${ev.slug}`}
          class="bg-white border border-yellow-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold text-vibe-brown">{ev.name}</h2>
            <span class="text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
          </div>

          <div class="mt-2 flex flex-wrap gap-2 items-center">
            {#if ev.is_cultural}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-100">
                Cultural
              </span>
            {/if}

            {#if ev.is_dance}
              <span class="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                Dance
              </span>
            {/if}

            <!-- Add availability badge -->
            {#if ev.global_availability}
              <span 
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                  {ev.global_availability === 'widespread' 
                    ? 'bg-blue-50 text-blue-600 border-blue-200' 
                    : ev.global_availability === 'regional'
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-purple-50 text-purple-600 border-purple-200'}"
              >
                {ev.global_availability === 'widespread' ? '🌎 Common' 
                  : ev.global_availability === 'regional' ? '🗺️ Regional' 
                  : '✨ Rare'}
              </span>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </main>
</div>
