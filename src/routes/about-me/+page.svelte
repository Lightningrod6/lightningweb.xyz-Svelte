<script lang="ts">
    import { gsap } from 'gsap';
    import { TextPlugin } from 'gsap/all'
    import { onMount } from 'svelte';
    import { Card } from 'flowbite-svelte';
   
    gsap.registerPlugin(TextPlugin);
   
    onMount(() => {
      var tl = gsap.timeline();
      tl.to('.about-me-header', {
        duration: 1,
        text: 'About Me',
      });
    });
   </script>
   
   <style>
    .content {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-sizing: border-box;
    }
   
    .description-1 {
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
   </style>
   
   <div class="content">
    <h1 class="about-me-header text-3xl mb-4 text-white font-bold text-center"></h1>
    <div class="description-1">
      <h2 class="text-2xl mb-4 font-semibold">Hello, my name is Liam</h2>
      <p class="mb-4 text-white">I am a college student currently trying to earn my bachelors in computer science. I have a passion for creating software, websites and hopefully ai products in the future.</p>
    </div>
   </div>