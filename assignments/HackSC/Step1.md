## Getting Started

The first steps.

### Clone the Repository

```bash
git clone git@github.com:nosana-ci/workshop.git
cd workshop/assignments/HackSC/
```

### Retrieve Nosana Endpoint

Instead of posting jobs directly to Nosana and paying for them, Nosana will be running the Nosana Nodes for you with a running instance of a Jupyter Notebook.
That means you will get a URL that looks similar to the following: 
`https://fg6kuyxth94j5pud6vnewik1e8agdtn5ngcxwzqgclnm.node.k8s.prd.nos.ci/`
By navigating to this link, you will find a running Jupyter instance, with a 4090 GPU running in it.
With the 4090 GPU, you will be able to run a powerful Stable Diffusion model with it, and generate magical images in seconds.

As mentioned Nosana will provide the URL to these Jupyter Notebooks.
To do so, go to https://t.me/NosJobBot

The NosJobBot, will now be your friend, start off:

1. Start by typing `/register`
2. This will provide you with your first Nosana Endpoint
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

