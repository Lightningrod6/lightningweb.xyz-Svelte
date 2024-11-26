<link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap' />
<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from "gsap";
    import { TextPlugin } from 'gsap/all';
    import Icon from '@iconify/svelte';
    import { P } from 'flowbite-svelte';
    
    let easter_egg = false

    gsap.registerPlugin(TextPlugin);
    var tl = gsap.timeline();
    function easterEgg() {
            let loopanimat = gsap.timeline()
            console.log("Easter Egg was found!")
            tl.to('.cool-header', {
                    duration: 1,
                    text: ''
                })
            tl.to('.projects-redirect', {
                    duration: 1,
                    text: ''
                })
            tl.to('.about-me-redirect', {
                    duration: 1,
                    text: ''
                })

            tl.to('.contribution-redirect', {
                    duration: 1,
                    text: ''
                })

            tl.to('.community-redirect', {
                    duration: 1,
                    text: ''
                })

            tl.to("body", {
                backgroundColor: "black"
            })
            tl.to('.cool-header', {
                    duration: 1,
                    text: 'Lightning Web',
                    fontFamily: 'Josefin Sans, sans-serif'
            })
            tl.to(".old-thing-lol", {
                duration: 1,
                text: "Lightning is a",
                fontFamily: 'Josefin Sans, sans-serif'
            })
            tl.to('.old-thing-lol', {
                duration: 1,
                text: "Lightning is a developer",
                fontFamily: 'Josefin Sans, sans-serif'
            }, "-=1")
            tl.fromTo(".directory", {
                opacity: 0,
                y: 100,
                fontFamily: 'Josefin Sans, sans-serif'
            }, {
                opacity: 1,
                y: 0
            })
        }
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
        tl.to('.about-me-redirect', {
            duration: 1,
            text: 'About Me'
        })
        tl.to('.contribution-redirect', {
            duration: 1,
            text: 'Contributions'
        })

        tl.to('.community-redirect', {
            duration: 1,
            text: 'More than Lightning Web'
        })
    }
    onMount(() => {
        IntroAnimation();
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap');

    .cool-header {
        margin-top: 400px;
    }

    .redirects {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
</style>



<h1 class="text-center text-3xl cool-header"></h1>

<div class="redirects">
    <a href="/projects"><h3 class="text-white text-center projects-redirect text-2xl"></h3></a>
    <a href="/about-me"><h3 class="text-white text-center about-me-redirect text-2xl"></h3></a>
    <a href="/contributions"><h3 class="text-white text-center contribution-redirect text-2xl"></h3></a>
    <a href="/community"><h3 class="text-white text-center text-2xl community-redirect"></h3></a>
</div>

<div class="old">
    <h2 class="old-thing-lol text-3xl text-center"></h2>
    <h3 class="directory text-2xl text-center" style="opacity: 0;"><a href="/projects">Directory</a></h3>
</div>

<a href="" on:click={easterEgg} class="text-gray-700">b</a>
