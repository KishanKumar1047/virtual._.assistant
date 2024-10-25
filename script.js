// Selecting button, content display area, and voice icon
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Function to use the Speech Synthesis API to speak the text
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;   // Speed of speech
    text_speak.pitch = 1;  // Pitch of speech
    text_speak.volume = 1; // Volume level
    text_speak.lang = "hi-GB"; // Set language to Hindi
    window.speechSynthesis.speak(text_speak); // Initiates speech
}

// Function to greet user based on the time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours(); // Get current hour
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

// Run the wishMe function when the window loads
window.addEventListener('load', () => {
    wishMe();
});

// Speech recognition setup (supports both standard and webkit-based browsers)
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Triggered when speech recognition returns a result
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex; // Current result index
    let transcript = event.results[currentIndex][0].transcript; // Get the spoken text
    content.innerText = transcript; // Display the recognized speech in the content area
    takeCommand(transcript.toLowerCase()); // Process the spoken command (converted to lowercase)
};

// Start speech recognition when the button is clicked
btn.addEventListener("click", () => {
    recognition.start(); // Start listening for voice input
    btn.style.display = "none"; // Hide the button
    voice.style.display = "block"; // Show the voice display area
});

// Main function to handle different voice commands
function takeCommand(message) {
    btn.style.display = "flex"; // Show the button again after the command is processed
    voice.style.display = "none"; // Hide the voice display area

    // Responding to various voice commands
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Kishan Sir");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://"); // This is specific for systems with calculator protocols
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://"); // Opens WhatsApp
    } else if (message.includes("time")) {
        // Retrieve the current time and speak it out
        var currentTime = new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        speak(currentTime);
    }
    
     else if (message.includes("date")) {
        // Retrieve current date and speak it out
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else {
        // Default case: if the command doesn't match, perform a Google search
        let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "");
        speak(finalText); // Speak the response
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "")}`, "_blank"); // Google search
    }
}
