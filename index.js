const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Default route
app.get("/", (req, res) => {
  res.json({
    author: "Ariyan",
    message: "Welcome to Ariyan APIs 🚀",
    endpoints: ["/quote"]
  });
});

// Import routes
app.use("/quote", require("./routes/quote"));

// Start server
app.listen(PORT, () => {
  console.log(`Ariyan APIs running on port ${PORT}`);
});
