import chalk from "chalk";


// This just defines some custom colorus for chalk, which is then used in console.log
const logCol = {
	info: chalk.hex("#8ec6b6"),

	// Use this for errors
	error: chalk.hex("#ff2600"),
	// Use this for messages that are "related" to errors but that show solutions etc.
	errorFix: chalk.hex("#00D9FF"),

	// Use this for "instructional" logs... I just like this colour
	speaker: chalk.hex("#FF0064"),
};

export {
	logCol,
};
