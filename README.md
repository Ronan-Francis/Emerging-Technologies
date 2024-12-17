# README

## Overview

This repository contains two main components:

1. **Trigram Language Model & Analysis (Tasks)**  
   Implemented in `trigrams.ipynb`. This involves:
   - Cleaning and processing five selected English texts from Project Gutenberg.
   - Building a third-order letter trigram model.
   - Generating a 10,000-character text sample using the model.
   - Evaluating the generated text against a list of English words.
   - Exporting the trigram model as a JSON file.

2. **ELIZA Chatbot (Project)**  
   A web-based, ELIZA-like conversational interface implemented in `HTML`, `CSS`, and `JavaScript`. Deployed via GitHub Pages for easy accessibility. This chatbot simulates a classic therapist-like conversation, reflecting user inputs and providing context-aware responses.

---

## Repository Structure

- **`texts/`**: Contains the five public domain texts from Project Gutenberg, used as the corpus.
- **`words.txt`**: A list of English words for evaluating generated text quality.
- **`trigrams.ipynb`**: Jupyter Notebook containing:
  - Text preprocessing & trigram model building (Tasks 1 & 2)
  - Text generation & evaluation (Task 3)
  - Model exporting (Task 4)
- **`trigrams.json`**: Exported JSON file of the trigram model.
- **`eliza/`**: Contains the ELIZA chatbot implementation.
  - **`index.html`**: Main webpage for interacting with ELIZA.
  - **`style.css`**: Styles for a clear and readable UI.
  - **`eliza.js`**: JavaScript logic for pattern matching, reflection, and response generation.

---

## Trigram Language Model & Analysis (Tasks)

### Task 1: Building the Third-Order Letter Approximation Model

**Corpus Selection:**  
Five free English texts from Project Gutenberg. The texts are cleaned to remove preambles/postambles and restricted to uppercase letters, full stops, and spaces. This normalization simplifies the creation of consistent trigram keys.

**Rationale:**  
- **Uppercasing All Letters:** Ensures uniformity in matching sequences.
- **Character Filtering:** Retaining only letters, spaces, and full stops reduces noise and complexity.

**Data Structure:**  
A dictionary where keys are three-character sequences (trigrams) and values are counts. This allows efficient lookups and updates.

### Task 2: Trigram-Based Text Generation

Starting with `"TH"`, each new character is chosen based on the frequency of trigrams starting with the last two characters of the current string. Counts are used as weights, giving a probabilistic yet structured text generation approach.

**Weighted Random Selection:**  
No external libraries are used. Implemented by computing cumulative counts and using `random.randint()` for a fair weighted choice, demonstrating understanding of probability distributions in Python.

### Task 3: Model Evaluation Against `words.txt`

The generated 10,000-character text is split into tokens. We check each token against `words.txt` to find the percentage of recognized English words. This serves as a rough metric of text quality and coherence.

### Task 4: Exporting the Model

We serialize the trigram dictionary as `trigrams.json` for easy sharing and potential reuse. JSON is a simple, human-readable format compatible with many tools and languages.

---

## ELIZA Chatbot (Project)

**Direct Link :**  
[View the Chatbot](https://ronan-francis.github.io/Emerging-Technologies/)

### Design Choices

- **HTML/CSS Layout:**  
  A simple, user-friendly interface. The conversation area clearly distinguishes user messages from ELIZA’s responses, and the input field and buttons are straightforward.

- **JavaScript Logic:**
  - **Pattern Matching & Reflection:**  
    Uses regex patterns to detect keywords/phrases. Reflection maps pronouns (e.g., "I" → "you") to simulate empathetic responses.
  - **Keyword & Default Responses:**  
    If no specific pattern matches, ELIZA falls back on general prompts, encouraging further conversation.
  - **Randomized Default Responses:**  
    Multiple responses for generic queries prevent repetitive outputs, adding variability to the dialogue.
  - **Debug Mode:**  
    A checkbox toggles console logs for input, reflection, and chosen responses, aiding in troubleshooting and understanding the bot’s logic.

---

## Development Process & Documentation

### GitHub Issues

All tasks and improvements were tracked using GitHub Issues. This approach documents reasoning, design decisions, and incremental progress. Anyone reviewing the repository can reconstruct the development timeline.

### Commit History

Steady, incremental commits reflect continuous progress and refinement. Each commit addresses a specific part of a task or a bug fix, enhancing transparency and maintainability.

### Coding Standards

Python code follows PEP8 guidelines, and JavaScript code uses meaningful variable names, clear function structures, and inline comments where necessary. The code is intended to be both educational and maintainable.

---

## How to Run

1. **Trigram Tasks:**
   - Open `trigrams.ipynb` in Jupyter (e.g., `jupyter notebook` or `jupyter lab`).
   - Run all cells to:
     - Process texts and build the trigram model.
     - Generate a 10,000-character sample.
     - Evaluate against `words.txt`.
     - Export the model as `trigrams.json`.

   The notebook prints analysis results and the percentage of recognized English words.

2. **ELIZA Chatbot:**
   - Open `https://ronan-francis.github.io/Emerging-Technologies/` in a browser.
   - Type a message and press Enter or click "Send" to interact.
   - Optional: Enable Debug Mode to see detailed logs in the console.

---

## References

- [Project Gutenberg](https://www.gutenberg.org/): Source of public domain texts.
- [ELIZA (Wikipedia)](https://en.wikipedia.org/wiki/ELIZA): Background on the original ELIZA program.
- [PEP8 Style Guide](https://peps.python.org/pep-0008/): Python coding conventions.
- [GitHub Pages](https://pages.github.com/): Free static site hosting, used to deploy ELIZA.

---

By integrating research, careful development, thorough documentation, and consistent version control practices, this repository provides a comprehensive solution to both the trigram modeling tasks and the ELIZA chatbot project.
