# example-configs
These configs are examples and are not used as part of the META configuration or any configured compilers.

These are **only** for frontend/backend web.

The more headings I add, the more I start to think I really should start a blog or some repo of configs for everything-ever with guide that are hosted. What I was thinking is creating a Markdown to SolidJS parser or something, as there's many ReactJS Markdown parsers out there so I could probably reference existing stuff heavily.

If I do create a blog/guide site that I'm content with, and that ticks off:
- Fast
- Portable (source text is not hardcoded into something like React components)
- Extendable/Programmable (I am not stuck with the Markdown syntax for everything, and can use JavaScript)
- Customised styling (Not the default/GitHub Markdown style)
- Templateable (I can create templates for different categories such as blogs, guides, rants, ideas, etc.)
- Categorisable (This links to programmable: I want to be able to index stuff and have filters for everything, or whatever)

then I'll create said blog and probably limit the contents of this repo to succinct descriptions and the actual config files, then referencing these within a more thoroughly written up blog/post.

Also, since I intended to keep this folder just for some short and snappy configs with an overview README, and I've really expanding the scope (alongside CI/CD and other stuff), I might hold off on actually writing up this `README.md` and just create the config files for things for now.



## Editors



### VSCode



### Vim
*oh boi*



### Atom (maybe)
I used to use Atom but not for a while now.

IDK if there's even much I could put here



<br><br>



## Package Managers



### NPM



### Composer



## Bundlers etc.



### Webpack



#### webpack.ts
Document here the process of using TypeScript for the Webpack config file.



#### Multiple projects
Document here ways to compile multiple projects within Webpack.



#### webpack.mix.js
Document Laravel mix stuff here

- vue
- browserSync
- sass



<br>



### Vite



<br>



### Babel



#### ECMAScript -> ECMAScript

- notes about transpiling from one spec/version to another.



<br><br>



## Compilers/Transpilers



### TypeScript -> JavaScript

- commonjs config
- esm config



### SCSS/SASS -> CSS



<br><br>



## Framework/Libraries (need a better name for this)



### ReactJS

From scratch:
- https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch
- https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658



### Vue



### SolidJS



### Others?
I'm very unsure, and don't know if I care enough, about others.



<br><br>



## Linters



### ESLint



#### TypeScript



#### ReactJS



#### ReactJS + TypeScript



#### Vue
note for self: you need to add `<script lang="ts">` to Vue components for TypeScript



<br>



### Stylelint



<br>



### phpcs



<br>



### For the record



#### JSHint (I don't use)



#### jscs (Merged with ESLint)



<br><br>



## Unit Testing


### Jest



### PHPUnit



<br><br>



## CD/CD
*Tsk*, I need to learn this.



<br>



## Docker
I barely know how to use it, but I have some reasons to use it and ideas that could benefit from it.



<br><br>



## Documentation


### TypeDoc
I typically use TypeDoc but I had some issues with getting it running for this repo. It was complaining about `meta-client` which is probably (and I'm assuming here) because whatever `tsc` commands it may or may not run beforehand get messed up, or it simply just doesn't like it. Weridly, adding it to the excluded list doesn't work, hence I assume it's whatever preliminary commands typedoc runs that mess up.



### Doxygen



### JSDoc



<br><br>



## Uncategorised



### nodemon



### .env
Could probably create some sample env files and document the prefixes you need for them (e.g., `REACT_APP_`, `MIX_`).



### .editorconfig
TABS!