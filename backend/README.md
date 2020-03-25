

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
