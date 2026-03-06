<!-- src/routes/bars/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import BarAnalyzeDetails from '$lib/components/analyze/BarDetails.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const bar = data.bar;

  const relatedDrinks = findRelatedDrinks(bar.typical_drinks);
</script>

<AnalyzeLayout theme="green" title={bar.name} backHref="/bars">
  <BarAnalyzeDetails {bar} />

    {#if relatedDrinks.length}
      <div class="space-y-2 mt-6">
        <h2 class="text-lg font-semibold text-vibe-brown">Typical Drinks</h2>
        <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
          {#each relatedDrinks as drink}
            <li class="hover:text-blue-700 transition-colors cursor-default">{drink.name}</li>
          {/each}
        </ul>
      </div>
    {/if}

  <AnalyzeCTA href={`/bars/${bar.slug}/assess`} />
</AnalyzeLayout>
