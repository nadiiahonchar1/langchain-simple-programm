import { model } from "../models/chatModel";
import { translationPrompt } from "../prompts/translationPrompt";

export const translateText = async (language: string, text: string) => {
  const promptValue = await translationPrompt.invoke({ language, text });
  const response = await model.invoke(promptValue);
  return response.content;
};
