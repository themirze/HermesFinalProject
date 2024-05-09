import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());  // Enabling CORS for all domains

app.get('/random', async (req, res) => {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json');
        const data = await response.json();
        res.json({ useless_fact: data.text });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/daily', async (req, res) => {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/today.json');
        const data = await response.json();
        res.json({ useless_fact: data.text });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
