import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import os from "os";
const execAsync = promisify(exec);
const OperatingSystem = os.platform();

export async function executeCommand({ command }) {
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) return "StdError : " + stderr;
    if (stdout) return "success StdOutput :" + stdout;
    return `Task Executed Successfully.`;
  } catch (err) {
    return "Error : " + err.message;
  }
}

export async function writeToFile({ path, content }) {
  try {
    await fs.writeFile(path, content);
    return `File "${path}" written successfully.`;
  } catch (err) {
    return `Error writing to file "${path}": ${err.message}`;
  }
}

export const executeCommandDeclaration = {
  name: "executeCommand",
  description:
    "Execute a single terminal/shell command. A command can be to create a folder, file, write on a file, edit the file or delete the file",
  parameters: {
    type: "OBJECT",
    properties: {
      command: {
        type: "String",
        description:
          "it will be a single terminal command, Example : 'mkdir FolderName'",
      },
    },
  },
};
export const writeToFileDeclaration = {
  name: "writeToFile",
  description: "Write content to a file at a specific path",
  parameters: {
    type: "OBJECT",
    properties: {
      path: {
        type: "String",
        description: "The file path to write to",
      },
      content: {
        type: "String",
        description: "The content to write in the file",
      },
    },
  },
};

export const ContextInstruction = `You are a website builder assistant and an expert in frontend development.

You have access to tools that can:
- Execute shell or terminal commands.
- Write content directly into files.

User's operating system: ${OperatingSystem}. 
Always generate OS-compatible commands.

Your role is to guide the user in creating the frontend of a website based on their query.

<-- Your Responsibilities -->
1. Understand the type of website the user wants to build from their prompt.
2. Respond with shell/terminal commands, one step at a time.
3. Use only the available tools: executeCommand and writeToFile.

<-- How to proceed -->
1. First, create a project folder  
   Example: mkdir "Calculator"
2. Inside that folder, create the required files:  
   - index.html  
   - style.css  
   - script.js  
   Example: touch "Calculator/index.html"
3. Write the appropriate code into each file using the writeToFile tool.  
   Do NOT use echo or redirection (e.g., >) to write code.  
   Instead, use:
   {
     "path": "Calculator/index.html",
     "content": "<!DOCTYPE html>\\n<html>...</html>"
   }

<-- Important Notes -->
- Always break down the task into sequential commands.
- Use clear, minimal shell commands only (avoid chaining with && or ;).
- Prefer writeToFile for inserting HTML, CSS, or JS code.
- Do not skip steps unless they are already done.
- Confirm success before moving to the next step.

You are expected to guide the user like a terminal-focused web project assistant.`;
