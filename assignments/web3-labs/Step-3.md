# Step 3. Deploy step: The contract will be deployed on Matic's Mumbai Testnet

Now that we have our smart contract compiled, and tested, it's time to deploy it! 🚀

## Deploying your contracts

Next, to deploy the contract we will use a Hardhat script.

First let's change the `hardhat.config.ts` to the following:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}

export default config;
```

Notice the two environment variables used in this configuration?

To deploy our tested smarkt contract we need to set `PRIVATE_KEY`, and `POLYGONSCAN_API_KEY`.

### Private key

We need a funded test wallet for testing.
This test key should be a new keypair.
Follow below steps to generate really quickly

1. `openssl rand -hex 32` will generate a new key.
2. Get its public key by importing to your favorite wallet
3. Get some Mumbai `MATIC` over at https://faucet.polygon.technology/

Inside the `scripts/` folder you will find a file called `deploy.ts` which will deploy your contract.

You can run it using:

```shell
export PRIVATE_KEY=5ae4655bbd427f5fa5f57696f6dc6a90d7aa758489f884e39d1a44943104bac1
npx hardhat run scripts/deploy.ts
```

And you should get a deployed progam!

```
Lock with 0.001ETH and unlock timestamp 1681729208 deployed to 0xC279D9967FA0D3F9794a7CAa10B97a8Df35BA973
```

## Automate your pipeline

Let's automate this final step in our CI platform.

```yaml
jobs:
  - name: deploy
    SECRETS:
      - PRIVATE_KEY
    commands:
      - npx hardhat run --network polygon_mumbai
    resources:
      - name: node_modules
      - name: artifacts
```

**NOTE:**  The `PRIVATE_KEY` has to be added securely in the CI platform, and not put in code. 
Go over to https://app.nosana.io and the test private key generated above as a secret named `PRIVATE_KEY`.

## Bonus points

Add Polygonscan API key to verify the contract on Polygonscan. 
You can generate an API key by [creating an account](https://polygonscan.com/register).

Add something like the below to your hardhat configuration file,
and don't forget to add the `POLYGONSCAN_API_KEY` secret in the CI app. 

```typescript
etherscan: {
  apiKey: process.env.POLYGONSCAN_API_KEY
}
```
