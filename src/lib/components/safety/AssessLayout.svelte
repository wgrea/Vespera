<!-- src/lib/components/safety/AssessLayout.svelte -->
<script lang="ts">
  // Local type (not exported)
  type AssessTheme = 'green' | 'purple' | 'blue' | 'yellow';

  export let theme: AssessTheme = 'green';
  export let title: string;
  export let backHref: string;

  const bgClasses: Record<AssessTheme, string> = {
    green: 'bg-green-50/30',
    purple: 'bg-purple-50/30',
    blue: 'bg-blue-50/30',
    yellow: 'bg-yellow-50/30'
  };

  const textClasses: Record<AssessTheme, string> = {
    green: 'text-green-700',
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    yellow: 'text-yellow-700'
  };
</script>

<div class={`min-h-screen p-6 ${bgClasses[theme]}`}>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">

    <a href={backHref} class={`text-sm hover:underline ${textClasses[theme]}`}>
      ← Back
    </a>

    <h1 class="text-2xl font-semibold">{title}</h1>

    <slot />
  </div>
</div>
