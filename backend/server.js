const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// Projects API
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "AI Project",
      description: "A cool ML model",
      image: "https://via.placeholder.com/300",
      details: "This project uses YOLO for object detection..."
    },
    {
      id: 2,
      title: "Web App",
      description: "React + Node.js project",
      image: "https://via.placeholder.com/300",
      details: "Built with React frontend and Node.js backend..."
    }
  ]);
});

// Experience API
app.get("/api/experience", (req, res) => {
  res.json([
    {
      id: 1,
      role: "Intern",
      company: "Tech Company",
      period: "2024",
      details: "Worked on backend APIs and automation."
    },
    {
      id: 2,
      role: "Student Assistant",
      company: "University Lab",
      period: "2025",
      details: "Research on Human-Centered AI."
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
