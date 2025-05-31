import { commandExit } from './command_exit.js';
import { CLICommand } from '../types.js';
import { commandHelp } from './command_help.js';

export const commands: Record<string, CLICommand> = {
	exit: {
		name: 'exit',
		description: 'Exits the pokedex',
		callback: () => commandExit(),
	},
	help: {
		name: 'help',
		description: 'Displays a help message',
		callback: (commands) => commandHelp(commands),
	},
};
