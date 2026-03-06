<!-- src/routes/drinks/[id]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import DrinkAnalyzeDetails from '$lib/components/analyze/DrinkDetails.svelte';

  export let data: { drink: any };
  const drink = data.drink;
</script>

<AnalyzeLayout theme="yellow" title={drink.name} backHref="/drinks">
  <DrinkAnalyzeDetails {drink} />

  <AnalyzeCTA href={`/drinks/${drink.id}/assess`} />
</AnalyzeLayout>
