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


## Folders



### js
Access (Node.js):
- `> npm run ts ./js/filename.ts`
- File extension is required, also use the`ts` command for `.js` files.

Access (meta-client):
- `> npm run meta-server`
- `> npm run meta-client`
- Navigate to the respective file.


Standard JavaScript/TypeScript files that can be ran anywhere.



### js-browser
Access (meta-client):
- `> npm run meta-server`
- `> npm run meta-client`
- Navigate to the respective file.


Behaviour (based on file extension);
- `html`: You'll be redirected to the HTML file statically and natively, with nothing to do with SolidJS thereafter.
- `tsx`: You'll see the file loaded as a component into the meta-client. This will then run in the runner frame/component (TBD).
- `ts`/`js`: These files will [load within the meta-client](https://stackoverflow.com/a/7789831/13310905) onclick, unless they have been specified to rely on a specific context (such as a page like 10minutemail).


The scripts within this folder all rely either on a DOM context. The `.html` and `.tsx` files rely on either a HTML or SolidJS context; meanwhile, the `.ts`/`.js` files either rely on a specific page's context, or on *any* arbitrary browser context - check each file for details.



### js-express-api
Access:
- `import x from ""` within meta-server
- `> npm run meta-server`
- `curl` your desired API endpoint


These are APIs that will be attached to the meta-server, in the URI `/snippet/api/`



### js-node
Access (Node.js):
- `> npm run ts ./js/filename.ts`
- File extension is required, also use the`ts` command for `.js` files.


These scripts rely on a Node.js context.



### js-nunjucks
TBD: I was considering making this in the same way `js-express-api` is done, except for views.



## META

### meta-server
This is the "META" server that hosts both the browser and static file server for all of the files within this repository, and it enables creating snippets with Express without having to create a new Express app for every snippet - just export the router and import it in the meta-server server file.


The static file serving is done using [serve-index](https://github.com/expressjs/serve-index)



### meta-client
This is a frontend for this repository (which will be) built using SolidJS.

Here, this will serve the function of providing a nice way to browse the repository, including notes and such.

This was created with `npx degit solidjs/templates/ts meta-client` and merged into the main package.json.
This still uses vite.

To run this currently requires doing `npm run meta-client_build` and `npm run meta-client_serve`.





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