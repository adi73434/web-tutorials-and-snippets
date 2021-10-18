

type appearances_t = {
	word: string,
	times: number,
}

type lines_appeared_t = {
	appearances: appearances_t[],
	next: lines_appeared_t,
}


const lines_appeared = {
	appearances: [{word: "alphabetical", times: 1}, {word: "and", times: 1}, {word: "word", times: 1}, {word: "your", times: 1}, {word: "in", times: 2}],
	next: {
		appearances: [{word: "words", times: 1}, {word: "on", times: 1}],
		next: {
			appearances: [{word: "words", times: 1}],
			next: {
				
			}	
		}
	}
} as lines_appeared_t;



export default lines_appeared;