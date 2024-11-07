# Prerequisites

Before you begin, ensure you have the following installed on your system. Below are detailed steps to install each prerequisite:

### **1. Telegram**
You'll need Telegram to join the workshop's communication channel and receive support.

- Go to [Telegram Downloads](https://telegram.org/).
- Download the application for your platform (Windows, macOS, Linux, Android, or iOS).
- Install and set up an account.

---

### **2. Git**
Git is essential for cloning the repository and managing code.

- Go to [Git Downloads](https://git-scm.com/downloads).
- Download the installer for your operating system.
- Install Git using the default settings.
- Verify the installation by running:
  ```bash
  git --version
  ```

---

### **3. Hugging Face Account**
A Hugging Face account is required to access Stable Diffusion models.

- Go to [Hugging Face](https://huggingface.co/).
- Click **Sign Up** and create an account.
- Verify your email to activate your account.
- Once logged in, visit the [Stable Diffusion Model](https://huggingface.co/stabilityai/stable-diffusion-3-medium-diffusers) page to request access.

---

### **4. Node.JS (Optional)**
Node.js is optional but helpful if you want to explore advanced features or build related tools.

- Go to [Node.js Downloads](https://nodejs.org/en).
- Download the **LTS (Long-Term Support)** version for your platform.
- Install Node.js with the default settings.
- Verify the installation by running:
  ```bash
  node --version
  npm --version
  ```

---

### **5. Nosana CLI (Optional)**
Nosana CLI allows you to interact with Nosana's decentralized GPU platform directly.

- Open a terminal and run:
  ```bash
  curl -fsSL https://cli.nosana.io/install.sh | sh
  ```
- Verify the installation by running:
  ```bash
  nosana --version
  ```
- Follow the instructions on the [Nosana CLI GitHub](https://github.com/nosana-ci/nosana-cli/) for additional setup and configuration.

---

### **6. Python (Optional)**
Python is necessary to run the machine learning models and scripts.

- Go to [Python Downloads](https://www.python.org/).
- Download and install the latest version for your platform.
- During installation, make sure to check the box **"Add Python to PATH"**.
- Verify the installation by running:
  ```bash
  python --version
  pip --version
  ```

---

### **7. Jupyter Lab (Optional)**
Jupyter Lab is required to run the notebook for the workshop.

1. If Python is already installed, install Jupyter Lab using `pip`:
   ```bash
   pip install jupyterlab
   ```
2. Verify the installation by running:
   ```bash
   jupyter lab --version
   ```
3. To launch Jupyter Lab:
   ```bash
   jupyter lab
   ```
   This will open the Jupyter interface in your default web browser.

---

### **Quick Verification**
After completing these steps, you can verify that you have all prerequisites installed:
```bash
git --version
python --version
pip --version
jupyter lab --version
nosana --version
```

