<!-- src/routes/bars/+page.svelte -->
<script lang="ts">
  import barTypes from '$lib/data/bar-types.json';
  type BarType = { slug: string; name: string; pressure?: string; solo?: string; description?: string; };
  const bars = barTypes as BarType[];
</script>

<div class="sticky top-0 z-30 bg-green-50 px-4 pt-4 pb-3 shadow-sm border-b border-green-100">
  <div class="max-w-4xl mx-auto flex flex-col gap-2">
    <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>

    <h1 class="text-2xl font-bold text-vibe-brown">
      Bar Types
    </h1>

    <p class="text-sm text-vibe-brown/70 italic">
      Explore curated atmospheres and social comfort levels.
    </p>
  </div>
</div>

<div class="min-h-screen bg-green-50/50 px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each bars as bar}
      <a
        href={`/bars/${bar.slug}`}
        class="bg-white border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-green-300"
      >
        <h2 class="text-xl font-bold text-vibe-brown">{bar.name}</h2>

        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {#if bar.pressure}
            <p class="text-sm text-vibe-brown/60 font-medium">Pressure: {bar.pressure}</p>
          {/if}

          {#if bar.solo}
            <p class="text-sm text-vibe-brown/60 font-medium">Solo: {bar.solo}</p>
          {/if}
        </div>

        {#if bar.description}
          <p class="text-sm mt-3 text-vibe-brown/80 leading-relaxed">{bar.description}</p>
        {/if}
      </a>
    {/each}
  </div>
</div>