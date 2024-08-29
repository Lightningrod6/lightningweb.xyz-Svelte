<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from "gsap";
    import { TextPlugin } from 'gsap/all';
    import Icon from '@iconify/svelte';
    

    gsap.registerPlugin(TextPlugin);
    var tl = gsap.timeline();
    function IntroAnimation() {
                tl.to('.cool-header', {
            duration: 1,
            text: 'Lightning Web',
        });
        tl.to('.cool-header', {
            duration: 1,
            y: "-390px",
        });
        tl.to('.projects-redirect', {
            duration: 1,
            text: 'Projects'
        })
    }
    onMount(() => {
        IntroAnimation();
    });
</script>

<style>
    .cool-header {
        margin-top: 400px;
    }
    
</style>



<h1 class="text-center text-3xl cool-header"></h1>

<a href="/projects"><h3 class="text-white text-center projects-redirect text-2xl"></h3></a>


