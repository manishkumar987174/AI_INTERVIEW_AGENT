import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const testPdf = async () => {
    try {
        const filepath = "e:/3.interviewIQ/server/public/1775497225968-Manish_Kumar_CV.pdf";
        const fileBuffer = await fs.promises.readFile(filepath);
        const uint8Array = new Uint8Array(fileBuffer);

        console.log("PDF Loading...");
        const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;
        console.log("PDF Loaded, pages:", pdf.numPages);

        let resumeText = "";
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();
            const pageText = content.items.map(item => item.str).join(" ");
            resumeText += pageText + "\n";
        }
        console.log("Text Extracted:", resumeText.substring(0, 100));
    } catch (error) {
        console.error("PDF Parse Error:", error);
    }
};

testPdf();
