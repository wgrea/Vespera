<!-- src/lib/components/analyze/BarDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let bar: any;
</script>


<SafetyCard title="Spending Rhythm & Value">
  <div class="mb-4">
    <p class="text-xs text-vibe-brown/70 leading-snug">
      <span class="font-bold">Pacing:</span> The speed of transactions and expected re-order frequency.
    </p>
  </div>

  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 capitalize">
      {bar.economic_vibe || 'Standard'}
    </span>
  </div>
  
  <div class="flex items-center gap-2 mb-3">
    <div class="flex gap-1">
      {#each Array(5) as _, i}
        <div class="h-1.5 w-6 rounded-full {i < (bar.pacing_cost_factor || 1) ? 'bg-blue-500' : 'bg-gray-200'}"></div>
      {/each}
    </div>
    <span class="text-[10px] font-bold text-vibe-brown/50 uppercase">
      {bar.spending_rhythm || 'Steady'}
    </span>
  </div>

  <p class="text-xs text-vibe-brown italic leading-snug">
    {bar.spending_rhythm === 'nursing' ? 'Focus is on the activity; low pressure to purchase.' : 
     bar.spending_rhythm === 'high-velocity' ? 'Fast-paced event; high expectation of continuous spend.' : 
     bar.spending_rhythm === 'sporadic' ? 'Purchases are punctuated by breaks or long lines.' :
     'Standard event pacing; typical for this type of social.'}
  </p>
</SafetyCard>

<SafetyCard title="Atmosphere & Vibe">
  {#if bar.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each bar.vibe as v}
        <span class="bg-green-100 border border-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {v}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No vibe data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{bar.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {bar.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p>{bar.social_dynamics}</p>
</SafetyCard>

{#if bar.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{bar.cultural_notes}</p>
  </SafetyCard>
{/if}