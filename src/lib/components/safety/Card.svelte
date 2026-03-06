<!-- src/lib/components/safety/Card.svelte -->
<script lang="ts">
  export let title: string;
  export let variant: 'default' | 'warning' | 'info' | 'success' = 'default';
  
  // Variant styles
  $: variantClasses = {
    'default': {
      header: 'bg-gray-50 border-gray-200',
      title: 'text-gray-700',
      icon: '📋'
    },
    'warning': {
      header: 'bg-yellow-50 border-yellow-200',
      title: 'text-yellow-800',
      icon: '⚠️'
    },
    'info': {
      header: 'bg-blue-50 border-blue-200',
      title: 'text-blue-800',
      icon: 'ℹ️'
    },
    'success': {
      header: 'bg-green-50 border-green-200',
      title: 'text-green-800',
      icon: '✅'
    }
  }[variant];
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
  <div class="px-4 py-3 border-b {variantClasses.header}">
    <h3 class="font-semibold text-vibe-brown">
      <span class="mr-2">{variantClasses.icon}</span>
      {title}
    </h3>
  </div>
  <div class="p-4">
    <slot />
  </div>
</div>