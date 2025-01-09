import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";

dotenv.config();

export const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});
