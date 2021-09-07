
module.exports = {

	// -------------------------------------------------------------------------
	// NOTE: Taken from this uni project of mine:
	// https://gitlab.com/web-tech-degree/ria-gamestart/-/blob/master/gameinc-g/.eslintrc.js
	// -------------------------------------------------------------------------

	// NOTE: This is very important so that ESLint doesn't try to inherit parent configs
	"root": true,

	// Environment
	// https://kangax.github.io/compat-table/es6/
	// https://kangax.github.io/compat-table/es2016plus/
	// https://kangax.github.io/compat-table/esnext/
	"env": {
		"es2021": true,
		"browser": true,
	},

	// Default standards
	"extends": [
		"google",
		// Import ruleset
		"./.eslint-global-config.js",
	],

	"parserOptions": {
		"ecmaVersion": 2021,
		"sourceType": "module",
		"project": "./tsconfig.json",
	},

	"plugins": [
		// "svelte3",
	],

	// Global variables so that we don't get screamed at by ESLint
	"globals": {
		// "Atomics": "readonly",
	},


	// -------------------------------------------------------------------------
	// SECTION TypeScript specific
	// TypeScript specific stuff, done like this so that we can have JavaScript
	// files without all the TypeScript ESLint stuff in case anyone doesn't want
	// to use TypeScript.
	// -------------------------------------------------------------------------
	"overrides": [{
		// Target only TypeScript files
		"files": [
			"**/*.ts",
		],
		"extends": [
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended",
			"google",
			// Import ruleset
			"./.eslint-global-config.js",
		],
		"parserOptions": {
			"ecmaVersion": 2021,
			"sourceType": "module",
			"parser": "@typescript-eslint/parser",
			"tsconfigRootDir": __dirname,
			"project": "./tsconfig.json",
		},
		"plugins": [
			"@typescript-eslint",
		],
		"rules": {
			// Allow the use of ts-ignore for one liners
			// "@typescript-eslint/ban-ts-ignore": "off",
		},
	}],
	// -------------------------------------------------------------------------
	// !SECTION TypeScript specific
	// -------------------------------------------------------------------------
	"overrides": [{
		// Target only TypeScript files
		"files": [
			"**/*.svelte",
		],

		"processor": "svelte3/svelte3",

		"parserOptions": {
			"ecmaVersion": 2021,
			"sourceType": "module",
			"parser": "@typescript-eslint/parser",
			// "tsconfigRootDir": __dirname,
			"project": "./tsconfig.json",
			"extraFileExtensions": [".svelte"],
		},
		"plugins": [
			"svelte3",
			"@typescript-eslint",
		],
		"settings": {
			// "svelte3/typescript": require("typescript"),
			// ignore style tags in Svelte because of Tailwind CSS
			// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
			"svelte3/ignore-styles": () => true,
		},
	}],
};
