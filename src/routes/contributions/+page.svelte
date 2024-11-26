<script lang="ts">
    import { Card } from 'flowbite-svelte';
    import { gsap } from 'gsap';
    import { TextPlugin } from 'gsap/all';
    import { onMount } from 'svelte';

    gsap.registerPlugin(TextPlugin);

    function intro() {
        var tl = gsap.timeline();

        tl.to('.cont-header', {
            duration: 1,
            text: 'Contributions',
        });
    }

    onMount(() => {
        intro();
    })

    
</script>


<div class="container flex flex-col min-h-screen">
    <div class="flex-1 p-2">
        <h1 class="text-3xl text-center cont-header"></h1>
        <div class="flex flex-wrap justify-center gap-1 max-w-[400px] m-auto">
        <Card href="https://www.nexusmods.com/bladeandsorcery/mods/11048" class="project-card bg-gray-700 hover:bg-gray-600 transition-colors duration-300 ease-in-out max-w[30px]">
            <h1 class="text-white text-2xl text-center">B&S Audible Lore Mod</h1>
            <h3 class="text-white text-lg text-center mb-2">Made by: HuJohner</h3>
            <p class="text-white text-center">A Blade & Sorcery mod that adds voice overs to the lore. I participated in it as a voice actor for a character called "General Geratan"</p>
        </Card>
        </div>
    </div>
    <div class="p-1">
        <a href="/" class="text-white hover:text-gray-300">Go Back</a>
    </div>

</div>