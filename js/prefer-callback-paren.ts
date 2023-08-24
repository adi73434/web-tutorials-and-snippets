
const src_arr = [1,2,3,4,5];

// This is my preference, but I think it's more readable
// to surround callback function values in parenthesis,
// to be consistent when multiple values are returned.

const single_no_value = () => {
	// eslint-disable-next-line
	const evens = src_arr.map(val => {
		if (val % 2 === 0) {
			return val;
		} else {
			return val*2;
		}
	})
	console.log(evens);
}

const single_value = () => {
	const evens = src_arr.map((val) => {
		if (val % 2 === 0) {
			return val;
		} else {
			return val*2;
		}
	})
	console.log(evens);
}

const multiple_value = () => {
	const evens = src_arr.map((val, idx) => {
		if (val % 2 === 0) {
			return val;
		} else {
			console.log("item index " + idx + " is odd");
			return val*2;
		}
	})
	console.log(evens);
}