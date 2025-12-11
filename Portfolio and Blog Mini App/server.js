// Node.js + Express mock server
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const posts = [
    { id: 1, title: "JavaScript Tips", content: "Learn some advanced JS techniques..." },
    { id: 2, title: "CSS Grid Layout", content: "Mastering CSS Grid for responsive design..." },
    { id: 3, title: "Portfolio Website", content: "Building a portfolio to showcase your projects..." }
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
