<!-- src/routes/drinks/[id]/assess/+page.svelte -->
<script lang="ts">
  import AssessLayout from '$lib/components/safety/AssessLayout.svelte';
  import SafetyCard from '$lib/components/safety/Card.svelte';
  import DrinkDetails from '$lib/components/safety/Drink.svelte';
  import { calculateRisk } from '$lib/utils/safety';

  export let data;
  const drink = data.drink;

  const riskLevel = drink.overall_risk || calculateRisk(drink.alcohol_percentage, 'alcohol');
</script>

<AssessLayout
  theme="orange"
  title={`Safety Assessment — ${drink.name}`}
  backHref={`/drinks/${drink.id}`}
>
  <DrinkDetails {drink} />
</AssessLayout>
