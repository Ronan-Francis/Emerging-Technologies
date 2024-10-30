//1. Create the HTML structure

// 2. Initialize the JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded

  // Select the necessary HTML elements (input field, display area, submit button)
  const inputField = document.getElementById('user-input');
  const displayArea = document.getElementById('conversation');
  const submitButton = document.getElementById('send-btn');
  const debugModeCheckbox = document.getElementById('debugMode');

  // 3. Define the Eliza responses
  // Create a list of possible responses
  const defaultResponses = [
    ['Tell me more about that.', 1],
    ['How does that make you feel?', 2],
    ['Why do you think that is?', 3],
    ['Can you give me an example?', 4],
    ['I see. Please continue.', 5],
    ['What do you think about that?', 6],
    ['How do you feel about that?', 7],
    ['I understand. Please go on.', 8],
    ['What else can you tell me?', 9],
    ['I see. Please tell me more.', 10],
  ];

  const keywordResponses = {
    'sad': [
      ['I am sorry to hear that you are sad. Can you tell me more about it?', 1],
      ['What makes you feel sad?', 2],
      ['How long have you been feeling sad?', 3],
      ['Do you know what might be causing your sadness?', 4],
      ['Is there something that usually helps you feel better when you are sad?', 5]
    ],
    'happy': [
      ['That is great to hear! What makes you feel happy?', 1],
      ['Can you share more about your happiness?', 2],
      ['What usually makes you feel happy?', 3],
      ['How long have you been feeling happy?', 4],
      ['Is there something specific that made you happy recently?', 5]
    ],
    'angry': [
      ['Why do you feel angry?', 1],
      ['What caused your anger?', 2],
      ['How do you usually deal with your anger?', 3],
      ['Is there something that helps you calm down when you are angry?', 4],
      ['Can you describe what made you angry?', 5]
    ],
    'anxious': [
      ['What makes you feel anxious?', 1],
      ['Can you describe your anxiety?', 2],
      ['How often do you feel anxious?', 3],
      ['Is there something that helps you manage your anxiety?', 4],
      ['Do you know what triggers your anxiety?', 5]
    ],
    'feel': [
      ['Can you tell me more about how you feel?', 1],
      ['Why do you feel this way?', 2],
      ['How long have you been feeling this way?', 3],
      ['Is there something that usually helps you feel better?', 4],
      ['Do you know what might be causing these feelings?', 5]
    ],
    'hate': [
      ['Why do you hate it?', 1],
      ['Can you tell me more about your hatred?', 2],
      ['How long have you been feeling this way?', 3],
      ['Is there something that usually helps you deal with this hatred?', 4],
      ['Do you know what might be causing this hatred?', 5]
    ],
    'love': [
      ['Why do you love it?', 1],
      ['Can you tell me more about your love for it?', 2],
      ['How long have you been feeling this way?', 3],
      ['Is there something that usually helps you express your love?', 4],
      ['Do you know what might be causing this love?', 5]
    ],
    'want': [
      ['What do you want?', 1],
      ['Why do you want it?', 2],
      ['How long have you been wanting this?', 3],
      ['Is there something that usually helps you get what you want?', 4],
      ['Do you know what might be causing this desire?', 5]
    ],
    'need': [
      ['What do you need?', 1],
      ['Why do you need it?', 2],
      ['How long have you been needing this?', 3],
      ['Is there something that usually helps you get what you need?', 4],
      ['Do you know what might be causing this need?', 5]
    ],
    'good': [
      ['That is good to hear! Can you tell me more about it?', 1],
      ['What makes you feel good?', 2],
      ['How often do you feel good?', 3],
      ['Is there something specific that triggered this good feeling?', 4],
      ['Can you share more about what makes you feel good?', 5]
    ],
    'bad': [
      ['I am sorry to hear that. Can you tell me more about it?', 1],
      ['What makes you feel bad?', 2],
      ['How long have you been feeling bad?', 3],
      ['Do you know what might be causing this bad feeling?', 4],
      ['Is there something that usually helps you feel better when you feel bad?', 5]
    ],
    'tired': [
      ['Why do you feel tired?', 1],
      ['Can you tell me more about your tiredness?', 2],
      ['How long have you been feeling tired?', 3],
      ['Is there something that usually helps you feel less tired?', 4],
      ['Do you know what might be causing your tiredness?', 5]
    ],
    'excited': [
      ['That is exciting! Can you tell me more about it?', 1],
      ['What makes you feel excited?', 2],
      ['How often do you feel excited?', 3],
      ['Is there something specific that triggered your excitement?', 4],
      ['Can you share more about what makes you feel excited?', 5]
    ]
  };

  // Initialize a variable to track the number of responses
  let responseCount = 0;
  let lastResponse = '';

  // Implement a function to select an appropriate response based on user input
  function getResponse(userInput) {
    const words = userInput.toLowerCase().split(' ');
    for (let word of words) {
      if (keywordResponses[word]) {
        const responses = keywordResponses[word];
        return responses[Math.floor(Math.random() * responses.length)][0];
      }
    }
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)][0];
  }

  function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'eliza-message');
    messageElement.textContent = message;
    displayArea.appendChild(messageElement);
    displayArea.scrollTop = displayArea.scrollHeight;
  }

  // Function to display a greeting message from Eliza
  function displayGreeting() {
    const greetingMessage = 'Hello! How can I help you today?';
    const elizaMessage = document.createElement('div');
    elizaMessage.className = 'eliza-message';
    elizaMessage.textContent = greetingMessage;
    displayArea.appendChild(elizaMessage);
  }

  // Display the greeting message when the DOM content is loaded
  displayGreeting();

  // 4. Handle user input
  // Add an event listener to the submit button
  submitButton.addEventListener('click', function () {
    const userInput = inputField.value.trim();
    if (userInput) {
      displayMessage(userInput, 'user');
      const response = getResponse(userInput);
      displayMessage(response, 'eliza');
      inputField.value = '';
      if (debugModeCheckbox.checked) {
        console.log(`User Input: ${userInput}`);
        console.log(`ELIZA Response: ${response}`);
      }
    }
  });

  inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      submitButton.click();
    }
  });
});
