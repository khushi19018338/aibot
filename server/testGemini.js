require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const response = await model.generateText({
      prompt: "Hello from test script",
      temperature: 0.7,
      maxOutputTokens: 256,
    });

    console.log("Gemini response:", response.candidates[0].output);
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message || error);
  }
}

testGemini();
