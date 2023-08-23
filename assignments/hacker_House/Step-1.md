# Step 1. Build! Compile a Solana Program

Now that we have our automation engine up and running it's time to build! 🚀

As mentioned, we're going to do so with the use of the [Solana Hello World Repo](https://github.com/solana-labs/example-helloworld).

## Quick start

When you first added your forked Solana Hello World repo to Nosana, you were prompted to select a template.
There should be a `.nosana-ci.yml` file in the root of your repo.
If everything went correctly your first pipeline should've already ran.

Open up your forked Solana Hello World repo, in your development environment. We recommend Visual Studio Code.
Other wise you can also follow along by using the build in pipeline editor on the Nosana Platform. On the repository page of your pipeline, click the `Manage` button and you will be able to edit right in the web browser!

Copy and replace all of the content of the `.nosana-ci.yml` file with the following:

```yml
# .nosana-ci.yml
global:
  image: alpine
  trigger:
    push:
      branches:
        - "*"

jobs:
  - name: build
    commands:
      - echo "building..."
    artifacts:
      - name: my-build

  - name: test
    commands:
      - echo "testing..."
    resources:
      - name: my-build

  - name: deploy
    commands:
      - echo "deploying..."
    resources:
      - name: my-build
```

Here we can already get a sneak peek of our pipeline. Where we define the container (`alpine`)that we will be using to run our commands in, and the different steps for this pipeline.
Commit this via the interface, or `add`, `commit` and `push` all the files to your repo, and see the CI engine take over!

Let's now go on to automating the first step: Building our pipeline

## Install and Build

If have installed the [Optional Dependencies](README.md#optional-dependencies), you should be able to run the following commands in the root of your repo.

First let's install the NodeJS dependencies, we do that using:

```bash
npm ci
```

Afterwards let's compile the Solana Program. You might need to install cargo-bpf. As we can glimpse in the `package.json` file there is a command to help us compile our Solan programs:

```bash
npm run build:program-rust
```

## Automate your pipeline

Now it's time to automatically build this program in our CI engine.

For this we need to change the `.nosana-ci.yml` file with the following snippet:

```yaml
jobs:
    - name: build
      commands:
        - npm ci
        - npm run build:program-rust
``

**HINT:** Don't forget to update the image!
For this project we recommend using the following image available on [docker hub: nosana/solana](https://hub.docker.com/layers/nosana/solana)
Remember to add the version number for this container.

```yaml
image: nosana/solana
```

## Step 2

When that succesfull runs, youre' ready to start on [Step 2](./Step-1.md), the testing step.
