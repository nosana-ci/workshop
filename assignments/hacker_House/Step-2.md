# Step 2. Test step: Run tests

Now that we have our Solana Program compiled, it's time to test its functionality.

## Testing your contracts

The Solana Hello World repo comes with tests already implemented. 
You will be able to find them in the `src/program-rust/tests` of the repo.

You can run tests with:

```bash
npm run test:program-rust
```

The output of the tests should look something like this:

```text
running 1 test
test test::test_sanity ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test test_helloworld ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

## Automate your pipeline

Now that we know which command to use to run our tests, it's time agin to automate this step.

In order to get this to work, you'll need to move along the compiled artifact that you created in the last step. This will help speed up your pipeline.

```yaml
jobs:
  - name: build
    commands:
      - npm ci
      - npm run build:program-rust
    artifacts:
      - name: node_modules
      - name: dist

  - name: test
    commands:
      - npm run test:program-rust
    resources:
      - name: node_modules
      - name: dist
```

When done, `add`, `commit` and `push` all your files to the repo again.
This will trigger a new pipeline again over at <https://app.nosana.io>
Each time you make a change in the contract and commit it to this repository, the contract will automatically be tested!
Nice job!

## Step 3

When that works you're ready to start [Step 3](./Step-3.md), the final deployment step.
