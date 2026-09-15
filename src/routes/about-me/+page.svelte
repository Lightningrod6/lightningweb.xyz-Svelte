<script lang="ts">
    import { gsap } from 'gsap';
    import { TextPlugin, ScrollTrigger } from 'gsap/all'
    import { onMount } from 'svelte';
    import * as Card from '$lib/components/ui/card';
    import Icon from '@iconify/svelte';
   

    let description = 1;
    if(typeof window !== 'undefined') {
      gsap.registerPlugin(TextPlugin, ScrollTrigger);
    }

    console.log(description);
    var tl = gsap.timeline();

    function intro() {
      tl.to('.about-me-header', {
        duration: 0.5,
        text: 'About Me',
      });

      tl.fromTo('.description-1', {
        duration: 0.5,
        y: 100,
      }, {
        y: 0,
        opacity: 1,
      });
    }
   
    onMount(() => {
      intro();
    });

    function nextDescription() {
      console.log(description);
      description += 1;
      if (description > 3) {
        description = 3; // prevent going beyond the last description
      }
        var tl = gsap.timeline();
        if (description == 2) {
            tl.to('.description-1', {
              duration: 0.5,
              x: -100,
              opacity: 0,
          });
          tl.fromTo('.description-2', {
              duration: 0.3,
              x: 100,
              opacity: 0,
          }, {
              x: 0,
              opacity: 1,
          });
        } else if(description == 3) {
            tl.to('.description-2', {
              duration: 0.3,
              x: -100,
              opacity: 0,
          });
          tl.fromTo('.description-3', {
              duration: 0.3,
              x: 100,
              opacity: 0,
          }, {
              x: 0,
              opacity: 1,
          });
        }
        
    }
    function goBack() {
      // don't go below 1
      if (description <= 1) return;

      const tl = gsap.timeline();

      if (description === 2) {
        // animate description-2 out to the right, then bring description-1 in from the left
        tl.to('.description-2', { duration: 0.3, x: 100, opacity: 0 })
          .fromTo('.description-1', { x: -100, opacity: 0 }, { duration: 0.3, x: 0, opacity: 1 });
      }
      else if (description === 3) {
        // animate description-3 out, then bring description-2 in
        tl.to('.description-3', { duration: 0.3, x: 100, opacity: 0 })
          .fromTo('.description-2', { x: -100, opacity: 0 }, { duration: 0.3, x: 0, opacity: 1 });
      }

      description -= 1;
    }
    
    if (description == 1) {
      intro();
    }
      
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
      position: relative;
      width: 100%;
      max-width: 400px;
      text-align: center;
      opacity: 0;
    }

    .description-2 {
        position: absolute;
        padding-top: 55px;
        width: 100%;
        max-width: 400px;
        text-align: center;
        opacity: 0;
    }

    .description-3 {
        position: absolute;
        padding-top: 55px;
        width: 100%;
        max-width: 400px;
        text-align: center;
        opacity: 0;
    }

    .description-3 h2 {
      padding-bottom: 28px;
    }

    .next-description-button {
      position: absolute;
      z-index: 10;
      margin-left: 500px;
      padding-top: 50px;
    }

    .go-back-button {
      position: absolute;
      z-index: 10;
      margin-right: 500px;
      padding-top: 50px;
    }
   </style>
   
  <div class="content">
    <button on:click={goBack}><h1 class="about-me-header text-3xl mb-4 text-white font-bold text-center">About Me</h1></button>
    {#if description > 1}
      <button on:click={goBack} class="go-back-button">
        <Icon icon="material-symbols:arrow-back-ios-rounded" width="24" height="24" style="color: white" />
      </button>
    {/if}
    <button on:click={nextDescription} class="next-description-button"><Icon icon="material-symbols:arrow-forward-ios-rounded" width="24" height="24"  style="color: white" /></button>
    <div class="description-1">
      <h2 class="text-2xl mb-4 font-semibold header-thing">Hello, my name is Liam</h2>
      <p class="mb-4 text-white who-am-i">I am a college student currently trying to earn my bachelors in computer science. I have a passion for creating software, websites and hopefully ai products in the future.</p>
    </div>
    <div class="description-2">
        <h2 class="text-2xl mb-4 font-semibold header-thing">My Skills</h2>
        <p class="mb-4 text-white">I have experience with python, java, html, sql, and a little bit of javascript. However I hope to go further into python to do such things like ai development.</p>
    </div>
    <div class="description-3">
      <h2 class="text-2xl mb-4 font-semibold header-thing">My Interests</h2>
      <p class="mb-4 text-white">While I do have an interest in coding, I also favor in meterology and the research of the weather and how it works. I am also a big fan of AI and different ai products.</p>
    </div>
</div>