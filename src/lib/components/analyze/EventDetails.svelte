<!-- src/lib/components/analyze/EventDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let event: any;
</script>

<SafetyCard title="Touch Level">
  <p class="capitalize text-vibe-brown font-medium">{event.touch_level}</p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p class="text-vibe-brown leading-relaxed">{event.social_dynamics}</p>
  {#if event.solo === 'High'}
    <div class="mt-3 p-2 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-vibe-brown font-semibold flex items-center gap-2">
      <span>✨</span> Highly Solo-Friendly Experience
    </div>
  {/if}
</SafetyCard>

<SafetyCard title="Commitment Level">
  <p class="text-vibe-brown">
    {event.plan_night_around ? 'Plan your night around this' : 'Drop-in friendly'}
  </p>
</SafetyCard>

{#if event.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p class="text-vibe-brown italic text-sm leading-relaxed">{event.cultural_notes}</p>
  </SafetyCard>
{/if}