import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/command_help.js';
import { commands } from './commands/commands.js';

export const startREPL = () => {
	const repl = createInterface({
		input: stdin,
		output: stdout,
		prompt: 'Pokedev > ',
	});

	repl.prompt(); // Display the prompt immediately

	repl.on('line', (line) => {
		const words = cleanInput(line); // Clean and split the input line
		const commandName = words[0];

		if (words.length === 0) {
			repl.prompt();
			return;
		}
		if (commandName === 'help') {
			commandHelp(commands);
			repl.prompt();
		}
		if (commandName === 'exit') {
			commandExit();
			return;
		}
	}).on('close', () => {
		commandExit();
	});

	return repl;
};

export const cleanInput = (input: string): string[] => {
	const cleaned = input
		.trim() // Remove leading and trailing whitespace
		.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
		.split(' '); // Split by space
	return cleaned.filter((word) => word.length > 0); // Filter out empty strings
};
