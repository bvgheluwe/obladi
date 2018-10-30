
# Niet te vergeten

* tsconfig.json
	compilerOptions/module: moet modulesysteem zijn dat Node verstaat
* npm install -g typescript
* npm install @types/node --save-dev
* npm install -g ts-node en dan: ts-node main.ts
* tsc --watch -> start en compileert maar gooit een fout op na eerste bewaarde wijziging
* nodemon om te watchen?
* builden vanuit VSCode: Ctrl + Shift + b  (build) -> selecteer tsconfig.json
* debuggen vanuit VSCode: F5 (launch.json wordt gecreerd: (pad van tsconfig.json)\..\.vscode\launch.json)
* 



# Node basics

http://nodeguide.com/beginner.html

# Node + Typescript

https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require
https://www.bennadel.com/blog/3268-experimenting-with-ts-node-and-using-typescript-in-node-js-on-the-server.htm (ts-node)(deel tot aan tsconfig.json)

# Commander

https://stackoverflow.com/questions/37199787/how-can-i-use-commander-npm-with-typescript
https://www.npmjs.com/package/commander

# Module systems

https://www.typescriptlang.org/docs/handbook/module-resolution.html


# Te lezen
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://github.com/Microsoft/TypeScript-Node-Starter
https://www.twilio.com/blog/2017/06/writing-a-node-module-in-typescript.html
https://blog.sourcerer.io/a-crash-course-on-typescript-with-node-js-2c376285afe1

https://www.google.be/search?q=debugging+typescript+vscode
https://code.visualstudio.com/docs/languages/typescript
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
http://fredkschott.com/post/2014/06/require-and-the-module-system/
https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8
https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/

# Uit te zoeken
output: 1 bestand -> native via tsc of webpack?
verschillende manieren om method te definiëren in ts (gewoon, arrow functions)
vscode task: cleanup output dir -> build -> start (blijkbaar niet mogelijk: build en launch als aparte stappen)
git: installatie op Windows (path), .gitignore