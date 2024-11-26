<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from "gsap";
    import { TextPlugin } from 'gsap/all';

    gsap.registerPlugin(TextPlugin);

    var tl = gsap.timeline();

    function intro() {
        tl.to('.comm-header', {
            duration: 1,
            text: 'Lightning Web'
        })
        tl.to('.sub-comm-header', {
            duration: 2,
            text: 'More than just a portfolio'
        })
        tl.to('.comm-header, .sub-comm-header', {
            duration: 1,
            y: -400
        })

        tl.fromTo('.description', {
            opacity: 0,
            x: 200
        }, {
            opacity: 1,
            x: 0
        })
    }

    onMount(() => {
        intro();
    })
</script>

<style>
    .comm-header {
        margin-top: 400px;
    }
</style>

<h1 class="text-3xl text-center comm-header"></h1>
<h1 class="text-3xl text-center sub-comm-header"></h1>

<p class="text-white text-center description">What I want Lightning Web to be is a community for anyone to join, learn and explore. You can find out more in our <a href="https://discord.gg/u2YBbHjJRh" class="text-blue-500 hover:text-blue-700">discord community</a></p>