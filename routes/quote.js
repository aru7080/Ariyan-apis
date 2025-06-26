const express = require("express");
const router = express.Router();

const quotes = [
  "Never give up. 💪",
  "Stay silent, let success make the noise. 🧠",
  "Your only limit is you. 🌟"
];

router.get("/", (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ author: "Ariyan", quote });
});

module.exports = router;
