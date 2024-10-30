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

### Project Structure

- `index.html`: The main HTML structure and interface for user interaction.
- `style.css`: Basic styling for a clean and simple chatbot interface.
- `eliza.js`: JavaScript logic for processing user input and generating responses based on keywords.

---

### Development Process

#### 1. HTML Structure (`index.html`)
- **Interface Design**: Created an HTML layout with an input field for user text, a display area for conversation history, and a "Send" button to submit messages.
- **Debug Mode**: Added a checkbox for enabling debug mode to help view JavaScript logs during testing.

#### 2. Styling (`style.css`)
- **Styling**: Defined a minimalistic, clean look for the chatbot window, including padding, borders, and layout.
- **Message Alignment**: Customized alignment for user messages (right-aligned) and ELIZA's responses (left-aligned) for clarity.

#### 3. Chatbot Logic (`eliza.js`)
- **Event Listeners**: Added a listener for the "Send" button, capturing user input when clicked.
- **Response Logic**: 
  - Implemented keyword-based responses, with specific responses for terms like "sad," "happy," "angry," and "anxious."
  - If no keyword is detected, the bot selects a general response from a default set.
  - Weighted responses for repeated interactions to ensure variability and simulate human-like responses.

#### 4. Deployment
- **GitHub Pages**: Set up GitHub Actions for automatic deployment to GitHub Pages.

### Usage

Visit the ELIZA chatbot [here](your-link). Type a message and click "Send" to interact with ELIZA.

### Future Enhancements

- **Advanced Response Matching**: Potential improvements to keyword matching for more dynamic conversations.
- **User Emotion Tracking**: Expanding response logic to consider the conversation's emotional context.

---

This chatbot offers an interactive and approachable simulation of the original ELIZA, with a lightweight and responsive interface.

---

## Repository Structure
- `trigrams.ipynb`: Notebook containing all language model tasks.
- `eliza/`: Directory for the ELIZA chatbot with HTML, CSS, and JavaScript files.
- `trigrams.json`: JSON export of the trigram model.
- `README.md`: Project documentation.

---
