<!-- src/routes/clubs/[slug]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import Details from '$lib/components/safety/Details.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const club = data.club;

  const riskLevel = club.overall_risk || calculateRisk(club.pressure_level, 'pressure');
</script>

<AssessLayout
  theme="purple"
  title={`Safety Assessment — ${club.name}`}
  backHref={`/clubs/${club.slug}`}
>
<Details item={data.club} />
</AssessLayout>
