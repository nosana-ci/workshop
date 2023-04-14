# Step 3. Deploy step: The contract will be deployed on Matic's Mumbai Testnet

Now that we have our smart contract compiled, and tested, it's time to deploy it! 🚀

## Deploying your contracts

Next, to deploy the contract we will use a Hardhat script.

Inside the `scripts/` folder you will find a file with the following code:

```typescript
import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

You can run it using

```shell
npx hardhat run --network polygon_mumbai
```

## Automate your pipeline

Let's automate this final step.

```yaml
jobs:
  - name: deploy
    commands:
      - npx hardhat run --network polygon_mumbai
```
