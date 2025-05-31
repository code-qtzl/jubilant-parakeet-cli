import { CLICommand } from '../types.js';

export function commandHelp(commands: Record<string, CLICommand>) {
	console.log('Welcome to the Pokedex!');
	console.log('Usage:');
	console.log('');

	Object.values(commands).forEach((command) => {
		console.log(`${command.name}: ${command.description}`);
	});
}
