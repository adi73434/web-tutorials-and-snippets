import fetch from "node-fetch";



type fetchType = Array<number>


/**
 * Fetch a random number as per API.
 *
 * @return {Promise<fetchType>}
 */
const fetchNums = async (): Promise<fetchType> => {
	return fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5", {
		method: "GET",
	})
		.then((response) => {
			// Make sure returned response is good
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json() as Promise<fetchType>;
		});
};



/**
 * Fetcher wrapper thingy... just read the guts, this function is just to encapsulate
 *
 */
const fetcher = (): void => {
	const allData = [] as Array<Array<number>>;

	/**
	 * This fetches a bunch of random numbers and aggregates their results into the allData array.
	 * NOTE: I presume the latter array in the return type <any[]>[]> means an array of PromiseSettledResults
	 * but this is a bit weird to look at.
	 *
	 * @return {*}  {Promise<PromiseSettledResult<any[]>[]>}
	 */
	const aggregate = async (): Promise<PromiseSettledResult<any[]>[]> => {
		// ---------------------------------------------------------------------
		// Single for loop
		// ---------------------------------------------------------------------
		// const promises: Array<Promise<void | any[]>> = [];
		// for (let i = 0; i < 3; i++ ) {
		// 	const res = fetchNums();
		// 	// Push into array the promise, but also act on the promise? This seems
		// 	// kinda whack and requires the void | any
		// 	promises.push(res.then((data) => {
		// 		allData.push(data);
		// 	}));
		// }


		// ---------------------------------------------------------------------
		// Split loops
		// ---------------------------------------------------------------------
		const promises: Array<Promise<any[]>> = [];
		// Gather the promises from fetches
		for (let i = 0; i < 3; i++ ) {
			const res = fetchNums();
			promises.push(res);
		}

		// Next step of each promise is pushing data to array. Order doesn't matter
		promises.forEach((promReq) => {
			promReq.then((data) => {
				// If you kept the void | any
				// You would need to perform a check that the data is an array,
				// but it's not necessary here
				// if (Array.isArray(data)) {
				allData.push(data);
				// }
			});
		});


		// Wait until all promises are settled because the next stage requires that all
		// the data is gathered
		return await Promise.allSettled(promises);
	};

	// This fetches and aggregates results, and when all promises are resolved,
	// it moves on to logging the data
	aggregate().finally(() => {
		console.log(allData);
	});
};

fetcher();

// export {
// 	fetcher,
// };
