# WIP!
***THIS FILE NOT REPRESENTATIVE OF CURRENT STATE OF AFFAIRS WITHIN THE WARZONE OF THIS REPOSITORY***

I've decided to give attention to this repo...


It'll become a
- Node.js and Browser JS;
- PHP;
- HTML;
- CSS and SCSS;
- and whatever-else

playground for:
- non-major scripts;
- snippets;
- tutorials;
- comparisons;
- examples;
- and really just about anything.


This is really a catch-all repository and I think I might keep it on my GitHub instead of GitLab *(ad populum intensifies)*, because so many people use GitHub.



## Languages



### TypeScript
Thou shall use TypeScript... or not, if you don't feel like it.


Use command `npm run ts`, and then specify a path to a `.ts` file. This is defined in the `package.json` file, but the way it works is not by defining a positional or optional argument, and instead NPM seems to just pass whatever you threw in.


The user syntax is as such:
`npm run ts ./loop-fetch-async.ts`


and the actually-ran command is:
`node --es-module-specifier-resolution=node --loader ts-node/esm ./loop-fetch-async.ts`, or some variant with strings surrounding the path.



### JavaScript
TBD: `npm run js`



### PHP
TBD:
- Considering either being weird and having NPM run php, as with `npm run phptest`, which actualyl seems to pass many additional `$_SERVER` vars related to npm;
- Executing PHP only as necessary by invoking the files from Node.js Cypress API, but holy shit what an unnecessary clusterfuck;
- **Using `php -S localhost:6969`**; or
- Being a bit more normal, but still as cumbersome as the first 2, and providing shell/batch scripts to download/install (or not, if I'm lazy) XAMPP/NGINX to host the PHP files.


I'm also wondering about how I could perhaps make this repository self-contained, as with the idea for the self-contained Node.js Cypress API and accompanying frontend.

For PHP, the only real reference I have of something similar (I think?) is the Laravel dev webserver... honestly, I think I'll just look into a Node.js API and a SolidJS frontend, because this repo is so bizarre yet manageable that it's a good shot at something I won't abandon.



## Configured Stacks and Tech



### PHP
Currently just vanilla... well, nothing's configured actually.



### Node.js Cypress
I'll probably have some sample API things here... and I might be META and have this repo host its own API and frontend through which every snippet/example/comparison etc., within this project will be hosted - who knows.



### SolidJS
TBD:
- Look into configuring this with ESLint etc. (this differs to the others cause I'm not sure about the plugins/parsers)
- TypeScript



### ReactJS
TBD:
- ESLint etc.
- TypeScript



### Vue
TBD:
- ESLint etc.
- TypeScript



### Angular (and/or AngularJS)
Kinda on the fence with this one (these two*)...

TBD:
- ESLint etc...?
- TypeScript