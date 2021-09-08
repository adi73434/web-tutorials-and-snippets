
module.exports = {

	// -------------------------------------------------------------------------
	// NOTE: Taken from this uni project of mine:
	// https://gitlab.com/web-tech-degree/ria-gamestart/-/blob/master/gameinc-g/.eslintrc.js
	// -------------------------------------------------------------------------

	// NOTE: This is very important so that ESLint doesn't try to inherit parent configs
	"root": true,

	"env": {
		"es2020": true,
		"browser": true,
	},

	// Default standards
	"extends": [
		"google",
		"./.eslint-global-config.js",
	],

	"parserOptions": {
		"ecmaVersion": 2020,
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
	// -------------------------------------------------------------------------
	"overrides": [{
		"files": [
			"**/*.ts",
		],
		"extends": [
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended",
			"google",
			"./.eslint-global-config.js",
		],
		"parser": "@typescript-eslint/parser",
		"parserOptions": {
			"ecmaVersion": 2020,
			"sourceType": "module",
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

	// -------------------------------------------------------------------------
	// SECTION Svelte TypeScript sepcific
	// -------------------------------------------------------------------------
	"overrides": [{
		"files": [
			"**/*.svelte",
		],
		"extends": [
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended",
			"google",
			"./.eslint-global-config.js",
		],
		"processor": "svelte3/svelte3",
		"parser": "@typescript-eslint/parser",
		"parserOptions": {
			"ecmaVersion": 2020,
			"sourceType": "module",
			"tsconfigRootDir": __dirname,
			"project": "./tsconfig.json",
			"extraFileExtensions": [".svelte"],
		},
		"plugins": [
			"svelte3",
			"@typescript-eslint",
		],
		"settings": {
			"svelte3/typescript": require("typescript"),
			// ignore style tags in Svelte because of Tailwind CSS
			// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
			"svelte3/ignore-styles": () => true,
		},
	}],
	// -------------------------------------------------------------------------
	// !SECTION
	// -------------------------------------------------------------------------
};
