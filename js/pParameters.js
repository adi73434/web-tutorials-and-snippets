import {logCol} from "./chalk-colours";



// Global variables
const username = "default";
const gender = "female";
const thing = "this is a thing";

/**
 * This function, with the p prefix on parameters, is an example
 * of why I kind of like this type of "syntax".
 *
 * @param {*} pUsername
 * @param {*} pGender
 * @param {*} pThing
 * @return {*}
 */
const createPerson = (pUsername, pGender, pThing) => {
	// Log passed variables
	console.log(
		logCol.speaker("These are the arguments you passed") + "\r\n" +
		logCol.info(" - Name: ") + pUsername + "\r\n" +
		logCol.info(" - Gender: ") + pGender + "\r\n" +
		logCol.info(" - Thing: ") + pThing,
	);

	// Log global variables
	console.log(
		logCol.speaker("These are the global variables") + "\r\n" +
		logCol.info(" - Name: ") + username + "\r\n" +
		logCol.info(" - Gender: ") + gender + "\r\n" +
		logCol.info(" - Thing: ") + thing,
	);

	// Here we "create" a person object. This has no tangible use, but it's an example.
	// Here the "username" is unrelated to the global variable, because it's the name of
	// the property on the person object.
	// You could, however, do something like username: username, which would make person.username
	// be equal to the global variable
	const person = {
		// NOTE: Change these from the p-prefixed name, to the normal name without the caps, as seen
		// in the top of the file.
		username: pUsername,
		gender: pGender,
		thing: pThing,
	};

	return person;
};

try {
	// ReferenceError: pUsername is not defined
	console.log("Parameter Name: " + pUsername);
	// ReferenceError: pGender is not defined
	console.log("Parameter Gender: " + pGender);
	// ReferenceError: pThing is not defined
	console.log("Parameter Thing:" + pThing);
}
catch (e) {
	console.error(logCol.error(e), "\r\n", logCol.errorFix("You are out of scope of the createPerson function"), "\r\n");
}

// A default person
const personA = createPerson(username, gender, "lmao");
console.log(logCol.speaker("This is personA"), personA);
console.log("\r\n");

// A beautiful person
const personB = createPerson("Some name", "Unspecified", "beautiful");
console.log(logCol.speaker("This is personB"), personB);
console.log("\r\n");
