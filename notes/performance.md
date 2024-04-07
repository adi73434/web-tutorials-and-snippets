## JavaScript
- https://webkit.org/blog/10308/speculation-in-javascriptcore/

### Monomorphism and type guards
- https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
- https://codeburst.io/javascript-compiler-optimization-techniques-only-for-experts-58d6f5f958ca
- (probably): Don't pass different shapes of objects to functions.
- (maybe): Don't change the shape of objects; instead of adding new properties, declare them (as undefined? or maybe matching the type that will be used?) at initialisation.
- Don't change the types of variables.

Quoting mrale.ph
> We did not discuss at all how shapes (aka hidden classes) are represented, computed and attached to objects. Check out my post on inline caches, some of my talks e.g. AWP2014 one to get the basic idea.
> 
> One important thing to realize here that the notion of shape in JavaScript VMs is a heuristical approximation. It’s an attempt to dynamically approximate static structure hidden in the program. Things that are shaped the same for a human might not necessary have the same shape for the VM:
> 
> function A() { this.x = 1 }
> function B() { this.x = 1 }
> 
> var a = new A;
> var b = new B;
> var c = { x: 1 };
> var d = { x: 1, y: 1 };
> 
> delete d.y
> // a, b, c, d all have DIFFERENT SHAPES for V8