import dotenv from "dotenv";
dotenv.config();
import { askAi } from "./services/openRouter.service.js";

const testAi = async () => {
    try {
        const messages = [
            {
                role: "system",
                content: "Extract structured data: role, experience, projects, skills. Return strictly JSON."
            },
            {
                role: "user",
                content: "Manish Kumar, MERN Stack Developer, 2 years experience, projects: AI Chatbot, Portfolio, skills: React, Node, MongoDB."
            }
        ];

        console.log("Asking AI...");
        const response = await askAi(messages);
        console.log("AI Response:", response);
    } catch (error) {
        console.error("AI Test Error:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.status);
        }
    }
};

testAi();
