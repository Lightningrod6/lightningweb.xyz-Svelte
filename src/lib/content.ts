// Every word on the site lives here, copied verbatim from main (98baba1).
// Designs may restyle (including CSS text-transform) but must not edit these strings.

export type ProjectStatus = 'live' | 'dev' | 'other' | 'offline';

export interface Project {
	name: string;
	blurb: string;
	tags: string[];
	href: string;
	status: ProjectStatus;
	cta: string;
}

export const statusLabel: Record<ProjectStatus, string> = {
	live: 'live',
	dev: 'in development',
	other: 'contribution',
	offline: 'offline'
};

export const site = {
	brand: { a: 'LIGHTNING', b: 'WEB', tld: '.XYZ', homeLabel: 'Lightning Web — home' },
	nav: [
		{ href: '/projects', label: 'Projects' },
		{ href: '/about-me', label: 'About' }
	],
	footer: {
		copyright: '© 2026 lightningweb.xyz — operator: liam caywood',
		links: [
			{ href: 'https://github.com/Lightningrod6', label: 'GitHub /Lightningrod6', external: true },
			{ href: '/', label: 'Home', external: false }
		]
	},
	github: 'https://github.com/Lightningrod6'
};

export const slot = {
	title: 'Your project here',
	blurb:
		'Have a project, a collab, or a gig in mind? The grid has an open slot — and the operator is open for work.',
	cta: 'Say hi on GitHub',
	label: 'open slot',
	tags: ['collab', 'freelance', 'available'],
	href: 'https://github.com/Lightningrod6'
};

export const ticker = [
	'Python',
	'FastAPI',
	'TypeScript',
	'Svelte 5',
	'Redis',
	'SQL',
	'C#',
	'REST APIs',
	'Discord bots',
	'Game modding'
];

export const home = {
	title: 'Lightning Web — Liam Caywood, full-stack developer',
	eyebrowMark: '//',
	eyebrow: 'lightningweb.xyz — personal site of liam caywood',
	heroA: 'LIGHTNING',
	heroB: 'WEB',
	intro:
		'Building software first, worry about the details later. I show my hands in the stuff that people dont see.',
	ctaProjects: 'View projects',
	ctaAbout: 'More about me',
	plateTitle: 'System status',
	plateLed: 'nominal',
	plate: [
		{ k: 'operator', v: 'Liam Caywood' },
		{ k: 'study', v: 'CS · Cameron University (sophomore)' },
		{ k: 'stack', v: 'Python · FastAPI · TypeScript · Svelte · Redis' },
		{ k: 'availability', v: 'Open for work & collabs' }
	],
	featuredEyebrow: "what's running",
	featuredTitle: 'FEATURED PROJECTS',
	allProjects: 'All projects',
	featured: [
		{
			name: 'Deadline',
			blurb:
				'Set a deadline, submit, and let it watch the clock. It emails you before the due date slips past — so you can focus on everything else.',
			tags: ['SaaS', 'email alerts', '$9/mo'],
			href: 'https://deadline.lightningweb.xyz',
			status: 'offline',
			cta: 'open product'
		},
		{
			name: 'Conflicts Tracker',
			blurb:
				'Wartime dashboard that monitors events around the world. Uses accurate information to deliver fast and relable updates for those who wish to stay informed.',
			tags: ['FastAPI', 'Redis', 'SvelteKit', 'live'],
			href: 'https://conflicts-tracker.com',
			status: 'dev',
			cta: 'open product'
		},
		{
			name: 'LightningWeb API',
			blurb:
				'My first real back end: a public multi-endpoint API for text generation, chat, and utilities. Still the home of my earliest shipping scars.',
			tags: ['Python', 'api', 'llm'],
			href: 'https://api.lightningweb.xyz',
			status: 'dev',
			cta: 'hit the api'
		}
	] as Project[],
	more: [
		{
			name: 'Bot-Bot',
			blurb: 'Discord moderation bot, rebuilt from the ground up. Currently learning how not to break prod.',
			tags: ['Python', 'discord'],
			href: 'https://top.gg/bot/609076611609788427',
			status: 'dev',
			cta: 'see the bot'
		},
		{
			name: 'Voice work',
			blurb: 'Voiced General Geratan in the Blade & Sorcery Audible Lore mod. Five lines, immortalized.',
			tags: ['voice acting', 'Blade & Sorcery'],
			href: 'https://www.nexusmods.com/bladeandsorcery/mods/11048',
			status: 'other',
			cta: 'hear it'
		},
		{
			name: 'Elections 26',
			blurb:
				'Elections dashboard for the 2026 US midterms. Built to track and visualize results from the house, senate and governor races',
			tags: ['FastAPI', 'Redis', 'SvelteKit', 'live'],
			href: 'https://elections.conflicts-tracker.com',
			status: 'live',
			cta: 'see the dashboard'
		}
	] as Project[],
	aboutEyebrow: 'the operator',
	aboutTitle: 'ABOUT ME',
	about:
		"I'm a CS student addicted to creating the next thing. Using AI, it allows me to focus on the big picture and go bigger than I ever could. I focus on the back while my agent works on the front. I have a strong passion for web development and an even stronger passion for geopolitics. Why not combine those two into a single product? Oh wait, someone already did that, me.",
	aboutCta: 'Read the full profile',
	loadoutTitle: 'loadout',
	loadout: [
		{ k: 'backend', v: 'Python · FastAPI · Redis · SQL' },
		{ k: 'frontend', v: 'TypeScript · Svelte 5 · SvelteKit' },
		{ k: 'on the side', v: 'C# · game mods · meteorology · awful puns' }
	],
	openTitle: 'BUILT IN THE OPEN',
	openBody:
		'Most of what I ship has its wires showing on GitHub — products, bots, experiments, and the occasional beautiful disaster. Star something or watch the commits roll in.',
	openCtaGithub: 'GitHub profile',
	openCtaProjects: 'View projects'
};

