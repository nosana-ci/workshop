# Step 3. Deploy step: Deploy to Solana Devnet

Now that we have our Solana program compiled and tested, it's time to deploy it! 🚀

## Deploying your contracts

Next, to deploy the Solan program
Notice the environment variable used in this configuration?

To deploy our tested smart contract we need a private key and some funds.

## Private key

We need a funded test wallet for testing, and this can be a new keypair.
For this demo we will be using a burner private key.
It is not recommended that you use this for all situations.

First we will generate a new key, we will airdrop ourselves a small amount

```bash
solana-keygen new --no-bip39-passphrase
solana airdrop 1 --url devnet
solana program deploy dist/program/helloworld.so --url devnet
```

And you should see your program being deployed!

```text
Program Id: HSP7wxy...b826KgF5Y4C
```

Go to your favorite Solana block explorer, and enter the program-ID to see your deployed Solana program

## Automate your pipeline

Let's automate this final step in our CI platform.

```yaml
jobs:
  - name: deploy
    commands:
      - solana-keygen new --no-bip39-passphrase
      - solana airdrop 1 --url devnet
      - solana program deploy dist/program/helloworld.so --url devnet
    resources:
      - name: node_modules
      - name: dist
```
