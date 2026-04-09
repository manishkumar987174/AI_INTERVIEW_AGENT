import dotenv from "dotenv";
dotenv.config();

const key = process.env.OPENROUTER_API_KEY;
if (key) {
    console.log("Key Length:", key.length);
    console.log("Starts with 'sk-or-v1-':", key.startsWith("sk-or-v1-"));
    console.log("Ends with quote:", key.endsWith('"'));
    console.log("Starts with quote:", key.startsWith('"'));
} else {
    console.log("Key NOT found in process.env");
}
