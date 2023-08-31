# Hacker House

Welcome to the Hacker House assignment!
In this workshop, you'll learn how to automate the deployment of Solana Programs on Solana Devnet.

We'll go over core pipeline components, apply them with Solana tooling and do so in a Nosana pipeline!

## Assignment overview

Solana is a high-performance blockchain, that enables you to deploy dApps that can scale.

The goal of this exercise is to learn how to use a CI/CD system to deploy your own Solana Programs.

Your pipeline should at the very least contain the following components:

0. Initial prep: Setup your automation engine
1. Build step: Create and compile a simple Solana Hello World program
2. Test step: Run tests
3. Deploy step: Deploying the Solana program to devnet

### Initial prep: Setup your automation engine

Disclaimer: This exercise can be done with any CI provider.
However, most steps are focussed on implementation with the [Nosana Network](https://nosana.io/).
If you would like to implement this with alternative providers,
feel free to implement to forthcoming steps in the respective provider config files.

For now, let's start with setting up the engine!

1. Fork the [Solana Hello World repository](https://github.com/solana-labs/example-helloworld) into your development environment.
Notice the template [`.nosana-ci.yml`](../../.nosana-ci.yml) file in the root of this repository.
We'll be using this in a bit when you've managed to connect your forked repository.
This file contains placeholders for the most crucial stages of any software pipeline.
Namely, the (i) build, (ii) test, and (iii) deployment stage.

1. Hop on over to <https://app.nosana.io> and connect your fresh repo to the Nosana network
2. You will be prompted to select a template to add to your repo, **Select: Blank**
3. When done you're ready to start on [Step 1](./Step-1.md)!

## Optional Dependencies

If you want to develop locally you will need to install the following dependencies:

- [NodeJS & NPM](https://nodejs.org/en/download)
- [Rust](https://www.rust-lang.org/tools/install)
- [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)

These will install the tools that you need to run the commands to compile and test your Solana program locally. But in a bit, we will see that these dependencies will be included in our pipeline.

## Links

- <https://docs.nosana.io/pipelines/intro.html>
- <https://github.com/solana-labs/example-helloworld>
- <https://docs.solana.com/>
