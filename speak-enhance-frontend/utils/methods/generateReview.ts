import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "@/geminiConfig";

const generateReview = async (conversation: string[]) => {
  // GoogleGenerativeAI required config
  const configuration = new GoogleGenerativeAI(config.apiKey);

  // Model initialization
  // @ts-ignore
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
    history: [],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(
    config.reviewPrompt + "\n" + JSON.stringify(currentMessages)
  );
  const response = await result.response;
  const responseText = response.text();

  return responseText;
};

export default generateReview;
