# Node app starter pack

This is a starter pack for a Node and TypeScript projects. It's for a back end project where bundling isn't required.

The motivation was to overcome the challenge with the current Node ecosystem having poor support for ESM.

There were multiple things I wasn't able to use such as nodemon, ts-node on its own or ts-node-dev.

The solutions that worked were to use node with with loader `ts-node/esm`, or to compile TypeScript in watch mode and then use `nodemon` on the resulting JavaScript.

Additionally, for standard Node to work, I had to include the `.js` file extension every time I imported something in a TypeScript file.

So, it was all a bit of a mess.

The result is that I can use modern features such as ESM imports and top-level async await.


## Instructions for your own development

When importing, use `.js` file extensions. For example, write import statements such as `import foo from './foo.js'`.





