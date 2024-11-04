
# README

## Overview
This repository contains:
1. **Eliza Chatbot**: A web-based, interactive chatbot.
2. **Trigram Language Model**: A notebook for trigram text analysis and generation.

---

### **Eliza Chatbot**

#### Design Choices:
- **HTML**: A central chat container provides a clear interface, enhancing usability.
- **JavaScript**:
  - Event listeners for button clicks and `Enter` key.
  - Keyword-based and default responses for context handling.
  - **Randomized Default Responses:** Randomly selecting default replies prevents conversations from feeling repetitive, maintaining user engagement.
  - **Debug Mode:** Helps developers in testing and understanding the chatbot logic by logging input and output, ensuring easier troubleshooting and understandment.
- **CSS**: Focuses on readability and clear message alignment to distinguish user input from the chatbot's responses.

---

### **Trigram Language Model Analysis (40%)**

#### Task Breakdown and Reasoning:

**Task 1: Third-Order Letter Approximation Model**
- **Choice of Corpus**: Five English texts that provide a source of natural language.
- **Text Sanitization**:
  - **Uppercase Conversion**: Standardizing all text to uppercase simplifies pattern recognition.
  - **Character Filtering**: Retaining only ASCII letters, full stops, and spaces; focusing the model on essential elements.
- **Trigram Data Structure**:
  - **Custom Design**: `defaultdict` streamlines the code, reducng the need for condition checks.

**Task 2: Trigram-Based Text Generation**
- **Weighted Random Selection**:
  - **Rationale**: Using counts as weights to pick the next character makes the text generation probabilistic yet context-aware, imitating natural language use where more frequent sequences appear more often.
  - **Implementation without External Libraries**:) This showcases an understanding of weighted random selection and probability distribution in pure Python.

**Task 3: Model Analysis**
- **Validation Against `words.txt`**:
  - **Validation**: Compared generated text against words.txt for quality assessment.
  - **Regex Extraction**: Used re.findall() for better word handling.

**Task 4: Model Export**
- **JSON Format**:
  - **Choice**: Sotred the decimals of the percentage for easy of use with `random.choices()`
  - **Repository Storage**: Ensures reproducibility and future use.

---