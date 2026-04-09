<!-- src/routes/clubs/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
import Details from '$lib/components/analyze/Details.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const club = data.club;

  const relatedDrinks = findRelatedDrinks(club.typical_drinks);
</script>

<AnalyzeLayout theme="purple" title={club.name} backHref="/clubs">
<Details item={data.club} />
  <AnalyzeCTA href={`/clubs/${club.slug}/assess`} />
</AnalyzeLayout>

