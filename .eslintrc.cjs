module.exports = {

	// -------------------------------------------------------------------------
	// NOTE: Taken from this uni project of mine:
	// https://gitlab.com/web-tech-degree/ria-gamestart/-/blob/master/gameinc-g/.eslintrc.js
	// -------------------------------------------------------------------------

	// Environment
	// https://kangax.github.io/compat-table/es6/
	// https://kangax.github.io/compat-table/es2016plus/
	// https://kangax.github.io/compat-table/esnext/
	"env": {
		"es2021": true,
		"node": true,
	},

	// Default standards
	"extends": [
		"google",
		// Import ruleset
		"./.eslint-global-config.cjs",
	],

	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module",
		// "tsconfigRootDir": __dirname,
		"project": "./tsconfig.json",
	},

	"plugins": [
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
			"./.eslint-global-config.cjs",
		],
		"parserOptions": {
			"project": "./tsconfig.json",
			"parser": "@typescript-eslint/parser",
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
	// SECTION SolidJS specific
	// -------------------------------------------------------------------------
	"overrides": [{
		// Target only TypeScript files
		"files": [
			"meta-client/src/*.ts",
			"meta-client/src/*.tsx",
		],
		"extends": [
			// TODO: Would be really cool to find (or write?) a SolidJS plugin since IDK how
			// interchangeable the react stuff is
			"plugin:react/recommended",
			"plugin:@typescript-eslint/eslint-recommended",
			"plugin:@typescript-eslint/recommended",
			"google",
			// Import ruleset
			"./.eslint-global-config.cjs",
		],
		"parser": "@typescript-eslint/parser",
		"parserOptions": {
			"ecmaFeatures": {
				"jsx": true,
			},
			"ecmaVersion": 2021,
			"sourceType": "module",
			"project": "./meta-client/tsconfig.json",
		},
		"plugins": [
			"react",
			"@typescript-eslint",
		],
		"rules": {
			// Allow the use of ts-ignore for one liners
			// "@typescript-eslint/ban-ts-ignore": "off",
		},
	}],
	// -------------------------------------------------------------------------
	// !SECTION
	// -------------------------------------------------------------------------

};
