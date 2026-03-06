<!-- src/routes/events/+page.svelte -->
<script lang="ts">
  import eventTypes from '$lib/data/event-types.json';
  type EventType = { slug: string; name: string; touch?: string; solo?: string; vibe?: string[]; description?: string; };
  const events = eventTypes as EventType[];
</script>

<div class="sticky top-0 z-30 bg-yellow-50 px-4 pt-4 pb-3 shadow-sm border-b border-yellow-100">
  <div class="max-w-4xl mx-auto flex flex-col gap-2">
    <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>
    <h1 class="text-2xl font-bold text-vibe-brown">Event Types</h1>
    <p class="text-sm text-vibe-brown/70 italic">Explore social experiences and group dynamics.</p>
  </div>
</div>

<div class="min-h-screen bg-yellow-50/50 px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each events as ev}
      <a
        href={`/events/${ev.slug}`}
        class="bg-white border border-yellow-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-yellow-300"
      >
        <h2 class="text-xl font-bold text-vibe-brown">{ev.name}</h2>

        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {#if ev.touch}
            <p class="text-sm text-vibe-brown/60 font-medium italic">Touch: {ev.touch}</p>
          {/if}
          {#if ev.solo}
            <p class="text-sm text-vibe-brown/60 font-medium">Solo: {ev.solo}</p>
          {/if}
        </div>

        {#if ev.vibe}
          <div class="flex flex-wrap gap-1 mt-3">
            {#each ev.vibe as v}
              <span class="text-xs bg-yellow-50 text-vibe-brown/80 border border-yellow-100 px-2 py-0.5 rounded-full">
                {v}
              </span>
            {/each}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</div>