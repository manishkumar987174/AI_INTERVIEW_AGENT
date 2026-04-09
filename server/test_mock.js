// import { askAi } from "./services/openRouter.service.js";

// const testResumes = [
//     {
//         name: "Frontend Resume",
//         text: "Experience with React, Tailwind CSS, and Javascript. 3 years of experience as a Frontend developer. Focused on building responsive and accessible user interfaces. Proven track record of delivering high-quality web applications."
//     },
//     {
//         name: "Data Science Resume",
//         text: "Python, SQL, and Machine Learning enthusiast. 5 years in Data Science. Skilled in data analysis, visualization, and building predictive models. Experienced with TensorFlow and PyTorch."
//     },
//     {
//         name: "MERN Resume",
//         text: "MERN Stack expert. MongoDB, Express, React, Node.js proficiency. 4 years experience building full-stack applications. Strong understanding of RESTful APIs and modern backend architecture."
//     }
// ];


// const runTest = async () => {
//     // Force mock by using an invalid key (the one already in .env is likely invalid)
//     console.log("Starting verification test...");
    
//     for (const resume of testResumes) {
//         console.log(`\nTesting: ${resume.name}`);
//         const messages = [
//             { role: "system", content: "Extract structured data from resume." },
//             { role: "user", content: resume.text }
//         ];
        
//         const response = await askAi(messages);
//         console.log("AI Response:", response);
//     }
// };

// runTest();
