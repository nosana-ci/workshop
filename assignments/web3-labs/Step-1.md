# Step 1. Build! Create and compile a simple smart contract

Now that we have our automation engine up and running it's time to build! 🚀

As mentioned, we're going to do so with the use of [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started).

Let's start out by creating a sample project in the root if this repo:

```shell
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

Let’s create the JavaScript or TypeScript project and go through these steps to compile,
test and deploy the sample contract.
We recommend using TypeScript, but if you are not familiar with it just pick JavaScript.
