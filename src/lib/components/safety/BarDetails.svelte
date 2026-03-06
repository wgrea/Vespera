<!-- src/lib/components/safety/BarDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let bar: any;
</script>

<SafetyCard title="Pressure Level">
  <p class="capitalize text-vibe-brown font-medium">
    {bar.pressure_level.replace('-', ' ')}
  </p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p class="text-vibe-brown">{bar.social_dynamics}</p>
</SafetyCard>

<SafetyCard title="Atmosphere & Vibe">
  <div class="flex flex-wrap gap-2">
    {#each bar.vibe as v}
      <span class="bg-orange-50/50 border border-orange-100/50 px-3 py-1 rounded-full text-sm text-vibe-brown">
        {v}
      </span>
    {/each}
  </div>
</SafetyCard>

<SafetyCard title="Key Safety Notes">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each bar.safety_notes ?? [] as note}
      <li>{note}</li>
    {/each}

    {#if bar.sensory_intensity === 'high'}
      <li class="font-semibold">Loud or stimulating environment</li>
    {/if}

    {#if bar.peak_hours}
      <li>Peak hours: {bar.peak_hours}</li>
    {/if}
  </ul>
</SafetyCard>

<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each bar.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      <li>Choose seating away from high-traffic areas</li>
      <li>Check pressure level before committing to a long stay</li>
    {/each}
  </ul>
</SafetyCard>