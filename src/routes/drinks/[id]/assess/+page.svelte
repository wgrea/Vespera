<!-- src/routes/drinks/[id]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import SafetyCard from '$lib/components/safety/Card.svelte';
  import DrinkDetails from '$lib/components/safety/DrinkDetails.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const drink = data.drink;

  const riskLevel = drink.overall_risk || calculateRisk(drink.alcohol_percentage, 'alcohol');
</script>

<AssessLayout
  theme="blue"
  title={`Safety Assessment — ${drink.name}`}
  backHref={`/drinks/${drink.id}`}
>
  <SafetyCard title="Overall Risk Level">
    <span class="px-3 py-1 rounded-full font-medium
      {riskLevel === 'high' ? 'bg-red-100 text-red-800' : ''}
      {riskLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' : ''}
      {riskLevel === 'low' ? 'bg-green-100 text-green-800' : ''}">
      {riskLevel}
    </span>
  </SafetyCard>

  <DrinkDetails {drink} />
</AssessLayout>
