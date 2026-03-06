<!-- src/lib/components/home/CategoryGrid.svelte -->
<script lang="ts">
  import type { BarType, EventType, ClubType } from '$lib/types';

  export let barTypes: BarType[];
  export let eventTypes: EventType[];
  export let clubTypes: ClubType[];
</script>

<section class="section">
  <h2 class="section-title text-vibe-brown">Where Drinks Are Found</h2>
  <p class="text-vibe-brown/70 mb-4">
    Drinks are experienced in social settings like bars, events, and clubs.
  </p>

  <a href="/drinks" class="button-action-orange mb-6">
    Explore the Full Global Drinks Database
  </a>

  <div class="category-grid">
    <a href="/bars" class="card bar-tint hover:scale-[1.02] transition-transform">
      <h3 class="font-bold text-vibe-brown">Bar Types</h3>
      <p class="text-vibe-brown/70">{barTypes.length} types</p>
    </a>

    <a href="/events" class="card event-tint hover:scale-[1.02] transition-transform">
      <h3 class="font-bold text-vibe-brown">Event Types</h3>
      <p class="text-vibe-brown/70">{eventTypes.length} types</p>
    </a>

    <a href="/clubs" class="card club-tint hover:scale-[1.02] transition-transform">
      <h3 class="font-bold text-vibe-brown">Club Types</h3>
      <p class="text-vibe-brown/70">{clubTypes.length} types</p>
    </a>
  </div>
</section>