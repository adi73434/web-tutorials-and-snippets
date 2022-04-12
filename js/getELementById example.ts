


const getInput = (): string => {
	// let's pretend we know inputLine is an input element or doesn't exist
    var val = <HTMLInputElement | null>document.getElementById("inputLine");
	if (typeof val?.value === "string")  {
		return val.value;
	}
	else {
		return 12
	}
}

const something = () => {
	let x: number;
	x = getInput()
}


export {getInput}