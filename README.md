# GenAiCursor

GenAiCursor is an AI-powered terminal assistant that helps you scaffold and build web projects using natural language. It leverages Google Gemini AI to interpret your instructions and can execute shell commands, create files, and write code for you, all from the terminal.

## Features

- **Conversational AI**: Ask for any web project or feature, and the assistant will guide you step by step.
- **Shell Command Execution**: Automatically runs terminal commands to set up folders, files, and more.
- **File Writing**: Writes HTML, CSS, JS, and other code directly into files.
- **Cross-platform**: Detects your OS and generates compatible commands.
- **History Tracking**: Maintains a session history for context-aware responses.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- An API key for [Google Gemini AI](https://ai.google.dev/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd GenAiCursor
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory:
     ```
     My_API_KEY="your-gemini-api-key-here"
     ```

4. **Run the project:**
   ```sh
   node index.js
   ```

## Usage

- When prompted, type your request (e.g., "Create a React app", "Add a navbar to my site").
- The assistant will suggest and execute commands, create files, and write code as needed.
- All actions are performed in your local file system.

## Project Structure

```
.
├── index.js         # Main entry point
├── _utils.js        # Utility functions and AI tool declarations
├── .env             # Environment variables (not committed)
├── .gitignore
├── package.json
└── ...
```

## Security

- **Never share your `.env` file or API keys.**
- The assistant can execute shell commands and write files—review its actions before running in sensitive directories.

## License

MIT

---

\*\*Happy building
