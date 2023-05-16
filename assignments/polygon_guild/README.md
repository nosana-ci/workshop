# Polygon Guild

Welcome to the Polygon Guild assignment!
In this workshop, you'll learn how to automate the deployment of Solidity contracts
on the Polygon test network.

We'll go over core pipeline components, apply them with Hardhat tooling,
and do so in a Nosana pipeline!

## Assignment overview

Hardhat is an Ethereum development environment that provides an easy way to deploy smart contracts,
run tests and debug Solidity code locally.

The goal of this exercise is to learn how to use a CI/CD system to deploy your smart contract using
commands you run locally.

Your pipeline should at the very least contain the following components:

0. Initial prep: setup your automation engine
1. Build step: create and compile a simple smart contract
2. Test step: run tests
3. Deploy step: the contract will be deployed on Matic's Mumbai testnet

### Initial prep: setup your automation engine

Disclaimer: this exercise can be done with any CI provider.
However, most steps are focussed on implementation with the [Nosana Network](https://nosana.io/).
If you would like to implement this with alternative providers,
feel free to implement to forthcoming steps in the respective provider config files.

For now, let's start with setting up the engine!

1. Fork this repository into your own development environment.
Notice the template [`.nosana-ci.yml`](../../.nosana-ci.yml) file in the root of this repository.
This file contains placeholders for the most crucial stages of any software pipeline.
Namely, the (i) build, (ii) test, and (iii) deployment stage.

2. Hop on over to <https://app.nosana.io> and connect your fresh repo to the Nosana network

3. When done you're ready to start on [Step 1](./Step-1.md)!

## Links

- <https://docs.nosana.io/pipelines/intro.html>
- <https://wiki.polygon.technology/docs/develop/hardhat>
