const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/completions', async (req, res) => {
    const { prompt } = req.body;

    const openaiOptions = {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 100,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['/'],
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', openaiOptions, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.send(response.data.choices[0].text);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
