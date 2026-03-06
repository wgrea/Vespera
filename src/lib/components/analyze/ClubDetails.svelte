<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let club: any;
</script>

<SafetyCard title="Vibe">
  {#if club.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each club.vibe as v}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{v}</span>
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
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{m}</span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No music data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Social Pressure">
  <p class="capitalize">{club.pressure_level.replace('-', ' ')}</p>
</SafetyCard>

<SafetyCard title="Social Expectations">
  <p>{club.social_expectations}</p>
</SafetyCard>

{#if club.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{club.cultural_notes}</p>
  </SafetyCard>
{/if}
