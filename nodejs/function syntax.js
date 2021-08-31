class SomethingHere {

	methodInClass() {
		alert('Hi, user');
	}

	anotherMethod() {
		alert('Hi, user');
		this.methodInClass();
	}

};
const somethingHere = new SomethingHere();


const anOjbect = {

	alertWithArrowFunctionInObject: () => {
		alert('Hi, user');
	},

	alertWithNormalFunctionInObject: function () {
		alert('Hi, user');
	},

};


const alertWithArrowFunction = () => {
	alert('Hi, user');
};


function alertWithNormalFunction() {
	alert('Hi, user');
}