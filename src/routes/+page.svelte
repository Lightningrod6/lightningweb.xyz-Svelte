<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { TextPlugin } from 'gsap/TextPlugin';
    import Icon from '@iconify/svelte';

    gsap.registerPlugin(TextPlugin);

    onMount(() => {
        console.log('mounted');
        var tl = gsap.timeline();
        tl.to('.testinglmao', { duration: 1, text: "Lightning Web" })
        tl.to('.testinglmao', { duration: 1, y: "-350px"})
        tl.to('.about-me', { duration: 1, text: "Who Am I" })
    });
    var tl = gsap.timeline();

    function playCoolAnimation() {
            tl.to('body', { duration: 3, backgroundColor: 'white' })
            tl.to('.cool-button', { duration: 2, backgroundColor: "white" }, "-=2.5")
            tl.to('.cool-button2', { duration: 2, backgroundColor: "white" }, "-=2.5")
            tl.to('.testinglmao', { duration: 2, color: "black" }, "-=2")
            tl.to('.testinglmao', { duration: 2, text: "Lightning Web: Made in Svelte" }, "-=1")
        }
    function goBack() {
        tl.to('body', { duration: 3, backgroundColor: "#303030"})
        tl.to('.cool-button', { duration: 2, backgroundColor: "#303030" }, "-=3")
        tl.to('.cool-button2', { duration: 2, backgroundColor: "#303030" }, "-=3")
        tl.to('.testinglmao', { duration: 2, color: "white" }, "-=2")
        tl.to('.testinglmao', { duration: 2, text: "Lightning Web" }, "-=1")
    }

    function aClicked() {
        gsap.to('.testinglmao', { duration: 1, text: ''})
        gsap.to('.about-me', { duration: 1, text: ''})
        setTimeout(() => {
            window.location.href = '/whoami'
        }, 1000)
    }


    
</script>

<style>
        .container {
        position: relative;
    }

    .cool-button {
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        background-color: #303030;
        color: white;
        padding: 10px 20px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 4px;
        font-family: "Changa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        
    }

    .cool-button2 {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        background-color: #303030;
        color: #303030;
        padding: 10px 20px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 4px;
        font-family: "Changa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    h2 {
        text-align: center;
        color: white;
        font-family: "Changa", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-size: 35px;
        font-style: normal;
        
    }

    .testinglmao {
        padding-top: 25%;
    }


    
</style>


<div class="container">
    <h1 class="testinglmao">Header</h1>
    <button on:click={playCoolAnimation} class="cool-button"></button>
    <button on:click={goBack} class="cool-button2">Go Back</button>
</div>
<a href='#' on:click={aClicked}><h2 class="about-me"></h2></a>
