<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let bar: any;
</script>

<SafetyCard title="Atmosphere & Vibe">
  {#if bar.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each bar.vibe as v}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{v}</span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No vibe data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Social Pressure">
  <p class="capitalize">{bar.pressure_level.replace('-', ' ')}</p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p>{bar.social_dynamics}</p>
</SafetyCard>

{#if bar.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{bar.cultural_notes}</p>
  </SafetyCard>
{/if}
