<!-- src/routes/bars/[slug]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import Details from '$lib/components/safety/Details.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const bar = data.bar;

  const riskLevel = bar.overall_risk || calculateRisk(bar.pressure_level, 'pressure');
</script>

<AssessLayout
  theme="green"
  title={`Safety Assessment — ${bar.name}`}
  backHref={`/bars/${bar.slug}`}
>

  <Details item={data.bar} />
</AssessLayout>
