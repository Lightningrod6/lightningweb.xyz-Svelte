<script lang='ts'>
    import { Card } from 'flowbite-svelte';
    import { gsap } from 'gsap'
    import { TextPlugin } from 'gsap/all';
    import { onMount } from 'svelte';
   
    gsap.registerPlugin(TextPlugin);
   
    function introAnimation() {
      const tl = gsap.timeline();
      tl.to('.projects-header', {
        duration: 1,
        text: 'Projects',
      });
      tl.from('.project-card', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
      }, '-=0.5');
    }
   
    onMount(() => {
      introAnimation();
    });
   </script>
   
   <style>
    .page-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .content {
      flex: 1;
      padding: 2rem 0;
    }
    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      max-width: 400px;
      margin: 0 auto;
    }
    .project-card {
      width: 300px;
    }
    .go-back-button {
      padding: 1rem;
    }
   </style>
   
   <div class="page-container">
     <div class="content">
       <h1 class="projects-header text-3xl mb-8 text-center"></h1>
       <div class="projects m-10">
         <Card href="https://top.gg/bot/609076611609788427" class="project-card bg-gray-700 hover:bg-gray-600 transition-colors duration-300 ease-in-out">
           <h3 class="text-white text-2xl text-center mb-2">Bot-Bot</h3>
           <p class="text-white text-center">Currently being rewritten into a powerful moderation bot</p>
         </Card>
         <Card href="https://api.lightningweb.xyz" class="project-card bg-gray-700 hover:bg-gray-600 transition-colors duration-300 ease-in-out">
           <h3 class="text-white text-2xl text-center mb-2">LightningWeb API</h3>
           <p class="text-white text-center">An API containing multiple generative AIs and a chat API using llama 3!</p>
         </Card>

       </div>
     </div>
     <div class="go-back-button">
       <a href="/" class="text-white hover:text-gray-300">Go Back</a>
     </div>
   </div>