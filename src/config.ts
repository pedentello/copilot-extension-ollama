export const config = {
  ollama: {
    baseUrl: process.env.OLLAMA_API_BASE_URL ?? "http://127.0.0.1:11434",
    model: process.env.OLLAMA_MODEL ?? "deepseek-r1:7b-8k",
  },
  server: {
    port: Number(process.env.PORT ?? 3000),
  },
};
