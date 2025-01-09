declare namespace NodeJS {
  export interface ProcessEnv {
    LANGCHAIN_TRACING_V2: string;
    LANGCHAIN_ENDPOINT: string;
    LANGCHAIN_API_KEY: string;
    LANGCHAIN_PROJECT: string;
    LANGCHAIN_CALLBACKS_BACKGROUND: string;
    OPENAI_API_KEY: string;
  }
}
