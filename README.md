# Emerging Technologies - Ronan Francis

## Overview

This repository includes two key projects that explore language modeling and human-computer interaction:

1. **Trigram Language Model & Analysis**
   - Preprocessing English texts.
   - Creating a third-order letter trigram model.
   - Generating a 10,000-character text sample.
   - Checking the generated text against a word list.
   - Saving the model as a JSON file.

2. **ELIZA Chatbot**
   - A web-based chatbot built with HTML, CSS, and JavaScript.
   - Simulates therapeutic conversations by responding to user input.

---

## Repository Structure

- **`texts/`**: Contains English texts from Project Gutenberg.
- **`words.txt`**: A list of English words for evaluation.
- **`trigrams.ipynb`**: Notebook with the trigram model implementation.
- **`trigrams.json`**: Saved trigram model.
- **`eliza/`**: Contains chatbot files (`index.html`, `style.css`, `eliza.js`).

---

## Trigram Language Model & Analysis

### Task 1: Building the Model
- **Corpus:** Five public domain texts from Project Gutenberg.
- **Preprocessing:** Standardized to uppercase letters, spaces, and periods.
- **Data Structure:** Dictionary mapping trigrams to their frequencies.

### Task 2: Text Generation
- **Method:** Start with "TH," selecting each next character based on trigram probabilities.
- **Selection Process:** Used Python’s `random.randint()` for weighted random selection.

### Task 3: Model Evaluation
- **Evaluation Metric:** Percent of generated words matching entries in `words.txt`.

### Task 4: Model Export
- **Format:** JSON for portability and reuse.

---

## ELIZA Chatbot

**Live Demo:** [Try the Chatbot](https://ronan-francis.github.io/Emerging-Technologies/)

### Design Features
- **Interface:** Clear, readable chat interface.
- **Logic:** Uses regular expressions for pattern matching and pronoun reflection.
- **Functionality:** Offers randomized responses and debugging mode.

---

## Development Process & Documentation

- **GitHub Issues:** Used for tracking tasks and documenting progress.
- **Commit History:** Regular updates with detailed messages.
- **Coding Standards:** Python follows PEP8 guidelines; JavaScript code is modular and well-commented.

---

## How to Run

1. **Trigram Tasks:**
   - Open `trigrams.ipynb` in Jupyter.
   - Execute all cells to process data, build the model, and export results.

2. **ELIZA Chatbot:**
   - Visit the [Chatbot Link](https://ronan-francis.github.io/Emerging-Technologies/).
   - Interact with the chatbot through the web interface.

---

## References

- [Project Gutenberg](https://www.gutenberg.org/): Source of texts.
- [ELIZA (Wikipedia)](https://en.wikipedia.org/wiki/ELIZA): Background on the ELIZA chatbot.
- [PEP8 Style Guide](https://peps.python.org/pep-0008/): Python coding standards.
- [GitHub Pages](https://pages.github.com/): Hosting platform for the chatbot.

