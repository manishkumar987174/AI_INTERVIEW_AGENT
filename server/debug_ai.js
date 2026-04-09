// import dotenv from "dotenv";
// dotenv.config();
// import axios from "axios";

// const checkKey = async () => {
//     console.log("Checking API Key...");
//     console.log("Key length:", process.env.OPENROUTER_API_KEY ? process.env.OPENROUTER_API_KEY.length : 0);
//     console.log("Key starts with:", process.env.OPENROUTER_API_KEY ? process.env.OPENROUTER_API_KEY.substring(0, 10) : "N/A");

//     try {
//         const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
//             {
//                 model: "openrouter/free",
//                 messages: [{role: "user", content: "hi"}]
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//                 },
//             });
//         console.log("Success!");
//     } catch (error) {
//         console.log("Error status:", error.response?.status);
//         console.log("Error data:", JSON.stringify(error.response?.data, null, 2));
//     }
// };

// checkKey();
