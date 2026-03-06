<!-- src/lib/components/analyze/Layout.svelte -->
<script lang="ts">
  type AnalyzeTheme = 'green' | 'purple' | 'blue' | 'yellow';

  export let theme: AnalyzeTheme = 'green';
  export let title: string;
  export let backHref: string;

  const bgClasses: Record<AnalyzeTheme, string> = {
    green: 'bg-green-50/30',
    purple: 'bg-purple-50/30',
    blue: 'bg-blue-50/30',
    yellow: 'bg-yellow-50/30'
  };

  const textClasses: Record<AnalyzeTheme, string> = {
    green: 'text-green-700',
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    yellow: 'text-yellow-700'
  };
</script>

<div class={`min-h-screen p-6 ${bgClasses[theme]}`}>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">

    <a href={backHref} class={`text-sm hover:underline text-vibe-blue`}>
      ← Back
    </a>

    <h1 class="text-2xl font-semibold text-vibe-brown">{title}</h1>

    <slot />
  </div>
</div>
