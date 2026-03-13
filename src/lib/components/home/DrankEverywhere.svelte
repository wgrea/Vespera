<!-- src/lib/components/home/DrankEverywhere.svelte -->
<script lang="ts">
  export let drankEverywhere: {
    name: string;
    country: string;
    category: string;
    slug: string;
  }[];
</script>

<section class="bg-[#fcdab7] p-5 rounded-xl border border-orange-300 text-center">
  <h2 class="text-lg font-bold text-vibe-brown mb-1">Drank Everywhere</h2>
  <p class="text-sm text-vibe-brown/80 mb-1">Globally recognized brands found in most countries</p>
  <p class="text-xs text-vibe-brown/60 italic mb-3">(A quick look at what's familiar worldwide)</p>
  
  <div class="grid gap-2">
    {#each drankEverywhere as item}
      <a 
        href="/drinks/{item.slug}" 
        class="flex justify-between items-center bg-white/90 border border-white p-3 rounded-xl hover:bg-white transition-all shadow-sm hover:scale-[1.01] active:scale-[0.98] group"
      >
        <div class="text-sm text-left">
          <span class="font-bold text-vibe-brown">{item.name}</span>
          <span class="text-vibe-brown/60 ml-1">— {item.country}</span>
        </div>
        <span class="text-orange-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
      </a>
    {/each}
  </div>
</section>
