// const obj = {
// 	line1: "line1",
// 	line2: "line2",
// 	city: "city",
// 	county: "county",
// 	postcode: "postcode",
// 	countryId: "countryId",
// 	reason: "reason",
// };

// -----------------------------------------------------------------------------
// Object with some random elements, not sure if this helps against optimisation
// See: https://stackoverflow.com/a/25366071/13310905
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
const obj = {};
for (let i = 0; i < 20; i++) {
	const keyLength = Math.round(Math.random() * 20);
	let randKey = "";
	for (let j = 0; j < keyLength; j++) {
		randKey += chars[Math.floor(Math.random() * chars.length)];
	}
	const randValue = Math.random();
	obj[randKey] = randValue;
}
Object.assign(obj, {county: "county"});
// -----------------------------------------------------------------------------

/**
 *
 * @return {string}
 */
const func = () => {
	return obj["county"];
};

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);
