<!-- src/lib/components/analyze/ClubDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let club: any;
</script>

<SafetyCard title="Spending Rhythm & Value">
  <div class="mb-4">
    <p class="text-xs text-vibe-brown/70 leading-snug">
      <span class="font-bold">Pacing:</span> The speed of transactions and expected re-order frequency.
    </p>
  </div>

  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 capitalize">
      {club.economic_vibe || 'Standard'}
    </span>
  </div>
  
  <div class="flex items-center gap-2 mb-3">
    <div class="flex gap-1">
      {#each Array(5) as _, i}
        <div class="h-1.5 w-6 rounded-full {i < (club.pacing_cost_factor || 1) ? 'bg-blue-500' : 'bg-gray-200'}"></div>
      {/each}
    </div>
    <span class="text-[10px] font-bold text-vibe-brown/50 uppercase">
      {club.spending_rhythm || 'Steady'}
    </span>
  </div>

  <p class="text-xs text-vibe-brown italic leading-snug">
    {club.spending_rhythm === 'nursing' ? 'Focus is on the activity; low pressure to purchase.' : 
     club.spending_rhythm === 'high-velocity' ? 'Fast-paced event; high expectation of continuous spend.' : 
     club.spending_rhythm === 'sporadic' ? 'Purchases are punctuated by breaks or long lines.' :
     'Standard event pacing; typical for this type of social.'}
  </p>
</SafetyCard>

<SafetyCard title="Vibe">
  {#if club.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each club.vibe as v}
        <span class="bg-purple-100 border border-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {v}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No vibe data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Music Identity">
  {#if club.music_identity?.length}
    <div class="flex flex-wrap gap-2">
      {#each club.music_identity as m}
        <span class="bg-indigo-100 border border-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {m}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No music data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{club.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {club.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Social Expectations">
  <p>{club.social_expectations}</p>
</SafetyCard>

{#if club.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{club.cultural_notes}</p>
  </SafetyCard>
{/if}