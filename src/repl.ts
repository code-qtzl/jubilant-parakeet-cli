import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

export const startREPL = () => {
	const repl = createInterface({
		input: stdin,
		output: stdout,
		prompt: 'Pokedev > ',
	});

	repl.prompt(); // Display the prompt immediately

	repl.on('line', (line) => {
		const words = cleanInput(line); // Clean and split the input line
		// If no words are entered, just prompt again

		if (words.length === 0) {
			repl.prompt();
			return;
		}

		console.log(`Your command was: ${words[0].toLowerCase()}`);

		repl.prompt();
	}).on('close', () => {
		console.log('Go catch them all!');
		exit(0);
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
