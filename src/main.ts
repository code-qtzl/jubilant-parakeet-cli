import { startREPL } from './repl.js';
import { initState } from './commands/state.js';

export function main() {
	const state = initState();
	startREPL(state);
}

main();
