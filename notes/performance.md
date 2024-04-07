## JavaScript
- https://webkit.org/blog/10308/speculation-in-javascriptcore/

Monomorphism and type guards
- https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
- https://codeburst.io/javascript-compiler-optimization-techniques-only-for-experts-58d6f5f958ca
- (probably): Don't pass different shapes of objects to functions.
- (maybe): Don't change the shape of objects; instead of adding new properties, declare them (as undefined? or maybe matching the type that will be used?) at initialisation.
- Don't change the types of variables.