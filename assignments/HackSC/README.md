# HackSC x Nosana Hackathon

## Introduction

Thank you for joining the HackSC x Nosana Hackathon track.
Machine learning is on fire with the rise of generative AI technologies!
Today we'll be learning how to run a [Stable Diffusion model](https://en.wikipedia.org/wiki/Stable_Diffusion) with [LoRA finetuning](https://www.databricks.com/blog/efficient-fine-tuning-lora-guide-llms).

We'll be doing this by running a Jupyter Notebook on the Nosana Grid.
Nosana is a decentralized GPU provider, specially built for AI inferencing.
But today we are using it to run Jupyter Notebooks backed with a 3090 GPU.
So that we can run the Stable Diffusion model efficiently.

### Jupyter Notebook

For the ones who don't know what Jupyter is.
> Jupyter Notebook (formerly known as IPython Notebook) is an interactive web application for creating and sharing computational documents.

Jupyter Notebooks contain cells, that are filled with text and or executable python code or shell commands.

This let's you go through the step by step guide to learn the steps needed to build and run a stable Diffusion model.

Here's a quick peak:

![Jupyter](https://docs.nosana.io/assets/jupyter-CLXWp4Wp.gif)

## Prerequisites

Before you begin, ensure you have the following: 

- Basic understanding of Python and Machine Learning concepts.
- [Telegram (Required)](https://telegram.org/)
- [GitHub Account](https://github.com)

### **1. Telegram**

You'll need Telegram to connect with [NosJobBot](https://t.me/NosJobBot).
We'll explain in a little bit how to use [NosJobBot](https://t.me/NosJobBot)

- Go to [Telegram Downloads](https://telegram.org/).
- Download the application for your platform (Windows, macOS, Linux, Android, or iOS).
- Install and set up an account.

### 2. GitHub

You'll need GitHub to be able to submit your assignment.

- Go to [GitHub.com](https://github.com) and sign up for an account.

## Getting Started



## Retrieve Nosana Endpoint

Instead of posting jobs directly to Nosana and paying for them, Nosana will be running the Nosana Nodes for you with a running instance of a Jupyter Notebook.
That means you will get a URL that looks similar to the following: 

```
https://fg6kuyxth94j5pud6vnewik1e8agdtn5ngcxwzqgclnm.node.k8s.prd.nos.ci/
```

By navigating to this link, you will find a running Jupyter instance, with a 3090 GPU running with it.
With the 3090 GPU, you will be able to run a powerful Stable Diffusion model with it, and generate images in seconds, and run the finetuning within minutes.

### Telegram NosJobBot

As mentioned Nosana will provide the URL to these Jupyter Notebooks.
To do so, go to https://t.me/NosJobBot

The NosJobBot, will now be your friend, start off:

1. Start by typing `/start`
2. Next run `/hackathon` to register
3. Navigate to this endpoint to get started with your Jupyter Notebook.
4. The Jupyter Notebook will only be available for 2 hours, so be wary and save your data when needed!
5. You can copy past the included [Jupyter Notebook File](./assets/dreambooth.ipynb) into the running Jupyter instance, and work from there.

## Running Inferences

In the notebook, you'll:

- Load and preprocess your dataset.
- Configure model parameters for fine-tuning.
- Use Nosana's GPUs to accelerate the inferencing process

## Usage

- **Generate Self-Portraits:**
  - Upload a photo or use your webcam to capture an image.
  - Click on "Generate" to create a personalized self-portrait.



## Troubleshooting

- **Common Issues:**
  - *Jupyter Notebook won't start:* Ensure Nosana CLI is installed and configured correctly.
  - *Module not found errors:* Double-check that all dependencies are installed.
- **Getting Help:**
  - Open an issue on this repository.
  - Reach us at our [HackSC x Nosana Telegram Group](https://t.me/nosana_hacksc)


## Acknowledgments

- **Nosana Team** for providing the platform and support.
- **HackSC Organizers** for hosting the event.
- **Participants** for their enthusiasm and creativity.