export const projectsPage = {
	title: 'Projects — Lightning Web',
	eyebrowMark: '//',
	eyebrow: 'everything with wires showing',
	heading: 'PROJECTS',
	intro:
		"Things I've built, broken, rebuilt, and shipped. Live products first, experiments after, one voice-acting cameo at the end just to keep you guessing.",
	projects: [
		{
			name: 'Deadline',
			blurb:
				'Set a deadline, submit, and let it watch the clock. It emails you before the due date slips past — so you can focus on everything else. My first real paid product.',
			tags: ['SaaS', 'email alerts', 'stripe', 'live'],
			href: 'https://deadline.lightningweb.xyz',
			status: 'live',
			cta: 'open product'
		},
		{
			name: 'Conflicts Tracker',
			blurb:
				'Current events, wars and crises, all in one place. Getting the latest from a variety of sources and slimming out the narrative to give you the facts.',
			tags: ['fastapi', 'redis', 'scrapers', 'sveltekit', 'live'],
			href: 'https://conflicts-tracker.com',
			status: 'live',
			cta: 'open product'
		},
		{
			name: 'LightningWeb API',
			blurb: 'My first backend API, back when Deepinfra didnt have a lock.',
			tags: ['python', 'api', 'llm', 'live'],
			href: 'https://api.lightningweb.xyz',
			status: 'live',
			cta: 'hit the api'
		},
		{
			name: 'Bot-Bot',
			blurb:
				'Discord moderation bot, rebuilt from the ground up. Slightly less likely to ban a friend than it used to be. Currently in active development.',
			tags: ['python', 'discord', 'moderation'],
			href: 'https://top.gg/bot/609076611609788427',
			status: 'dev',
			cta: 'see the bot'
		},
		{
			name: 'Audible Lore — B&S',
			blurb:
				"Voiced General Geratan in this Blade & Sorcery mod that adds voice acting to the game's lore. Five lines, zero retakes, one proud voice actor.",
			tags: ['voice acting', 'blade & sorcery'],
			href: 'https://www.nexusmods.com/bladeandsorcery/mods/11048',
			status: 'other',
			cta: 'hear it'
		},
		{
			name: 'Elections 26',
			blurb:
				'Elections dashboard for the 2026 US midterms. Built to track and visualize results from the house, senate and governor races',
			tags: ['FastAPI', 'Redis', 'SvelteKit', 'live'],
			href: 'https://elections.conflicts-tracker.com',
			status: 'live',
			cta: 'see the dashboard'
		}
	] as Project[]
};

