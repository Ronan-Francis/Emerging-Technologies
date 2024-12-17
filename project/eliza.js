//1. Create the HTML structure

// 2. Initialize the JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded

  // Select the necessary HTML elements (input field, display area, submit button)
  const inputField = document.getElementById('user-input');
  const displayArea = document.getElementById('conversation');
  const submitButton = document.getElementById('send-btn');
  const debugModeCheckbox = document.getElementById('debugMode');

  const responses = {
    'hello|hi|hey': [
      "Hello! How are you feeling today?",
      "Hi there! What’s on your mind?",
      "Hey! How can I help you?"
    ],
    'you remind me of (.*)': [
      "Why do you think I remind you of $1?",
      "What makes you think of $1 when talking to me?",
      "Is it a good feeling to be reminded of $1?"
    ],
    '(.*) mother|father|family|parent(.*)': [
      "Tell me more about your family.",
      "How does that make you feel about your family?",
      "What role does your family play in your thoughts?"
    ],
    '(.*) I need (.*)': [
      "Why do you need $2?",
      "Would getting $2 really help you?",
      "What if you didn’t need $2?"
    ],
    '(.*) I am (.*)': [
      "Why do you think you are $2?",
      "How long have you felt that way?",
      "What made you feel like $2?"
    ],
    '(.*) I feel (.*)': [
      "Why do you feel $2?",
      "Does feeling $2 happen often?",
      "How does that feeling affect you?"
    ],
    '(.*) (sorry|apologize)(.*)': [
      "No need to apologize.",
      "Apologies aren't necessary. Why do you feel that way?",
      "It’s okay to feel that way."
    ],
    'bye|goodbye|exit': [
      "Goodbye! Take care.",
      "Thank you for sharing. Goodbye!",
      "Bye! I’m here if you need to talk again."
    ],
    '(.*)': [
      "Can you tell me more?",
      "Why do you say that?",
      "How does that make you feel?",
      "What do you mean by that?",
      "Interesting... go on."
    ]
  };

  const compiledPatterns = Object.keys(responses).map(pattern => {
    return { regex: new RegExp(pattern, 'i'), responses: responses[pattern] };
  });

  function getResponse(userInput) {
    for (let { regex, responses } of compiledPatterns) {
      const match = regex.exec(userInput);
      if (match) {
        const response = responses[Math.floor(Math.random() * responses.length)];
        return response.replace(/\$(\d+)/g, (_, group) => match[group] || '');
      }
    }
    return "I'm not sure I understand. Can you elaborate?";
  }

  function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'eliza-message');
    messageElement.textContent = message;
    displayArea.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: 'smooth' });
  }

  function displayGreeting() {
    const greetingMessage = 'Hello! How can I help you today?';
    displayMessage(greetingMessage, 'eliza');
  }

  displayGreeting();

  submitButton.addEventListener('click', function () {
    const userInput = inputField.value.trim();
    if (userInput) {
      displayMessage(userInput, 'user');
      const response = getResponse(userInput);
      displayMessage(response, 'eliza');
      inputField.value = '';
      if (debugModeCheckbox.checked) {
        console.log(`[DEBUG] User Input: ${userInput}`);
        console.log(`[DEBUG] ELIZA Response: ${response}`);
      }
    }
  });

  inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitButton.click();
    }
  });
});
