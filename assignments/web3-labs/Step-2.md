# Step 2. Test step: Run tests

Now that we have our smart contract compiled, it's time to test it's functionality! 🕵️‍♂️

## Testing your contracts

Your project comes with tests that use Mocha, Chai, and Ethers.js.

If you take a look in the `test/` folder, you'll see a test file.

You can run your tests with 

```shell
npx hardhat test
```

## Automate your pipeline

It's time again to automate this step

```yaml
jobs:
  - name: test
    commands:
      - npx hardhat test
```

## Step 3

When that works you're ready to start [Step 2](./Step-2.md), the final deployment step.
