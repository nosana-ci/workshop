# Step 2. Test step: Run tests

Now that we have our smart contract compiled, it's time to test it's functionality! 🕵️‍♂️

## Testing your contracts

Your project comes with tests that use Mocha, Chai, and Ethers.js.

If you take a look in the `test/` folder, you'll see a test file.

You can run your tests with 

```shell
npx hardhat test
```

This should output the test results

```
  Lock
    Deployment
      ✔ Should set the right unlockTime (677ms)
      ✔ Should set the right owner
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future
    Withdrawals
      Validations
        ✔ Should revert with the right error if called too soon
        ✔ Should revert with the right error if called from another account
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it
      Events
        ✔ Should emit an event on withdrawals
      Transfers
        ✔ Should transfer the funds to the owner
```

## Automate your pipeline

It's time again to automate this step.

In order to get this to work you'll need to move along the compiled artifact that you created in the last step.
Furthermore, in order to avoid installing the node dependencies again, we can also pass along the `node_modules`
directory!

```yaml
jobs:
  - name: build
    commands:
      - npm ci
      - npx hardhat compile
    artifacts:
      - name: node_modules
      - name: artifacts
        
  - name: test
    environment:
      REPORT_GAS: "true"
    commands:
      - npx hardhat test
    resources:
      - name: node_modules
      - name: artifacts
```

When done, `add`, `commit` and `push` all your files to the repo again.
This will trigger a new pipeline again over at https://app.nosana.io
Each time you make a change in the contract and commit it to this repository: the contract will automatically be tested!
Nice job!

## Step 3

When that works you're ready to start [Step 3](./Step-3.md), the final deployment step.
