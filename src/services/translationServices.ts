import { model } from "../models/chatModel";
import { translationPrompt } from "../prompts/translationPrompt";

const translatedText = async (language: string, text: string) => {
  const promptValue = await translationPrompt.invoke({ language, text });
  // const model = await getModelInstance();
  const response = await model.invoke(promptValue);
  return response.content;
};

export default translatedText;