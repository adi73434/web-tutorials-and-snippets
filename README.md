# WIP!
***THIS FILE NOT REPRESENTATIVE OF CURRENT STATE OF AFFAIRS WITHIN THE WARZONE OF THIS REPOSITORY***

I've decided to give attention to this repo... now it is the "oh fuck me" monorepo of your nightmares


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

I'm also considering some cursed stuff like a C++ Lithium server thing, alongside the other server solutions, but using [cmake-js](https://www.npmjs.com/package/cmake-js).



## Who this is for
Myself, students, people who haven't yet learned better, and my friends so I can maintain a supposition that I know what I'm doing.

Prior to the idea of integrating scripts together into the meta setup and overcomplicating everythin, this repository was just an almost-abandoned dump of rather inane scripts. Though, between the stage where I thought "I'll clean this mess up" and "I'll integrate everything together" (make it a different, more complicated, kind of mess), I actually thought I could make this repository useful for students. 

This is to say, students for whom showing a more "modern" way of doing things, compared to what I studied and was recommended on my course, could be beneficial  in terms of what they can learn during university and where they can get employed.



## Motivation
I wanted a place to put all my HTML, CSS, JavaScript, and related library snippets. I also thought "what could be a cool way to make this whole thing more interactive", which lead to the meta-client idea. This runs on SolidJS because I came to like the idea of compiling away the need for a runtime library; even [Svelte](https://github.com/halfnelson/svelte-it-will-scale), which apparently doesn't scale well with a large number of components, has a high inflection point compared to React, and SolidJS has phenomenal performance, [at least based on these snythetics](https://krausest.github.io/js-framework-benchmark/2021/table_chrome_93.0.4577.63.html).

Additionally, since I presumed that I'll be writing a non-zero amount of snippets for Node.js/Express, I decided to create a meta-server to which API routes should be attached (based on the folder name in `./js-express-api`).



## Ports and Commands
All "client side" stuff shall live on port `301x` and up, whereas all "server side" stuff shall live on port `305x` and up. The "source of truth" for these ports will be the `.env` file, but currently nothing is really set up.


Clients:
- `3011`: `> npm run meta-client_serve`: Vite -> SolidJS (meta-client)
- `3012`: `> npm run reactjs`: Webpack (probably) -> ReactJS (frontends) **(TBD)**
- `3013`: `> npm run sveltejs`: Webpack (probably) -> SvelteJS (frontends) **(TBD)**
- `3014`: `> npm run vuejs`: Webpack (probably) -> VueJS (frontends) **(TBD)**
- `3015`: `> npm run angular`: Webpack (probably) -> Angular (frontends) **(TBD)**
- `3016`: `> npm run angularjs1x`: Webpack (probably) -> AngularJS (frontends) **(TBD)**


Servers:
- `3051`: `> npm run meta-server`: Node.js -> Express
- `3052`: `> npm run phpserver`: PHP Dev Server



## Folders



### comparisons
This is a folder which contains some comparisons which are best off being separated from the meta-client setup.



### examples
Access:
- `> npm run webpack-examples`
- This will compile all files named `index.ts`/`index.js` within subfolders of the `./examples` folder into a sibling `build` folder, and any "loose" scripts that are directly in the root of `./examples/` into their own file names.

This will have examples which are focused on themselves; they intentionally should be out of the meta context, and likely consiste of multiple files.

I need to think of a convenient way of running the php within this folder and compiling the TS. This is because `> npm run phpserver` is for the `/php` folder.

The current implementation of compiling TypeScript within the `./examples/` folder is *probably* unorthodox, but it involves using `webpack.examples.ts` by invoking 

Guidelines and TypeScript Compilation Behaviour:
- Put any example into its own folder, with an `index.ts` file within it. This is the entry point
- Wherever there is an index.ts file, it will be compiled into a sibling folder. You can have multiple nested folders like this and it still works.
- Put any loose scripts inside of the root of `./examples`. Do not put an `index.ts` file here just for clarity, because this does not depend on an entry point.



### frontends
This folder will/contains multiple browser frontend project samples.

These will likely just be very simple apps, and any APIs that they consume will likely be within the meta-server.

SolidJS is not included here, or at least not yet, because SolidJS is being used as the frontend lib that actually hosts the GUI for this repo, and as such the `tsx` snippets within the `js` browser are SolidJS based.



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



<!-- ### php-scripts
Access (PHP cli):
- `> php ./php-scripts/filename.php` -->



### php
Access (PHP cli):
- `> php ./php/filename.php` -->


Access (PHP dev server):
- Either:
- - `> php -S localhost:30 -t ./php/`; or
- - `> npm run phpserver`
- Then navigate to the page, or enter the URL to the file.



## META



### meta-server
This is the "META" server that hosts both the browser and static file server for all of the files within this repository, and it enables creating snippets with Express without having to create a new Express app for every snippet - just export the router and import it in the meta-server server file.


The static file serving is done using [serve-index](https://github.com/expressjs/serve-index)



### meta-client
This is a frontend for this repository (which will be) built using SolidJS.

Here, this will serve the function of providing a nice way to browse the repository, including notes and such.

This was created with `> npx degit solidjs/templates/ts meta-client` and merged into the main package.json.

This still uses vite.

To run, do:
- `> npm run meta-client`



## Languages



### TypeScript
Thou shall use TypeScript... or not, if you don't feel like it.


Use command `> npm run ts`, and then specify a path to a `.ts` file. This is defined in the `package.json` file, but the way it works is not by defining a positional or optional argument, and instead NPM seems to just pass whatever you threw in.


The user syntax is as such:
- `> npm run ts ./loop-fetch-async.ts`


and the actually-ran command is:
- `> node --es-module-specifier-resolution=node --loader ts-node/esm ./loop-fetch-async.ts`, or some variant with strings surrounding the path.
