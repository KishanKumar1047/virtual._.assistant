# 🗣️ Virtual Assistant

Welcome to the **Virtual Assistant** project! This web-based AI assistant, developed using **HTML, CSS, and JavaScript**, uses voice commands to perform various tasks like opening websites, telling the time, and greeting the user.

## 📚 Overview

The **Virtual Assistant** is designed to provide hands-free interaction through voice commands. It uses the **Web Speech API** for speech recognition and synthesis, allowing users to communicate naturally with the assistant.

## 🚀 Features

- 🐨 **Voice Recognition & Speech Synthesis**: Recognizes speech input and responds with synthesized voice.  
- ⏰ **Time & Date Queries**: Provides current time and date upon request.  
- 🌐 **Website Navigation**: Opens popular websites like YouTube, Google, Facebook, Instagram, and WhatsApp.  
- 🎉 **Custom Greetings**: Greets the user based on the time of day (morning, afternoon, evening).  
- 🔎 **Google Search**: Conducts web searches for unrecognized commands.  

## 🖥️ Demo

> 🗑️ *Click the microphone icon, speak your command, and see the assistant in action!*

## 🛠️ Getting Started

### Prerequisites

- A modern web browser (Chrome recommended)  
- Internet connection (for website commands and Google search)  

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KishanKumar1047/virtual._.assistant.git
   cd virtual._.assistant
   ```

2. **Run the Project**:  
   Open the `index.html` file in your preferred browser.

## 🧱 Usage

### Commands You Can Try:
- ✅ "Hello" or "Hey" – Receive a greeting.  
- ✅ "Who are you?" – Learn about the assistant.  
- ✅ "Open YouTube", "Open Google", "Open Facebook", "Open Instagram", "Open WhatsApp" – Instantly open websites.  
- ✅ "Time" – Hear the current time.  
- ✅ "Date" – Get today's date.  
- ✅ *Any other query* – Performs a Google search.  

## 💂️ Code Structure

### Key JavaScript Functions

- **`speak(text)`**: Converts text to speech.  
- **`wishMe()`**: Greets based on the current time.  
- **`takeCommand(message)`**: Processes and executes voice commands.  
- **Speech Recognition Setup**: Listens for voice input when the button is clicked.  

### Example Code Snippet
```javascript
// Function to speak text
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

// Voice command recognition and handling
recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};
```

## 🌱 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repo.  
2. Create a branch:  
   ```bash
   git checkout -b feature-branch
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add new feature"
   ```  
4. Push to the branch:  
   ```bash
   git push origin feature-branch
   ```  
5. Open a pull request.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Developed by **Kishan Kumar**  
- Thanks to the open-source community and browser vendors for supporting web speech technologies.  

---

🔗 **Visit the GitHub repository:** [Virtual Assistant](https://github.com/KishanKumar1047/virtual._.assistant)  

---


