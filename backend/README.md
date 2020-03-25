

## Typescript installation with Node

To install typescript as dev dependency
```
yarn add typescript -D
```
- install express
```
yarn add express
```
- install express types as a dev dependecy
```
yarn add @types/express - D
```

to initialize the tsc configuration
```
yarn tsc --init
```
This will create a `tsconfig.json` file. Uncomment the `outDir` entry to, for example, `./dist` or `./build` folder.

After that, we can run `yarn tsc` to generate the JS files from the TS ones.

To automatically recompile the changes in the code, we can use `ts-node-dev`:
```
yarn add ts-node-dev -D
```
Next, we can create a script in the `package.json` file to run the server on development mode. We pass two flags as well
from the `node-dev` and `ts-node` libraries, which are `--respawn` and `--transpileOnly` respectively.
```
ts-node-dev --respawn --transpileOnly src/index.ts
```


## Linting with ESLint
We install ESLint to lint our files. The libraries are:
```
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Next, we can run in the terminal the following command to install the ESLint plugins
```
yarn eslint --init
```
Below are the answer given to the questions asked by the ESLint CLI
```
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard: https://github.com/standard/standard
? What format do you want your config file to be in? JavaScript
```
I installed the packages with `npm`. Then, I remove the `package-lock.json` file and reinstall them with `yarn`.

So, a `.eslintrc` is created. We add the `plugin:@typescript-eslint/recommended` to the extends array inside this file. Therefore, it becomes like the following:
```
  ...
   extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  ...
```
Also, at the `settings.json` file of VSCode we add the following: 
```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
```
## Installing Prettier
Next, we add `prettier` to the project b running the following:
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```
Then, we add `prettier/@typescript-eslint` to the `extends` array inside `.eslintr.js` file, so it becomes:
```
  ...
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  ...
```








