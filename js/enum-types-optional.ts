
// -----------------------------------------------------------------------------
// Enums for convenience
enum characterOptions {
	archer = "archer",
	swordsman = "swordsman",
	spy = "spy"
}

enum itemNames {
	veryCoolSword = "veryCoolSword",
	superCoolSword = "superCoolSword",
	superCoolBow = "superCoolBow",
	adminCastLightning = "adminCastLightning",
}
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// Types
type objType = {
	name: string,
	age: number,
	characterType?: characterOptions,
	gender?: string,
	items: itemsTypes[],
}

type itemsTypes = {
	id: number,
	// Here have each item have to have a "convenient name" using the enum
	// which lets you compare using the enum properties instead of an arbitrary id or name
	// which you may forget the meaning of
	convenientName: itemNames,
	nickname?: string,
	name: string,
	level: number,
	durability: number,
}
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// Create weapons
// The itemNames doesn't need to match the variable name... the variable name can be anything
const veryCoolSword: itemsTypes = {
	id: 0,
	convenientName: itemNames.veryCoolSword,
	// nickname - this can be ignored because of the ? making it optional
	name: "Very Cool Sword",
	level: 9,
	durability: 100,
};

const superCoolSword: itemsTypes = {
	id: 1,
	convenientName: itemNames.superCoolSword,
	// nickname - this can be ignored because of the ? making it optional
	name: "Super Cool Sword",
	level: 15,
	durability: 100,
};

const superCoolBow: itemsTypes = {
	id: 2,
	convenientName: itemNames.superCoolBow,
	// nickname - this can be ignored because of the ? making it optional
	name: "Super Cool Bow",
	level: 89,
	durability: 100,
};

const hiddenAdminItem: itemsTypes = {
	id: 3,
	convenientName: itemNames.adminCastLightning,
	nickname: "Thor",
	name: "Cast Lightning",
	level: 100,
	durability: 1,
};
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// Create players
const players: objType[] = [];

players.push(
	{
		name: "some cool name",
		age: 28,
		// characterType - this can be ignored because of the ? making it optional
		// gender - this can be ignored because of the ? making it optional
		items: [],
	},
);

players.push(
	{
		name: "not a cheater",
		age: 22,
		characterType: characterOptions.spy,
		items: [
			hiddenAdminItem,
		],
	},
);

players.push(
	{
		name: "InterestingName",
		age: 24,
		characterType: characterOptions.archer,
		items: [],
	},
);

players.push(
	{
		name: "WhereAmI",
		age: 26,
		// characterType - this can be ignored because of the ? making it optional
		gender: "female",
		items: [],
	},
);
// -----------------------------------------------------------------------------



// Give every players a veryCoolSword
players.forEach((player) => {
	player.items.push(veryCoolSword);
});



// Replace first player's veryCoolSwords with superCoolSwords
console.log("First player item details: ");
console.table(players[0].items);

players[0].items.forEach((item, index) => {
	// With the enum we can easily check something without having to guess, because this will ONLY
	// allow you to use itemNames and it will tell you
	if (item.convenientName === itemNames.veryCoolSword) {
		players[0].items[index] = superCoolSword;
	}
});

console.log("Replaced first player's veryCoolSwords with superCoolSwords");
console.table(players[0].items);



// Loop over every palyer
players.forEach((player) => {
	console.log("Player name is: " + player.name);

	if (player.gender === undefined ) {
		console.log("- Player did not provide a gender");
	}
	if (player.characterType === undefined) {
		console.log("- Player has not yet selected a character type");
	}

	// Loop over each player's items
	player.items.forEach((item) => {
		// Check if an archer has a very cool sword.
		if (player.characterType === characterOptions.archer && item.id === 0) {
			console.log("- An archer with a very cool sword? brave!");
		}

		console.log("- " + player.name + " owns item " + item.name);
	});
	console.log("\r\n");
});



/**
 *
 *
 * @param {string} name
 * @param {number} [wow]
 */
function somethingCool(name: string, wow?: number) {
	console.log(name);
	console.log(wow);
}

/**
 *
 *
 * @param {string} name
 * @param {number} wow
 */
function somethingNotAsCool(name: string, wow: number) {
	console.log(name);
	console.log(wow);
}

somethingCool("asdf");
somethingCool("asdf", 123);





somethingNotAsCool("asdf");
somethingNotAsCool("asdf", 123);



export {};
