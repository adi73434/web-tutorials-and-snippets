module.exports = {
	// preset: "ts-jest",
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
};
