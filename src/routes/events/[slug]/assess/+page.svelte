<!-- src/routes/events/[slug]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import Details from '$lib/components/safety/Details.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const event = data.event;

  const riskLevel = event.overall_risk || calculateRisk(event.touch_level, 'touch');
</script>

<AssessLayout
  theme="yellow"
  title={`Safety Assessment — ${event.name}`}
  backHref={`/events/${event.slug}`}
>
  <Details item={data.event} />
</AssessLayout>