export const aboutPage = {
	title: 'About Me — Lightning Web',
	eyebrowMark: '//',
	eyebrow: 'who runs this grid',
	heading: 'ABOUT ME',
	shortTitle: 'the short version',
	short:
		"I'm Liam - 21, a computer science sophomore at Cameron University. I'm a backend developer using Python, FastAPI, Redis, and SQL. I prefer to use Sveltekit along side TypeScript for my frontend (with some amazing help from AI). I have a strong passion for web development, Geopolitics, and meteorology. My mind is always floating with ideas and I am always looking for new ways to improve my skills. I am self-taught and mainly learned from YouTube videos about discord bots.",
	workTitle: 'how I work',
	// each line renders as: label, then " — " + text
	work: [
		{ k: 'backend', v: 'Python, FastAPI, Redis, SQL, REST APIs, scrapers, bots.' },
		{ k: 'frontend', v: 'TypeScript, Svelte 5, SvelteKit, Tailwind, CSS.' },
		{ k: 'ops', v: 'Railway, Cloudflare Pages, Redis for the hot state, Postgres/Stripe for the important state.' },
		{ k: 'elsewhere', v: 'C# for game mods, a bit of Java from school, a faint memory of HTML-only days.' }
	],
	offTitle: 'when the keyboard cools',
	off: [
		{
			name: 'Meteorology',
			body: 'Weather research and storm watching. The name "Lightning" wasn\'t a marketing decision - it\'s a personality trait.'
		},
		{ name: 'Situation Monitoring', body: 'Keeping track of global conflicts, wars and crises' },
		{ name: 'Game modding', body: 'Modding games that use Unity like Rust and BoneLab' },
		{
			name: 'Voice acting',
			body: 'One official credit: General Geratan in the Blade & Sorcery Audible Lore mod. Five lines, fully committed.'
		}
	],
	fileTitle: 'Personnel file',
	fileLed: 'nominal',
	file: [
		{ k: 'callsign', v: 'Lightning (Lightningrod6)' },
		{ k: 'age', v: '21' },
		{ k: 'role', v: 'Full-stack dev, backend-leaning' },
		{ k: 'education', v: 'CS · Cameron University' }
	],
	githubLabel: 'github.com/lightningrod6',
	timelineEyebrow: 'stake in the ground',
	timelineTitle: 'THE TIMELINE',
	milestones: [
		{
			year: '2019',
			title: 'First steps',
			body: 'There was a cool social app called Discord. I wanted to make a bot for it and it all started on a small prepaid phone using an app that had python'
		},
		{
			year: '2022',
			title: 'ADHDmaxxing',
			body: 'While I was attending GPTC, I was more into learning about programming instead of paying attention in class. I learned a lot at a cost.'
		},
		{
			year: '2023',
			title: 'Portfolio without Projects',
			body: 'On my summer vacation, I started to learn more and more about programming and eventually was introduced to HTML, CSS and Javascript. This site was originally built on pure HTML and CSS.'
		},
		{
			year: '2024',
			title: 'A real web app',
			body: 'After discovering how webapps worked, I decided to build my own and shape it around lightningweb. I started out with Flask and started to learn more about backend development. I then moved on to FastAPI and Sveltekit came along to help me build a better frontend'
		},
		{
			year: '2025',
			title: 'Wartime',
			body: 'With the world on fire, I got distracted and more interested into geopolitics. Thats when I was inspired to build Conflicts Tracker. It taught me about webscraping and how to create background tasks. This also lead me into using Redis and Postgres.'
		},
		{
			year: '2026',
			title: 'First paid product',
			body: 'An exciting year of AI, releasing my first SaaS product, Deadline.'
		}
	]
};

export const contributionsPage = {
	title: 'Contributions — Lightning Web',
	eyebrowMark: '//',
	eyebrow: 'not everything ships as code',
	heading: 'CONTRIBUTIONS',
	intro:
		"Cameos and helping hands - things I've added to other people's worlds when the coding itch wasn't the one scratching.",
	item: {
		name: 'Audible Lore Mod',
		blurb:
			"Voice actor for the Blade & Sorcery mod that brings the game's lore to life. I played General Geratan — five recorded lines, full commitment, zero hindsight regrets.",
		tags: ['voice acting', 'blade & sorcery', 'by hujohner'],
		href: 'https://www.nexusmods.com/bladeandsorcery/mods/11048',
		status: 'other',
		cta: 'hear the lines'
	} as Project
};

export const communityPage = {
	title: 'Community — Lightning Web',
	eyebrowMark: '//',
	eyebrow: 'it takes a grid',
	heading: 'COMMUNITY',
	intro:
		"Lightning Web started as a portfolio and grew a small community around it. It's a place for anyone to join, learn, and explore — developers, gamers, storm nerds, and anyone who just wants to hang out while the sky does something interesting.",
	findsTitle: "what you'll find",
	finds: [
		'Project updates and early access before they hit the public',
		"A place to talk dev — Python, FastAPI, Svelte, or whatever you're fighting",
		"Gaming crew for whatever's on the server that week",
		'Weather talk, storm chasing, and radar screenshots that mean nothing to anyone else'
	],
	joinTitle: 'COME TRY THE LIGHTNING RODS',
	joinBody:
		'The server is small, friendly, and run by me. No spam, no 47 channels of noise — just a few rooms where the current flows.',
	discord: 'https://discord.gg/u2YBbHjJRh',
	joinCta: 'Join the discord',
	codeCta: 'Browse the code'
};
