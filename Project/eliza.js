// ELIZA logic and keyphrase matching
const elizaResponses = [
    { keyword: "I feel", response: "Why do you feel that way?" },
];

// Variable to store the user's name
let userName = "";

// Function to get the response from ELIZA
function getResponse() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user input in chat
    addChatEntry("User", userInput);

    // Generate ELIZA's response
    const elizaResponse = matchResponse(userInput);
    addChatEntry("ELIZA", elizaResponse);

    // Clear input field
    document.getElementById('user-input').value = "";
}

// Match user input with ELIZA's responses
function matchResponse(userInput) {

}

// Function to add chat entries to the conversation window
function addChatEntry(speaker, text) {

}
