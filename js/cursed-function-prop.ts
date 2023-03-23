type funcType = {
	(arg1: number): boolean;
	foo: string;
}

const func: funcType = (arg1) => {
	return arg1 * 2 === 10;
};
func.foo = "asdf";

export {
	func,
}
