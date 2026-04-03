import axios from "axios";

export const askAi = async (message) => {
  try {
    if (!message || !Array.isArray(message) || message.length === 0) {
      throw new Error("Message array is empty.");
    }
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        message: message,
      },
      {
        headers: {
          Authorization: `bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    const content = response?.data?.choices?.[0]?.message?.content;
    if (!content || !content.trim()) {
      throw new Error("AI rerurned empty respone.");
    }
  } catch (error) {
    console.error("openRouter Error:", error.response?.data);
    throw new Error("OpenRouter API Error");
  }
};
