<script lang="ts">
    import type { PageData } from './$types';
    import { gsap } from 'gsap';
    import { TextPlugin } from 'gsap/all';
    import { Card } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(TextPlugin);
    }

    function intro() {
        gsap.to('.cardtest', {
            duration: 0.5,
            backgroundColor: '#1f2937',
            rotateY: 180,
            scale: 1.1,
        })  
        gsap.to('.change-text', {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
            rotateY: 180,
            duration: 0.01,
            color: "#fff"
        }).delay(+0.2);
    }

    function outro() {
        gsap.to('.cardtest', {
            duration: 0.5,
            backgroundColor: '#6b7280',
            rotateY: 0,
            scale: 1
        })
        gsap.to('.change-text', {
            text: 'Lightning Web',
            duration: 0.01,
            rotateY: 0,
            color: "#000"
        }).delay(+0.1);
    }

    onMount(() => {
    })
</script>

<div class="flex flex-col items-center mt-24 w-[45%] ml-96" on:mouseenter={intro} on:mouseleave={outro}>
    <Card class="w-[500px] h-[350px] bg-gray-500 cardtest">
        <span class="change-text class text-center mt-8 font-bold text-xl">Lightning Web</span>
    </Card>
</div>

