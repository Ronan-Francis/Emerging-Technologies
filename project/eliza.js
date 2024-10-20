//1. Create the HTML structure

// 2. Initialize the JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded

  // Select the necessary HTML elements (input field, display area, submit button)
  const inputField = document.getElementById('user-input');
  const displayArea = document.getElementById('conversation');
  const submitButton = document.getElementById('send-btn');

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
      ['What do you enjoy the most about this?', 3],
      ['How often do you feel this way?', 4],
      ['Is there something specific that triggered your happiness?', 5]
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

  // Implement a function to select an appropriate response based on user input
  function getResponse(userInput) {
    let response = '';
    let foundKeyword = false;

    // Determine if random responses should be used based on the response count
    const useRandom = responseCount > 5 || Math.random() < 0.5;

    for (const keyword in keywordResponses) {
      if (userInput.toLowerCase().includes(keyword)) {
        const responses = keywordResponses[keyword];
        if (!useRandom) {
          response = responses[0][0]; // Use the first response in the list
        } else {
          response = responses[Math.floor(Math.random() * responses.length)][0];
        }
        foundKeyword = true;
        break;
      }
    }

    if (!foundKeyword) {
      if (!useRandom) {
        response = defaultResponses[0][0]; // Use the first response in the list
      } else {
        response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)][0];
      }
    }

    // Increment the response count
    responseCount++;

    return response;
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
    // Capture the user input when the button is clicked
    const userInput = inputField.value;

    // Display the user input in the conversation area
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    displayArea.appendChild(userMessage);

    // 5. Generate and display Eliza's response
    // Use the function to select a response based on the user input
    const elizaResponse = getResponse(userInput);

    // Display Eliza's response in the conversation area
    const elizaMessage = document.createElement('div');
    elizaMessage.className = 'eliza-message';
    elizaMessage.textContent = elizaResponse;
    displayArea.appendChild(elizaMessage);

    // 6. Clear the input field
    // After displaying the response, clear the input field for the next user input
    inputField.value = '';
  });
});
