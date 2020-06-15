// Global variables
let name = "default";
let gender = "female";
let thing = "uwu";

const createPerson = (pName, pGender, pThing) => {

    // Log passed variables
    console.log("Parameter Name: " + pName);
    console.log("Parameter Gender: " + pGender);
    console.log("Parameter Thing:" + pThing);

    // Log global variables
    console.log("Vauge Name: " + name);
    console.log("Vauge Gender: " + gender);
    console.log("Vauge Thing: " + thing);
};


// A default person
createPerson(name, gender, "lmao");

// A beautiful person
createPerson("Some namne", "Unspecified", "beautiful");