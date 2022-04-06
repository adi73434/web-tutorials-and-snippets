// const set = new Set([
// 	"line1",
// 	"line2",
// 	"city",
// 	"county",
// 	"postcode",
// 	"countryId",
// 	"reason",
// ]);

// -----------------------------------------------------------------------------
// Array -> Set with some random elements, not sure if this helps against optimisation
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
const set = new Set(arr);
// -----------------------------------------------------------------------------

/**
 *
 * @return {string}
 */
const func = () => {
	return set.has("county");
};

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);
