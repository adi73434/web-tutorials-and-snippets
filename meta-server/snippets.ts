
/**
 * something
 *
 * @return {*}  {number}
 */
const test = ():number  => {
	return Math.random();
}



/**
 * This be unexported, and thus not in TypeDoc's docs
 *
 * @return {*}  {number}
 */
const unexportedFunc = (): number => {
	return 1;
}



export {
	test,
}