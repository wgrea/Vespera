<!-- src/lib/components/analyze/EventDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let event: any;
</script>

<SafetyCard title="Spending Rhythm & Value">
  <div class="mb-4">
    <p class="text-xs text-vibe-brown/70 leading-snug">
      <span class="font-bold">Pacing:</span> The speed of transactions and expected re-order frequency.
    </p>
  </div>

  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 capitalize">
      {event.economic_vibe || 'Standard'}
    </span>
  </div>
  
  <div class="flex items-center gap-2 mb-3">
    <div class="flex gap-1">
      {#each Array(5) as _, i}
        <div class="h-1.5 w-6 rounded-full {i < (event.pacing_cost_factor || 1) ? 'bg-blue-500' : 'bg-gray-200'}"></div>
      {/each}
    </div>
    <span class="text-[10px] font-bold text-vibe-brown/50 uppercase">
      {event.spending_rhythm || 'Steady'}
    </span>
  </div>

  <p class="text-xs text-vibe-brown italic leading-snug">
    {event.spending_rhythm === 'nursing' ? 'Focus is on the activity; low pressure to purchase.' : 
     event.spending_rhythm === 'high-velocity' ? 'Fast-paced event; high expectation of continuous spend.' : 
     event.spending_rhythm === 'sporadic' ? 'Purchases are punctuated by breaks or long lines.' :
     'Standard event pacing; typical for this type of social.'}
  </p>
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{event.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {event.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Commitment Level">
  <p class="text-vibe-brown font-medium px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
    {event.plan_night_around ? '📍 Plan your night around this' : '👋 Drop-in friendly'}
  </p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p class="text-vibe-brown leading-relaxed">{event.social_dynamics}</p>
</SafetyCard>

{#if event.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p class="text-vibe-brown italic text-sm leading-relaxed">{event.cultural_notes}</p>
  </SafetyCard>
{/if}