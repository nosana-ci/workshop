# Step 1. Build! Create and compile a smart contract

Now that we have our automation engine up and running it's time to build! 🚀

As mentioned, we're going to do so with the use of [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started).

## Quick Start

Let's start out by creating a sample project in the root if this repo:

```shell
npx hardhat
```

Let’s create the JavaScript or TypeScript project and go through these steps to compile,
test and deploy the sample contract.
We recommend using TypeScript, but if you are not familiar with it just pick JavaScript.

## Compiling your contracts

Next, if you take a look in the `contracts/` folder, you'll see `Lock.sol`:

```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
```

To compile it, simply run:

```shell
npx hardhat compile
```

## Automate your pipeline

Now it's time to automatically build this contract in our ci engine.

```yaml
jobs:
  - name: build
    commands:
      - npx hardhat compile
```
