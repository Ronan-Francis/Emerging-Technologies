function getResponse() {
    const userInput = document.getElementById("user-input").value;
    const conversation = document.getElementById("conversation");

    if (userInput.trim() !== "") {
        // Display user's message
        const userMessage = document.createElement("p");
        userMessage.textContent = "You: " + userInput;
        conversation.appendChild(userMessage);

        // ELIZA's basic response
        const elizaResponse = document.createElement("p");
        elizaResponse.textContent = "ELIZA: I'm here to listen. Tell me more.";
        conversation.appendChild(elizaResponse);

        // Clear input field
        document.getElementById("user-input").value = "";

        // Scroll chat window to the bottom
        conversation.scrollTop = conversation.scrollHeight;
    }
}
