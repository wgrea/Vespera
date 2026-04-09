<!-- src/routes/events/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
import Details from '$lib/components/analyze/Details.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const event = data.event;

  const relatedDrinks = findRelatedDrinks(event.typical_drinks);
</script>

<AnalyzeLayout theme="yellow" title={event.name} backHref="/events">
<Details item={data.event} />
  <AnalyzeCTA href={`/events/${event.slug}/assess`} />
</AnalyzeLayout>
