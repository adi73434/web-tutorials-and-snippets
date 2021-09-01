/* eslint-disable require-jsdoc */



/**
 * This is a class with methods attached to it.
 *
 * @class SomethingHere
 */
class SomethingHere {
	methodInClass() {
		alert("Hi, user");
	}

	anotherMethod() {
		alert("Hi, user");
		this.methodInClass();
	}
};
const somethingHere = new SomethingHere();



/**
 * This is an object with children that are functions.
 *
 */
const anOjbect = {
	alertWithArrowFunctionInObject: () => {
		alert("Hi, user");
	},

	alertWithNormalFunctionInObject: function() {
		alert("Hi, user");
	},

};



/**
 * This is a normal arrow function
 *
 */
const alertWithArrowFunction = () => {
	alert("Hi, user");
};



/**
 * This is a normal function.
 *
 */
function alertWithNormalFunction() {
	alert("Hi, user");
}
