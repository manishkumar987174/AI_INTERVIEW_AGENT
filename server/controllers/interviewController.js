import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { askAi } from "../services/openRouterService.js";

export const anlyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume required" });
    }
    const filePath = req.file.path;
    const fileBuffer = await fs.promises.readFile(filePath);
    const uint8Array = new Uint8Array(filePath);
    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;

    let resumeText = "";

    // Extract text from all pages
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();

      const pageText = content.items.map((item) => item.str).join(" ");
      resumeText += pageText + "/n";
    }
    resumeText = resumeText.replace(/\s+/g, " ").trim();
 const messages = [
      {
        role: "system",
        content: `
Extract structured data from resume.

Return strictly JSON:

{
  "role": "string",
  "experience": "string",
  "projects": ["project1", "project2"],
  "skills": ["skill1", "skill2"]
}
`
      },
      {
        role: "user",
        content: resumeText
      }
    ]

    const aiResponse = await askAi(messages);
    const parsed = JSON.parse(messages);
    fs.unlinkSync(filePath);
    res.json({
      role: parsed.role,
      experience: parsed.experience,
      project: parsed.projects,
      skills: parsed.skills,
      resumeText,
    });

  } catch (error) {
    if (req.file && fs.existsSync(req.filePath)) {
      fs.unlinkSync(req.filePath);
    }
    res.status(500).json({ message: error.message });
  }
};
