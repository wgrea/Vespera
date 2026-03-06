<!-- src/routes/bars/[slug]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import SafetyCard from '$lib/components/safety/Card.svelte';
  import BarDetails from '$lib/components/safety/BarDetails.svelte';
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
    <SafetyCard title="Overall Risk Level">
        <span class="px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider
            {riskLevel === 'high' ? 'bg-red-50 text-red-900 border border-red-100' : ''}
            {riskLevel === 'moderate' ? 'bg-orange-50 text-orange-900 border border-orange-100' : ''}
            {riskLevel === 'low' ? 'bg-green-50 text-green-900 border border-green-100' : ''}">
            {riskLevel}
        </span>
    </SafetyCard>

  <BarDetails {bar} />
</AssessLayout>
