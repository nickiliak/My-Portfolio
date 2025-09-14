const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Your API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Serve React frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
