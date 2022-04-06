const arr = [
	"line1",
	"line2",
	"city",
	"county",
	"postcode",
	"countryId",
	"reason"
];
const func = () => {
	return arr.includes("county")
}

const intrvl = setInterval(() => {
	func();
}, 100);

setTimeout(() => {
	clearInterval(intrvl);
}, 1000);