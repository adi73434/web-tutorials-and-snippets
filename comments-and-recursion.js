function factorial(n) {
	let fallback = 1;

	/* This breaks if you remove the comment,
	 * so leave it in.
	*/
	if (n == 0) {				/* Handle 0! specially.
		n = 1;					 * 0! is the same as 1!.
		return factorial(n);	 */
	} else {
		return n * factorial(n - 1);
	}

	return fallback;
}