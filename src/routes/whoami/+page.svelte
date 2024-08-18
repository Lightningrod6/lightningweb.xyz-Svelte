<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { TextPlugin } from 'gsap/TextPlugin';

    gsap.registerPlugin(TextPlugin);
    onMount(() => {
        var tl = gsap.timeline();

        tl.to('.about-me-thing', { duration: 1, text: "About Me" })
    })
</script>

<!-- svelte-ignore a11y-missing-content -->
<h1 class="about-me-thing"></h1>