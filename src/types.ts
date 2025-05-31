// this is a registry for CLI commands
export type CLICommand = {
	name: string;
	description: string;
	callback: (commands: Record<string, CLICommand>) => void;
};
