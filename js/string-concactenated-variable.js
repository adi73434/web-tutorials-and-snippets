const a = 1;

// Here we dynamically create a variable's name, so we
// concatnate "fruit_" with the variable a
// And yes, this works in Node.js and the browser

// NOTE: You should see Unexpected 'this'.eslintno-invalid-this)
// I don't know the semantics of this, but I assume ESLint by happenstance (or intentionally?)
// is pointing out how dumb this is
this["fruit_" + a] = "apple";

console.log(fruit_1);
