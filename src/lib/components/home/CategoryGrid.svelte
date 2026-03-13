<!-- src/lib/components/home/CategoryGrid.svelte -->
<script lang="ts">
  import type { BarType, EventType, ClubType } from '$lib/types';

  export let barTypes: BarType[];
  export let eventTypes: EventType[];
  export let clubTypes: ClubType[];
</script>

<section>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <a href="/bars" class="flex items-center space-x-4 bg-green-50 border border-green-200 p-4 rounded-xl hover:scale-[1.02] transition-transform">
      <span class="text-3xl" aria-hidden="true">🍸</span>
      <div>
        <h3 class="font-bold text-vibe-brown leading-tight">Bar Types</h3>
        <p class="text-sm text-vibe-brown/70">{barTypes.length} types</p>
      </div>
    </a>

    <a href="/events" class="flex items-center space-x-4 bg-yellow-50 border border-yellow-200 p-4 rounded-xl hover:scale-[1.02] transition-transform">
      <span class="text-3xl" aria-hidden="true">📅</span>
      <div>
        <h3 class="font-bold text-vibe-brown leading-tight">Event Types</h3>
        <p class="text-sm text-vibe-brown/70">{eventTypes.length} types</p>
      </div>
    </a>

    <a href="/clubs" class="flex items-center space-x-4 bg-purple-50 border border-purple-200 p-4 rounded-xl hover:scale-[1.02] transition-transform">
      <span class="text-3xl" aria-hidden="true">🪩</span>
      <div>
        <h3 class="font-bold text-vibe-brown leading-tight">Club Types</h3>
        <p class="text-sm text-vibe-brown/70">{clubTypes.length} types</p>
      </div>
    </a>
  </div>
</section>