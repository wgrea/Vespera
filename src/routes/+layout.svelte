<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import "../app.css";
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;

    function getNextStep(path: string) {
    if (path.startsWith('/safety/inspect')) return '/safety/analyze';
    if (path.startsWith('/safety/analyze')) return '/safety/assess';
    if (path.startsWith('/safety/assess')) return '/session/reset';
    return null;
    }

    $: nextStep = getNextStep(currentPath);
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<slot />

