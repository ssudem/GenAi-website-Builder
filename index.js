import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

import {
  executeCommand,
  writeToFile,
  executeCommandDeclaration,
  writeToFileDeclaration,
  ContextInstruction,
} from "./_utils.js";

const ai = new GoogleGenAI({
  apiKey: process.env.My_API_KEY,
});
const history = [];

const availableTools = {
  executeCommand,
  writeToFile,
};

async function runAgent(userProblem) {
  history.push({
    role: "user",
    parts: [{ text: userProblem }],
  });

  while (true) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: history,
      config: {
        systemInstruction: ContextInstruction, // (keep your full instruction here)
        tools: [
          {
            functionDeclarations: [
              executeCommandDeclaration,
              writeToFileDeclaration,
            ],
          },
        ],
      },
    });

    if (response.functionCalls && response.functionCalls.length > 0) {
      console.log(response.functionCalls[0]);
      const { name, args } = response.functionCalls[0];

      const funCall = availableTools[name];
      const result = await funCall(args);

      const functionResponsePart = {
        name: name,
        response: {
          result: result,
        },
      };

      history.push({
        role: "model",
        parts: [
          {
            functionCall: response.functionCalls[0],
          },
        ],
      });

      history.push({
        role: "user",
        parts: [
          {
            functionResponse: functionResponsePart,
          },
        ],
      });
    } else {
      history.push({
        role: "model",
        parts: [{ text: response.text }],
      });
      console.log(response.text);
      break;
    }
  }
}

async function main() {
  let looprun = 5;
  console.log("I am cursor, Let's create a website");
  while (looprun > 0) {
    const userProblem = readlineSync.question("Ask me anything --> ");
    await runAgent(userProblem);

    // console.log("HISTORY :-\n");
    // console.log(history);
    looprun--;
  }
}

main();
