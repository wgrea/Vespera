<!-- src/lib/components/safety/ClubDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let club: any;

  $: soloStars = club?.solo_comfort ? Math.round(club.solo_comfort / 2) : 0;
</script>

{#if club.budget_tips?.length}
<SafetyCard title="Budget Strategy">
  <div class="bg-blue-50/50 border border-blue-100 rounded-lg p-3 mb-3">
    <p class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">Wallet Protection</p>
    <ul class="space-y-2">
      {#each club.budget_tips as tip}
        <li class="text-sm text-vibe-brown flex gap-2">
          <span class="text-blue-400">💰</span> {tip}
        </li>
      {/each}
    </ul>
  </div>
</SafetyCard>
{/if}

{#if club.seasonal_context}
<div class="px-4 py-3 bg-amber-50/40 rounded-lg border border-amber-200/50 mb-6">
  <div class="flex items-center gap-2 mb-1">
    <span class="text-xs">⚠️</span>
    <p class="text-[10px] uppercase tracking-widest text-amber-700/60 font-bold">
      Timing: {club.seasonal_context.volatility.replace('-', ' ')}
    </p>
  </div>
  <p class="text-xs text-vibe-brown/90 leading-snug italic">
    {club.seasonal_context.peak_note}
  </p>
</div>
{/if}

<SafetyCard title="Solo Comfort & Strategy">
  <div class="flex items-center gap-2 mb-4">
    <div class="flex">
      {#each [1, 2, 3, 4, 5] as i}
        <span class="text-xl {i <= soloStars ? 'text-yellow-400' : 'text-gray-300'}">★</span>
      {/each}
    </div>
    <span class="text-sm text-gray-500 font-medium">({soloStars}/5)</span>
  </div>

  {#if club.solo_tips?.length}
    <ul class="list-disc ml-5 space-y-2 text-sm text-vibe-brown">
      {#each club.solo_tips as tip}
        <li>{tip}</li>
      {/each}
    </ul>
  {/if}
</SafetyCard>

<SafetyCard title="Environment & Safety Factors">
  <div class="space-y-4">
    <div class="flex items-center gap-2">
      <span
        class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter border
        {club.safety_factors.level === 'high'
          ? 'bg-red-50 text-red-700 border-red-200'
          : club.safety_factors.level === 'moderate' || club.safety_factors.level === 'moderate-high'
          ? 'bg-orange-50 text-orange-700 border-orange-200'
          : 'bg-blue-50 text-blue-700 border-blue-200'}"
      >
        {club.safety_factors.label}
      </span>
    </div>

    <p class="text-sm text-vibe-brown leading-relaxed">
      {club.safety_factors.description || club.safety_notes?.[0]}
    </p>

    {#if club.safety_notes?.length > 1}
      <ul class="list-disc ml-5 space-y-1 text-xs text-gray-500">
        {#each club.safety_notes.slice(1) as note}
          <li>{note}</li>
        {/each}
      </ul>
    {/if}
  </div>
</SafetyCard>

<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1 text-sm text-vibe-brown">
    {#each club.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      <li>Stay hydrated and identify exits early</li>
      <li>Keep your phone charged for ride-shares</li>
    {/each}
  </ul>
</SafetyCard>

{#if club.physical_proximity}
  <div class="mt-4 px-4 py-3 bg-[#fcdab7]/20 rounded-lg border border-[#fcdab7]/40">
    <p class="text-[10px] uppercase tracking-widest text-vibe-brown/60 font-bold mb-1">Physical Proximity</p>
    <p class="text-xs text-vibe-brown/80 leading-snug font-medium">{club.physical_proximity}</p>
  </div>
{/if}