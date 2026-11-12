// Which picture goes with each project. Elections 26 has a real screenshot;
// the rest get an ink drawing until their sites are back up.
export type ArtKind = 'deadline' | 'conflicts' | 'api' | 'bot' | 'voice' | 'slot';

export function artFor(name: string): { shot?: string; kind: ArtKind } {
	const n = name.toLowerCase();
	if (n.startsWith('elections')) return { shot: '/shots/elections-26.webp', kind: 'conflicts' };
	if (n.startsWith('deadline')) return { kind: 'deadline' };
	if (n.startsWith('conflicts')) return { kind: 'conflicts' };
	if (n.includes('api')) return { kind: 'api' };
	if (n.startsWith('bot')) return { kind: 'bot' };
	if (n.includes('voice') || n.includes('audible')) return { kind: 'voice' };
	return { kind: 'slot' };
}
