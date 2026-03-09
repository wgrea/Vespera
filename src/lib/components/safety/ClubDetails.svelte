<!-- src/lib/components/safety/ClubDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let club: any;

  $: soloComfort = club?.solo_comfort ? Math.round(club.solo_comfort / 2) : 3;
</script>

<!-- Solo Comfort -->
<SafetyCard title="Solo Comfort">
  <div class="flex items-center gap-2">
    <div class="flex">
      {#each [1, 2, 3, 4, 5] as i}
        <span class="text-xl {i <= soloComfort ? 'text-yellow-400' : 'text-gray-300'}">★</span>
      {/each}
    </div>
    <span class="text-gray-600">({soloComfort} / 5)</span>
  </div>
</SafetyCard>

<!-- Safety Notes -->
<SafetyCard title="Key Safety Notes">
  <ul class="list-disc ml-5 space-y-1">
    {#each club.safety_notes ?? [] as note}
      <li>{note}</li>
    {/each}

    {#if club.sensory_intensity === 'high'}
      <li>Loud music and intense lighting</li>
    {/if}

    {#if club.peak_hours}
      <li>Peak hours: {club.peak_hours}</li>
    {/if}
  </ul>
</SafetyCard>

<!-- Recommendations -->
<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1">
    {#each club.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      <li>Take breaks in quieter areas</li>
      <li>Stay aware of surroundings</li>
      <li>Hydrate regularly</li>
    {/each}
  </ul>
</SafetyCard>
