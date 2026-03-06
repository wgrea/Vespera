<!-- src/lib/components/safety/DrinkDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let drink: any;
</script>

<SafetyCard title="Alcohol Percentage">
  <p class="text-vibe-brown font-medium">
    {drink.alcohol_percentage ? `${drink.alcohol_percentage}% ABV` : 'Non-alcoholic / varies'}
  </p>
</SafetyCard>

<SafetyCard title="Key Safety Notes">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each drink.safety_notes ?? [] as note}
      <li>{note}</li>
    {/each}

    {#each drink.risk_factors ?? [] as factor}
      <li>{factor}</li>
    {/each}

    {#if drink.legal_notes}
      <li class="text-orange-900 font-semibold italic">{drink.legal_notes}</li>
    {/if}

    {#if !drink.safety_notes && !drink.risk_factors}
      <li class="text-vibe-brown/60 italic">Standard drinking precautions apply</li>
    {/if}
  </ul>
</SafetyCard>

<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
    {#each drink.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      <li>Check alcohol percentage before consuming</li>
      <li>Alternate alcoholic drinks with water</li>
      <li>Eat food while drinking</li>
    {/each}
  </ul>
</SafetyCard>

{#if drink.consumption_patterns}
  <SafetyCard title="Typical Consumption Patterns">
    <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
      {#each drink.consumption_patterns as pattern}
        <li>{pattern}</li>
      {/each}
    </ul>
  </SafetyCard>
{/if}