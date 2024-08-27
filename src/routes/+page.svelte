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
    function aClicked() {
        gsap.to('.cool-header', {
            duration: 1,
            text: ''
        })

        gsap.to('.projects-redirect', {
            duration: 1,
            text: ''
        })
            tl.to('.projects', {
                duration: 1,
                y: "-390px",
            });
            tl.to('.project-header', {
                duration: 1,
                text: 'Bot-Bot'
            });
            tl.to('.bot-bot', {
                duration: 1,
                text: 'Multi-purpose Discord bot'
            });
            tl.to('.go-back', {
                duration: 1,
                text: 'Go back'
            }, '-=2')
        }

        function botBot() {
            gsap.to('.project-header, .bot-bot', {
                duration: 1,
                text: ''
            });
            tl.to('.bot-bot-head', {
                duration: 1,
                text: 'Bot-Bot',
                delay: 1
                
            })
            .to('.bot-bot-head', {
                duration: 1,
                text: 'Bot-Bot: Multi-purpose Discord bot',
                delay: 1
            })
            .to('.bot-bot-head', {
                duration: 1,
                y: "-390px",
            })
            .to('.bot-bot-link', {
                duration: 1,
                text: 'Check it out!'
            })

        }

        function goBack() {
            gsap.to('.project-header', {
                duration: 1,
                text: ''
            });
            gsap.to('.bot-bot', {
                duration: 1,
                text: ''
            })

            gsap.to('.bot-bot-head', {
                duration: 1,
                text: ''
            })
            gsap.to('.bot-bot-link', {
                duration: 1,
                text: ''
            })
            
            gsap.to('.go-back', {
                duration: 1,
                text: ''
            }).then(() => {
                IntroAnimation();
            })
        }
        function RedirectAnimationBotBot() {
            gsap.to('.bot-bot-head', {
                duration: 1,
                text: ''
            })
            gsap.to('.bot-bot-link', {
                duration: 1,
                text: ''
            })

            gsap.to('.go-back', {
                duration: 1,
                text: ''
            })

            tl.to('body', {
                duration: 1,
                background: 'black'
            })
            gsap.fromTo('body', {
                duration: 1,
                backgroundImage: 'url(src/img/coolpicture.png)',
                backgroundSize: 'cover',
                backgroundPositionX: '1000px',
                backgroundPositionY: '0px',
            }, {
                duration: 1,
                backgroundPositionX: '0px',
                backgroundRepeat: 'no-repeat'
            })


            tl.to('.redirection', {
                duration: 1,
                text: 'Redirecting...'
            }).then(() => {
                setInterval(() => {
                    window.location.href = 'https://top.gg/bot/609076611609788427/';
                }, 2000)
            })

        }

</script>

<style>
    .cool-header {
        margin-top: 400px;
    }

    .bot-bot-head {
        margin-top: 800px;
        left: 0;
        right: 0;
    }

    .snap-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .go-back {
        bottom: 0;
        position: absolute;
    }
    
</style>



<h1 class="text-center text-3xl cool-header"></h1>
<div class="i-dont-know">
    <a href="#" on:click={aClicked}><h1 class="text-2xl projects-redirect text-center"></h1></a>
</div>

<div class="projects">
    <h1 class="text-center text-3xl project-header"></h1>
    <div class="discord-bot">
        <a href="#" on:click={botBot}><h1 class="text-2xl text-center bot-bot"></h1></a>
        <div class="discord-bot-long">
            <h1 class="text-3xl text-center bot-bot-head"></h1>
            <a href="#" on:click={RedirectAnimationBotBot}><h3 class="text-center text-2xl bot-bot-link"></h3></a>
            <h1 class="text-center text-2xl redirection"></h1>
        </div>
    </div>
    <a href="#" on:click={goBack}><h3 class="absolute top-0 text-left go-back text-xl"></h3></a> <!-- Add 'absolute' and 'bottom-0' classes here -->
</div>