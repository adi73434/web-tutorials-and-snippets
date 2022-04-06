
const obj = {
	line1: 'line1',
	line2: 'line2',
	city: 'city',
	county: 'county',
	postcode: 'postcode',
	countryId: 'countryId',
	reason: 'reason'
};

const func = () => {
	return obj["county"]
}

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);
