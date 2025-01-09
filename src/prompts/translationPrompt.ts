import { ChatPromptTemplate } from "@langchain/core/prompts";

const systemTemplate = "Translate the following from English into {language}";

export const translationPrompt = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{text}"],
]);
