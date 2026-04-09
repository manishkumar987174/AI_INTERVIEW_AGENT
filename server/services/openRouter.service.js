import axios from "axios"

const getMockResponse = (messages) => {
    const userPrompt = messages.find(m => m.role === "user")?.content || "";
    
    // 1. Resume Analysis Request
    if (userPrompt.length > 100) {
        // Try to extract Role
        let role = "Software Developer";
        const roles = ["Frontend", "Backend", "Full Stack", "Data Scientist", "DevOps", "Mobile", "UI/UX", "Python", "Java", "MERN"];
        for (const r of roles) {
            if (userPrompt.toLowerCase().includes(r.toLowerCase())) {
                role = r === "MERN" ? "MERN Stack Developer" : `${r} Developer`;
                break;
            }
        }

        // Try to extract Skills
        const skillsList = ["React", "Node.js", "MongoDB", "Express", "Python", "Java", "Javascript", "TypeScript", "SQL", "Docker", "AWS", "Next.js", "Tailwind", "Flutter", "React Native"];
        const foundSkills = skillsList.filter(skill => 
            new RegExp(`\\b${skill}\\b`, 'i').test(userPrompt)
        );

        // Try to extract Experience
        const expMatch = userPrompt.match(/(\d+\+?\s*(year|yr|month|mo)s?)/i);
        const experience = expMatch ? expMatch[0] : "2+ years";

        return JSON.stringify({
            role: role,
            experience: experience,
            projects: ["Analysis completed in Fallback Mode"],
            skills: foundSkills.length > 0 ? foundSkills.slice(0, 5) : ["Javascript", "React", "Node.js"]
        });
    }

    // 2. Interview Answer Evaluation Request
    if (userPrompt.includes("Answer:") || userPrompt.includes("Question:")) {
        return JSON.stringify({
            confidence: 7,
            communication: 7,
            correctness: 8,
            finalScore: 7,
            feedback: "Solid answer with good clarity. (Fallback Mode)"
        });
    }

    // 3. Default (Question Generation)
    return "Explain your experience with the technologies mentioned in your resume.\nDescribe a challenging technical problem you solved recently.\nHow do you ensure code quality in your projects?\nWhat is your approach to learning new technologies?\nTell me about a project where you had to work in a team.";
};

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }

        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            console.error("CRITICAL: OPENROUTER_API_KEY is missing!");
            throw new Error("API Key is missing in environment variables.");
        }

        const isOpenAi = apiKey.startsWith("sk-proj-");
        const url = isOpenAi 
            ? "https://api.openai.com/v1/chat/completions" 
            : "https://openrouter.ai/api/v1/chat/completions";

        const model = isOpenAi 
            ? "gpt-4o-mini" 
            : "openrouter/free";

        console.log(`AI Request: Using ${isOpenAi ? 'OpenAI' : 'OpenRouter'} (${model})`);

        const response = await axios.post(url,
            {
                model: model,
                messages: messages,
                ...(isOpenAi ? {} : { 
                    'HTTP-Referer': 'https://ai-interview-agent-1-6819.onrender.com',
                    'X-Title': 'InterviewIQ'
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
            throw new Error("AI returned empty response.");
        }

        return content
    } catch (error) {
        const errorData = error.response?.data?.error || {};
        const statusCode = error.response?.status;
        
        console.error(`AI Error (${statusCode}):`, errorData.message || error.message);

        const isQuotaError = errorData.code === "insufficient_quota" || statusCode === 429;
        const isAuthError = statusCode === 401 || statusCode === 403;

        if (isQuotaError || isAuthError) {
            console.warn("Falling back to DYNAMIC MOCK response due to Auth/Quota issue.");
            return getMockResponse(messages);
        }

        console.error("AI Service Error:", errorData.message || error.message);
        throw new Error("AI Service Failed to provide response");
    }
}
