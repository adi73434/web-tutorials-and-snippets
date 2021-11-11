import { logCol } from "./chalk-colours";

// -----------------------------------------------------------------------------
// You're better off here: https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work
// -----------------------------------------------------------------------------

const someGlobalString = "hello, world";

const asdf = (arg: string) => {
	console.log(logCol.info("asdf: arrow func"), this);
}

function qwer(arg: string) {
	// @ts-expect-error
	console.log(logCol.info("qwer: normal func"), this);
}



const parentObj = {
	stringInObj: "hello",
	
	asdf2: (arg: string) => {
		console.log(logCol.info("asdf2: arrow func"), this);
	},
	
	qwer2: function(arg: string) {
		console.log(logCol.info("qwer2: normal func"), this);
	}
}



class ParentClass {
	constructor(arg: string) {
		this.constructedStringInClass = arg;
	}
	constructedStringInClass;
	stringInClass = "string in class";

	meth(argMeth: string) {
		console.log(logCol.info("meth: method"), this);

		const asdf3 = (arg: string) => {
			console.log(logCol.info("asdf3: arrow func"), this);
		}

		function qwer3(arg: string) {
			// @ts-expect-error
			console.log(logCol.info("qwer3: normal func"), this);
		}
	}

	asdf4 = (arg: string) => {
		console.log(logCol.info("asdf4: arrow func"), this);
	}
	qwer4 = function (arg: string) {
		// @ts-expect-error
		console.log(logCol.info("qwer4: normal func"), this);
	}
}



console.log(logCol.speaker("---------- Calling global functions ----------"));
asdf("some string from argument");
qwer("some string from argument");

console.log(logCol.speaker("---------- Calling methods on object----------"));
parentObj.asdf2("some string from argument");
parentObj.qwer2("some string from argument");

console.log(logCol.speaker("---------- Calling class methods ----------"));
const pClass = new ParentClass("some string from argument");
pClass.meth("some string from argument");
pClass.asdf4("some string from argument");
pClass.qwer4("some string from argument");



export {
	parentObj,
	ParentClass
}