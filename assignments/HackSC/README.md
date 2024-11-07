# HackSC x Nosana Hackathon

## Introduction

Thank you for joining the HackSC x Nosana Hackathon track.  
Machine learning is revolutionizing the tech world, and generative AI is leading the charge!  
In this session, you'll learn how to run a [Stable Diffusion model](https://en.wikipedia.org/wiki/Stable_Diffusion) with [LoRA fine-tuning](https://www.databricks.com/blog/efficient-fine-tuning-lora-guide-llms). 

Using Nosana's decentralized GPU platform, you’ll run Jupyter Notebooks on a powerful NVIDIA 3090 GPU. 
This ensures you can efficiently fine-tune the Stable Diffusion model, enabling rapid image generation and customization.

## What is Jupyter Notebook?

If you're new to Jupyter, here's a quick overview:

> Jupyter Notebook (formerly known as IPython Notebook) is an interactive web application for creating and sharing computational documents.

These notebooks allow you to combine text, Python code, and shell commands in a step-by-step guide, making it easy to understand and execute machine learning workflows.

Here’s a sneak peek of what it looks like in action:

![Jupyter](https://docs.nosana.io/assets/jupyter-CLXWp4Wp.gif)

## Prerequisites

Before you begin, make sure you have:

- **Basic understanding of Python and machine learning concepts.**
- **[Telegram](https://telegram.org/) (Required).**
- **[GitHub Account](https://github.com).**

### **1. Telegram**

You'll need Telegram to interact with [NosJobBot](https://t.me/NosJobBot), which will guide you through setting up and running your Jupyter Notebook.

- Download the app from [Telegram Downloads](https://telegram.org/) for your platform.
- Install it and create an account.

### **2. GitHub**

A GitHub account is necessary for submitting your project.

- Sign up for a free account at [GitHub.com](https://github.com).

## Getting Started

---

### Retrieve Nosana Endpoint

Nosana simplifies your workflow by providing ready-to-use Jupyter Notebooks with access to a 3090 GPU. 
Instead of setting everything up manually, you'll receive a URL like this:

```
https://fg6kuyxth94j5pud6vnewik1e8agdtn5ngcxwzqgclnm.node.k8s.prd.nos.ci/
```

By navigating to this link, you’ll access a fully functional Jupyter Notebook environment. 
With this setup, you can:

- Run Stable Diffusion models in seconds.
- Fine-tune your model within minutes.

---

### Using Telegram NosJobBot

NosJobBot will provide you with the URL for your Jupyter Notebook. 
Here’s how to use it:

1. Open [NosJobBot](https://t.me/NosJobBot) in Telegram and type `/start`.
2. Register for the hackathon by typing `/hackathon`.
3. To create a Jupyter Notebook instance, type `/jupyter`.  
   - You’ll receive a unique URL to access your notebook.
4. Open the URL and start working on your project.
5. **Important:** Your notebook instance will be active for only **2 hours**, so save your work regularly!
6. **Advisory:** If your notebook fails, and you are not able to stop it manually, and you are not able to create a new one with the [NosJobBot](https://t.me/NosJobBot), you can run `/killnotebook`, and then try again with `/jupyter`.

To run the notebook, navigate to `Run > Run All Cells` in the menu.

---

### Saving Your Progress

To avoid losing your work, follow these steps:

1. Save your notebook:
   - `File > Save Notebook`.
2. Download the notebook:
   - `File > Download`. The file will be saved as `nosana_workshop.ipynb`.
3. To continue with your saved file in a new session:
   - Upload the file by clicking `upload` in the files overview.
   - Alternatively, drag and drop your `nosana_workshop.ipynb` file.

---

## Running Inferences

In your notebook, you’ll:

1. Load and preprocess your dataset.
2. Configure model parameters for fine-tuning.
3. Use Nosana’s GPUs to accelerate the LoRA fine-tuning process.
4. Generate a fine-tuned model to create custom-themed images.
5. Experiment with different prompts to produce unique, creative outputs.

For example, you can train your model to generate a fantasy landscape or personalized artwork in a specific style.

---

## Challenge

So what's the challenge?

The challenge is to create Jupyter Notebook that flexes your creative skills adjusting the python code and adjusting the parameters of the fine-tuned model.
What kind of dataset will you use to fine-tune your model?
How will you use this model to solve a problem?
Or will you try to create new artistic expressions using your new found skills?
What kind of prompts can you come up with to create super detailed images of what's hiding in your imagination?

We can’t wait to see your amazing projects come to life. Let’s build something incredible together!

Take a look at the [Challenges](./JudgingCriteria.md#challenges) for more inspiration!

---

## Submission

Once you’ve completed your work, follow the steps below to submit your project:

1. Save and download your progress as described in [Saving Your Progress](#saving-your-progress).
2. Refer to the [Submission Guide](./Submission.md) for detailed instructions.

Your submission will be evaluated based on creativity, technical execution, and adherence to the guidelines.

---

## Troubleshooting

If you encounter any issues:

- **Problem:** The Jupyter session expires before saving your work.  
  **Solution:** Ensure you save and download your notebook regularly.

- **Problem:** Can’t access your Jupyter Notebook URL.  
  **Solution:** Restart the process with NosJobBot and request a new notebook using `/jupyter`.

- **Getting Help:** Reach out to us via the [HackSC x Nosana Discord Channel](https://discord.com/channels/1298818387484610571/1303604638573924424).

---

## Acknowledgments

- **Nosana Team**: For providing the platform and support.
- **HackSC Organizers**: For hosting this exciting event.
- **Participants**: For bringing their creativity and enthusiasm to this hackathon.

---



