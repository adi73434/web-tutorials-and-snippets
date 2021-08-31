module.exports = {


	// This file only handles the rules
	"rules": {
		
		// Allow the use of ts-ignore for one liners
		// "@typescript-eslint/ban-ts-ignore": "warn",
		"@typescript-eslint/ban-ts-comment": "warn",


		// Turn off requirement for jsdoc
		"require-jsdoc": 0,
		// "require-jsdoc": [
			// "error", {
			// "require": {
			// 		"FunctionDeclaration": true,
			// 		"MethodDefinition": true,
			// 		"ClassDeclaration": true,
			// 		"ArrowFunctionExpression": true,
			// 		"FunctionExpression": true,
			// },
			// },
		// ],
	
		// ---------------------------------------------------------------------
		// SECTION Styling
		// ---------------------------------------------------------------------
	
		// SECTION Lines
		// Max line length
		"max-len": [
			"error",
			{
			"code": 256,
			},
		],
	
		// Maximum lines of code within any function
		// This will hopefully limit the spaghetti we write
		// and at least untangle it into several, strands of spaghetti
		// instead of one bowl of spaghetti
		"max-lines-per-function": [
			"warn",
			{
			"max": 9999,
			"skipBlankLines": true,
			"skipComments": true,
			},
		],
	
		// Maximum number of empty lines
		"no-multiple-empty-lines": [
			"warn",
			{
			"max": 5,
			"maxEOF": 0,
			},
		],
		// !SECTION Lines
	
		// SECTION Comments
		// Require line comments to be above the code, not in-line
		"line-comment-position": [
			"error",
			"above",
		],
	
		// Use // on multi-line comments
		"multiline-comment-style": [
			"error",
			"separate-lines",
		],
	
		// "no-warning-comments": [
		// 	"warn",
		// ],
		// !SECTION Comments
	
		// Brace style for if/else statements etc.
		// This essentially requires else/else if statements to be on a new line
		// I don't see this often, but I don't like else if statements
		// on the same line as the closing curly brace when the code is relatively complex
		"brace-style": [
			"error",
			"stroustrup",
		],
	
		// Use double quotes. None of 'these'. If you want to use a ' within a string, escape it
		// like a normal person using \
		"quotes": [
			"error",
			"double",
		],
	
		// Use camelCase variableNames, anything else gives error
		"camelcase": [
			"error",
		],
	
		// Require semicolons where they are required
		"semi": [
			"error",
			"always",
		],
	
		// Use tab indentation
		"indent": [
			"error",
			"tab",
		],
	
		// No tabs also stops ESLint from screaming about tabs in comments
		"no-tabs": 0,
	
		// Linebreak using Windows \r\n instead of the Unix \n
		"linebreak-style": [
			"error",
			"unix",
		],

		// For some reason I was getting react/sort-comp errors with the constructor
		// at the top of Component classes... idk
		"react/sort-comp": [1, {
			"order": [
				"constructor",
				"lifecycle",
				"everything-else",
				"render"
			]
		  }]
		// ---------------------------------------------------------------------
		// !SECTION Styling
		// ---------------------------------------------------------------------
	
		// Allow classes to be used above/below each other... JavaScript is hoisted
		// and I'm making the exception for classes, though we'll probably also have exceptions
		// for functions
		"no-use-before-define": [
			0, {
			"classes": false,
			},
		],
		"@typescript-eslint/no-use-before-define": [
			0, {
			"classes": false,
			},
		],
	
		// ---------------------------------------------------------------------
		// SECTION Error stuff
		// ---------------------------------------------------------------------
	
		// No endless for loops; use while loops instead.
		// "for-direction": [
		// 	"error"
		// ],
	
		// Always require === and !== instead of == and !=
		"eqeqeq": [
			"error",
			"always",
		],
		// ---------------------------------------------------------------------
		// !SECTION Error stuff
		// ---------------------------------------------------------------------
	
		// ---------------------------------------------------------------------
		// SECTION Pedantry
		// ---------------------------------------------------------------------
	
		// Warn about unused stuff; do not error, and do not autofix, as often
		// stuff may be written that will be used later etc.
		// https://eslint.org/docs/rules/no-unused-labels
		"no-unused-labels": [
			"warn",
		],

		"no-unused-vars": [
			"off",
		],
		// See: https://github.com/typescript-eslint/typescript-eslint/issues/1197
		// This needs to be the TypeScript rule so that it can understand stuff like
		// enums, as they otherwise appears as "unused"
		// https://eslint.org/docs/rules/no-unused-vars
		"@typescript-eslint/no-unused-vars": [
			"warn",
		],
	
		// Require a new line on end of file
		"eol-last": [
			"error",
			"always",
		],
	
		// ---------------------------------------------------------------------
		// !SECTION
		// ---------------------------------------------------------------------
	
	},
};
