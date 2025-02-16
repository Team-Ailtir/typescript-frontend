import express from 'express';
import cors from 'cors';

const app = express();
const port = 8042;

app.use(cors());
app.use(express.json());

// Store strings in memory (in a real app, this would be a database)
let strings: string[] = [];

app.get('/strings', (req, res) => {
    res.json(strings);
});

app.post('/strings', (req, res) => {
    const { text } = req.body;
    if (typeof text === 'string' && text.trim()) {
        strings.push(text.trim());
        res.status(201).json(strings);
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
