<script lang='ts'>
    import { Card } from 'flowbite-svelte';
    import { gsap } from 'gsap'
    import { TextPlugin } from 'gsap/all';
    import { onMount } from 'svelte';

    var tl = gsap.timeline();
    gsap.registerPlugin(TextPlugin);

    function IntroAnimation() {
        tl.to('.projects-header', {
            duration: 1,
            text: 'Projects',
        });

        tl.from('.bot-bot-card, .wynncraft-search-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
        }, '-=0.5'); // Start slightly before the previous animation ends
    }

    onMount(() => {
        IntroAnimation();
    })
</script>

<style>
    .bot-bot-card {
        padding-top: 400px;
    }
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .content {
        flex: 1;
    }
    .go-back-button {
        padding: 1rem;
    }
</style>

<div class="page-container">
    <div class="content">
        <h1 class="text-center projects-header text-3xl"></h1>
        <div class="projects bg-center flex justify-center items-center min-h-screen">
            <Card href="https://top.gg/bot/609076611609788427" class="bg-gray-700 bot-bot-card m-4 hover:bg-gray-600 transition-colors duration-300 ease-in-out">
                <h3 class="bot-bot-header text-white text-2xl text-center">Bot-Bot</h3>
                <p class="text-white">Multipurpose moderation bot with a global economy</p>
            </Card>
            <Card class="bg-gray-700 wynncraft-search-card m-4" size="xs">
                <h3 class="text-white text-2xl text-center wynncraft-header">Wynncraft Player Lookup</h3>
                <p class="text-white">Search for players and guilds on the Wynncraft Minecraft server</p>
            </Card>
        </div>
    </div>

    <h3 class="go-back-button text-left">
        <a href="/">Go Back</a>
    </h3>
</div>