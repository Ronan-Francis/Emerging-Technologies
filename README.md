# Trigram Language Model and ELIZA Chatbot Project

This project contains two main components: a trigram-based language model in Python (in `trigrams.ipynb`) and a client-side ELIZA chatbot, deployed to GitHub Pages.

---

## Trigram Language Model Tasks - `trigrams.ipynb`

### Task 1: Third-Order Letter Approximation Model
1. **Data Preparation**: 
   - Collected five plain-text English books from Project Gutenberg.
   - Removed non-essential content, including preambles and postambles, keeping only uppercase ASCII letters, spaces, and periods for consistent formatting.

2. **Trigram Model Creation**:
   - Constructed a dictionary-based trigram model.
   - Each three-character sequence (trigram) is a key, with its frequency in the text as the value. This data structure allowed efficient storage and retrieval of trigram counts.


### Task 2: Text Generation Using the Trigram Model
1. **Seed Selection**: 
   - Started the text with "TH" to initiate the generation process.
   
2. **Character-by-Character Generation**:
   - For each new character, used the last two characters as a lookup in the trigram model.
   - Implemented a weighted random selection of the next character based on trigram counts, ensuring realistic text flow.


### Task 3: Model Analysis with English Word Matching
1. **Word List Matching**:
   - Loaded an English word list from `words.txt` to compare against the generated 10,000-character text.

2. **Percentage Calculation**:
   - Tokenized the generated text and calculated the percentage of tokens that matched words in the English list to evaluate the model’s accuracy in generating recognizable words.


### Task 4: Model Export as JSON
1. **Export Process**:
   - Saved the trigram model as `trigrams.json` using Python’s `json` library for easy reuse and analysis.

---

## Project (40%) - ELIZA Chatbot

### ELIZA Chatbot Interface and Logic
- **Interface**: Built with HTML and CSS in the `eliza` directory, featuring a simple user input box and display for conversation history.
- **JavaScript Logic**: Implemented in `eliza.js`, handling basic ELIZA responses with regular expression-based pattern matching.

### Deployment
- **GitHub Pages**: Configured GitHub Actions to deploy the chatbot automatically on the main branch. 

Visit the chatbot on GitHub Pages [here](your-link).

---

## Repository Structure
- `trigrams.ipynb`: Notebook containing all language model tasks.
- `eliza/`: Directory for the ELIZA chatbot with HTML, CSS, and JavaScript files.
- `trigrams.json`: JSON export of the trigram model.
- `README.md`: Project documentation.

---
