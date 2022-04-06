// const arr = {
// 	line1: "line1",
// 	line2: "line2",
// 	city: "city",
// 	county: "county",
// 	postcode: "postcode",
// 	countryId: "countryId",
// 	reason: "reason",
// };

// -----------------------------------------------------------------------------
// Array with some random elements, not sure if this helps against optimisation
// See: https://stackoverflow.com/a/25366071/13310905
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
const arr = [];
for (let i = 0; i < 20; i++) {
	const keyLength = Math.round(Math.random() * 20);
	let randKey = "";
	for (let j = 0; j < keyLength; j++) {
		randKey += chars[Math.floor(Math.random() * chars.length)];
	}
	arr.push(randKey);
}
arr.push("county");
// -----------------------------------------------------------------------------

/**
 *
 * @return {string}
 */
const func = () => {
	return arr.includes("county");
};

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);
