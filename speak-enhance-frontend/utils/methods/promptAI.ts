import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "@/geminiConfig";

const promptAI = async (prompt: string, conversation: string[]) => {
  // GoogleGenerativeAI required config
  const configuration = new GoogleGenerativeAI(config.apiKey);

  // Model initialization
  const model = configuration.getGenerativeModel({ model: config.modelId });

  //These arrays are to maintain the history of the conversation
  const currentMessages: any[] = [];

  // Restore the previous context
  // @ts-ignore
  for (const [inputText, responseText] of conversation) {
    currentMessages.push({ role: "user", parts: inputText });
    currentMessages.push({ role: "model", parts: responseText });
  }

  const chat = model.startChat({
    history: currentMessages,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  const responseText = response.text();

  return responseText;
};

export default promptAI;
