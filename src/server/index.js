import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/api/savings/analysis", async (req, res) => {
  const mockSavings = [
    { month: "June", total: 80 },
    { month: "July", total: 95 },
    { month: "August", total: 110 },
    { month: "September", total: 120 },
    { month: "October", total: 124 }
  ];

  const totalSaved = mockSavings[mockSavings.length - 1].total;
  const changePercent = ((totalSaved - mockSavings[mockSavings.length - 2].total) / mockSavings[mockSavings.length - 2].total * 100).toFixed(1);

  const userSummary = `Your savings over the past 5 months are: ${mockSavings
    .map(m => `${m.month}: $${m.total}`)
    .join(", ")}. The latest month shows a ${changePercent}% increase.`;

  try {
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a financial assistant that summarizes savings performance in one or two encouraging sentences."
        },
        {
          role: "user",
          content: userSummary
        }
      ],
      max_tokens: 100
    });

    const insight = aiResponse.choices[0].message.content.trim();

    res.json({
      totalSaved,
      changePercent,
      timeline: mockSavings,
      insight
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate insights." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Nudge backend running on port ${PORT}`));
