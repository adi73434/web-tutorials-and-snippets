module.exports = {

	// Environment
	"env": {
		"browser": true,
		"es6": true,
	},
	
	// Rules to extend, bot>top override order
	"extends": [
		"plugin:preact/recommended",
		"google",
		"./.eslint-global-config.js",
	],

	// Defaults, can add globals
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly",
	},
	
	// Since this config set only applies to JavaScript,
	// TypeScript isn't used here; TypeScript stuff is done
	// in the overrides section for ts/tsx
	// "parser": "@typescript-eslint/parser",

	// Modules (import/export)
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
	},

	// Using preact but not TypeScript,
	// as this set only applies to JavaScript
	"plugins": [
		"preact",
	],

	// Here TypeScript is targeted
	"overrides": [
		{
			"files": [
				"**/*.ts",
				"**/*.tsx",
			],
			"extends": [
				// "plugin:preact/recommended",
				// "google",
				"./.eslint-global-config.js",
			],
			// Using TypeScript
			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				// "project": "./tsconfig.json",
			},
			"plugins": [
				"preact", "@typescript-eslint",
			],
			"rules": {
				// Allow the use of ts-ignore for one liners
				// "@typescript-eslint/ban-ts-ignore": "off",
			},
		},
	],
};
