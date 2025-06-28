# GenAiCursor

**GenAiCursor** is an AI-powered terminal assistant that helps you scaffold and build web projects using natural language. Powered by Google Gemini AI, it can execute shell commands, create files, and write code for you—all from your terminal.

---

## 🚀 Quick Start

1. **Clone & Install**

   ```sh
   git clone <your-repo-url>
   cd GenAiCursor
   npm install
   ```

2. **Configure API Key**

   - Create a `.env` file in the root directory:
     ```
     My_API_KEY="your-gemini-api-key-here"
     ```

3. **Run**
   ```sh
   node index.js
   ```

---

## 🛠️ Features

- **Conversational AI**: Interact naturally to build web projects.
- **Shell Command Execution**: Automates folder, file, and setup commands.
- **File Writing**: Writes HTML, CSS, JS, and more directly to files.
- **Cross-platform**: Detects your OS and generates compatible commands.
- **Context Awareness**: Maintains session history for smarter responses.

---

## 📂 Project Structure

```
GenAiCursor/
├── index.js         # Main entry point
├── _utils.js        # Utility functions and AI tool declarations
├── .env             # Your API key (not committed)
├── .gitignore
├── package.json
└── ...
```

---

## 💡 Usage

- When prompted, type your request (e.g., `Create a portfolio website`, `Add a contact form`).
- The assistant will suggest and execute commands, create files, and write code as needed.
- All actions are performed in your local file system.

---

## 🔒 Security Notes

- **Never share your `.env` file or API keys.**
- The assistant can execute shell commands and write files—review its actions before running in sensitive directories.

---

\*\*Happy
