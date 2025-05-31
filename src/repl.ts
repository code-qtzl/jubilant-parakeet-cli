import { type State } from './commands/state.js';

export function startREPL(state: State) {
	const { readline: rl, commands } = state;

	rl.prompt();

	rl.on('line', async (input) => {
		const words = cleanInput(input);
		if (words.length === 0) {
			rl.prompt();
			return;
		}

		const commandName = words[0];
		const cmd = commands[commandName];

		if (!cmd) {
			console.log(
				`Unknown command: "${commandName}". Type "help" for a list of commands.`,
			);
			rl.prompt();
			return;
		}

		try {
			cmd.callback(state);
		} catch (e) {
			console.log(e);
		}

		rl.prompt();
	});
}

export const cleanInput = (input: string): string[] => {
	const cleaned = input
		.toLocaleLowerCase()
		.trim() // Remove leading and trailing whitespace
		.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
		.split(' '); // Split by space
	return cleaned.filter((word) => word.length > 0); // Filter out empty strings
};
