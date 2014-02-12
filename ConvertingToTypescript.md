Upgrading to wf-grunt 0.4.0
===========================

When upgrading to wf-grunt 0.4.0 we've added support for TypeScript. This means that there is a compilation step from
TypeScript to JavaScript. Resulting .js files are placed in the dist/ folder.

Projects using wf-grunt should be aware that they should change requireJS configs to point to the dist/ folder instead
of directly at the src/ folder.

New grunt tasks:
  * grunt compile (lints, cleans, compiles all .ts and copies src/*.js to the dist folder)
  * grunt watch:compile (same as above but watches for file changes)
  * grunt ts (just compiles the TypeScript files. No clean, JS or anything else)
  * grunt tslint (just lint the TypeScript files)


Converting a project to TypeScript
==================================
  * Upgrade to wf-grunt 0.4.0 or later in your package.json
  * npm install


Converting a .js file to .ts
============================

TypeScript is a superset of Javascript so technically, you don't need to change anything about your code for it to work. Normally it's as easy as renaming a .js file to a .ts file. If the code is wrapped in a requireJS style define block, you'll need to update the code a little.

Here are the steps:
  * Remove the `define(function(require)) {` near the top of the file
  * Remove the matching `});` at the end of the file
  * Add `declare var require:any;` at the top of the file, above `'use strict'` if it is there.

At this point, things should compile. Now you can sprinkle in some TypeScript features as you see fit.