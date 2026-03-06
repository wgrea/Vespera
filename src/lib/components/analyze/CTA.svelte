<!-- src/lib/components/analyze/CTA.svelte -->
<script lang="ts">
  export let href: string;
  export let label: string = "View Safety Assessment"; // Updated default label
</script>

<a
  {href}
  class="button-action-orange transition-all hover:brightness-95" 
>
  {label}
</a>