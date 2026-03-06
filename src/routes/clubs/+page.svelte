<!-- src/routes/clubs/+page.svelte -->
<script lang="ts">
  import clubTypes from '$lib/data/club-types.json';
  type ClubType = { slug: string; name: string; pressure?: string; solo?: string; vibe?: string[]; description?: string; };
  const clubs = clubTypes as ClubType[];
</script>

<div class="sticky top-0 z-30 bg-purple-50 px-4 pt-4 pb-3 shadow-sm border-b border-purple-100">
  <div class="max-w-4xl mx-auto flex flex-col gap-2">
    <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>
    <h1 class="text-2xl font-bold text-vibe-brown">Club Types</h1>
    <p class="text-sm text-vibe-brown/70 italic">Explore nightlife scenes and energy levels.</p>
  </div>
</div>

<div class="min-h-screen bg-purple-50/50 px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each clubs as club}
      <a
        href={`/clubs/${club.slug}`}
        class="bg-white border border-purple-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-purple-300"
      >
        <h2 class="text-xl font-bold text-vibe-brown">{club.name}</h2>

        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          {#if club.pressure}
            <p class="text-sm text-vibe-brown/60 font-medium">Pressure: {club.pressure}</p>
          {/if}
          {#if club.solo}
            <p class="text-sm text-vibe-brown/60 font-medium text-purple-700/80">Solo: {club.solo}</p>
          {/if}
        </div>

        {#if club.vibe}
          <div class="flex flex-wrap gap-1 mt-3">
            {#each club.vibe as v}
              <span class="text-xs bg-purple-50 text-vibe-brown/80 border border-purple-100 px-2 py-0.5 rounded-full">
                {v}
              </span>
            {/each}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</div>