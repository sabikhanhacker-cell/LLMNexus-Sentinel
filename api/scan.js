const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/api/scan", async (req, res) => {
    try {

        const { systemPrompt, userInput } = req.body;

        const prompt = `
You are an AI Security Analyst.

System Prompt:
${systemPrompt}

User Prompt:
${userInput}

Analyze this input and respond ONLY in valid JSON.

{
  "risk_level":"SAFE or MODERATE or CRITICAL",
  "score":0,
  "analysis":"",
  "sanitized_version":""
}
`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                })
            }
        );
                const data = await response.json();

        if (!response.ok) {
            return res.status(500).json({
                error: data
            });
        }

        const text = data.candidates[0].content.parts[0].text;

        let result;

        try {
            result = JSON.parse(text);
        } catch {

            const cleaned = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            result = JSON.parse(cleaned);
        }

        res.json(result);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = app;