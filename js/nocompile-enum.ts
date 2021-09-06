// -----------------------------------------------------------------------------
// NOTE: This file intentionally errors.
// -----------------------------------------------------------------------------



// Here you can define an enum to hold whatever you want.
// This is like normal enums, except when it's compiled it becomes an object.
// You could probably see some similarities with Python and C++:
// https://docs.python.org/3/library/enum.html
// https://docs.python.org/3/library/enum.html#functional-api
// https://en.cppreference.com/w/cpp/language/enum
enum fruits {
	apple = "apple",
	orange = "orange",
	starwberry = "strawberry"
}

// Define an arrayOfFruits as an array, with the type fruits[]
const arrayOfFruits: fruits[] = [];

// All of these are fine
arrayOfFruits.push(fruits.apple);
arrayOfFruits.push(fruits.orange);
arrayOfFruits.push(fruits.starwberry);

// All of these are typos and are invalid... and you get informed about it very quickly
// within your editor and by the compiler
arrayOfFruits.push(fruits.Apple);
arrayOfFruits.push(fruits.appel);
arrayOfFruits.push(fruits.aple);

// All of these are simply the wrong type... you can only push something within the fruits enum,
// not a normal string
arrayOfFruits.push("Apple");
arrayOfFruits.push("appel");
arrayOfFruits.push("apple");
arrayOfFruits.push("aple");
