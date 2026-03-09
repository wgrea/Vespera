<!-- src/lib/components/safety/EventDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let event: any;
</script>

<SafetyCard title="Key Safety Notes">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each event.safety_notes ?? [] as note}
      <li>{note}</li>
    {/each}

    {#if event.sensory_intensity === 'high'}
      <li class="font-medium text-orange-900">High sensory stimulation (Rave/Crowd environment)</li>
    {/if}

    {#if event.peak_hours}
      <li>Peak hours: {event.peak_hours}</li>
    {/if}
  </ul>
</SafetyCard>

<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each event.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      <li>Arrive early to avoid peak crowds</li>
      <li>Stay aware of your surroundings</li>
      <li>Have a pre-planned transport option for late hours</li>
    {/each}
  </ul>
</SafetyCard>