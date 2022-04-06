const set = new Set([
	"line1",
	"line2",
	"city",
	"county",
	"postcode",
	"countryId",
	"reason"
]);

const func = () => {
	return set.has("county")
}

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);