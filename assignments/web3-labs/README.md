# Web3 Labs

Welcome to the Web3 Labs assignment!
In this workshop you'll learn how to automate your Solidity Contract deployment
on the Polygon test network.

We'll go over core components of any pipeline, apply those with Hardhat tooling,
and do so in a nosana pipeline!

## Assignment overview

Hardhat is an Ethereum development environment that provides an easy way to deploy smart contracts, 
run tests and debug Solidity code locally.

The goal of this exercise is to learn how you can let the commands you run locally to deploy your smart contract. 

You're pipeline should at least contain the following components:

0. Inititial prep: Setup your automation engine
1. Build step: Create and compile a simple smart contract
2. Test step: Run tests
3. Deploy step: The contract will be deployed on Matic's Mumbai Testnet

### Inititial prep: setup your automation engine

Disclaimer: this exercise can be done with any CI provider. 
However, most steps are focussed on implemention with the [Nosana Network](https://nosana.io/).
If you would like to implement this with alternative providers,
feel free to implement to forthcoming steps in the respective provider config files.

For now, let's start with setting up the engine!

1. Fork this repository into your own development environment.

Notice the template [`.nosana-ci.yml`](../../.nosana-ci.yml) file in the root of this repository.
This file contains placeholders for the most crucial stages of any software pipeline.
Namely the (i) build, (ii) test, and (iii) deployment stage.

2. Hop on over to https://app.nosana.io and connect your fresh repo to initiate a pieline

## Links

- https://docs.nosana.io/pipelines/intro.html
- https://wiki.polygon.technology/docs/develop/hardhat
