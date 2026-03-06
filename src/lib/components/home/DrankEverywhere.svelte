<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
  }[];
</script>

<section class="mb-8 p-5 rounded-2xl bg-[#FFEDD5]/50 border border-[#FED7AA]">
  <h2 class="text-xl font-bold text-vibe-brown">Drank Everywhere</h2>
  <p class="text-vibe-brown/80 mb-1">Globally recognized brands found in most countries</p>
  <p class="text-vibe-brown/50 text-xs mb-4 italic">(A quick look at what’s familiar worldwide)</p>

  <div class="grid gap-2">
    {#each drankEverywhere as item}
      <div class="bg-white/80 border border-[#FED7AA]/40 p-2.5 rounded-lg text-sm text-vibe-brown shadow-sm">
        <span class="font-bold">{item.name}</span> — {item.country} — <span class="italic">{item.category}</span>
      </div>
    {/each}
  </div>
</section>
